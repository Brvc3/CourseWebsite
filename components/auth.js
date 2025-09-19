// 用户认证状态管理
console.log('AuthManager loading...');

class AuthManager {
    constructor() {
        this.isLoggedIn = false;
        this.currentUser = null;
        this.init();
        console.log('AuthManager initialized');
    }

    init() {
        console.log('Initializing AuthManager...');
        try {
            // 检查localStorage中是否有用户信息
            const savedUser = localStorage.getItem('currentUser');
            if (savedUser) {
                this.currentUser = JSON.parse(savedUser);
                this.isLoggedIn = true;
                this.updateUI();
                console.log('User restored from localStorage:', this.currentUser);
            }
        } catch (error) {
            console.error('Error initializing AuthManager:', error);
        }
    }

    // 用户注册
    register(username, password) {
        console.log('Attempting to register user:', username);
        try {
            // 检查用户是否已存在
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            if (users.find(u => u.username === username)) {
                throw new Error('用户名已存在');
            }

            // 创建新用户
            const newUser = {
                username,
                password,  // 注意：实际应用中应该加密存储
                createdAt: new Date().toISOString()
            };

            // 保存用户
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            console.log('User registered successfully');

            // 自动登录
            this.login(username, password);
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    }

    // 用户登录
    login(username, password) {
        console.log('Attempting to login user:', username);
        try {
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(u => u.username === username && u.password === password);

            if (!user) {
                throw new Error('用户名或密码错误');
            }

            // 保存当前用户信息
            this.currentUser = {
                username: user.username,
                createdAt: user.createdAt
            };
            this.isLoggedIn = true;
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
            
            console.log('User logged in successfully:', this.currentUser);
            this.updateUI();
            this.closeModal();
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }

    // 用户登出
    logout() {
        console.log('Logging out user:', this.currentUser?.username);
        this.currentUser = null;
        this.isLoggedIn = false;
        localStorage.removeItem('currentUser');
        this.updateUI();
    }

    // 生成用户头像文字
    generateAvatarText(username) {
        if (!username) return '';
        
        // 检查是否包含中文字符
        const chineseRegex = /[\u4e00-\u9fa5]/;
        const hasChineseChar = chineseRegex.test(username);
        
        if (hasChineseChar) {
            // 如果包含中文，取第一个字符
            return username.charAt(0);
        } else {
            // 如果是英文，取前两个字符并转为大写
            return username.substring(0, 2).toUpperCase();
        }
    }

    // 生成头像背景色
    generateAvatarColor(username) {
        const colors = [
            '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6',
            '#06B6D4', '#84CC16', '#F97316', '#EC4899', '#6366F1'
        ];
        let hash = 0;
        for (let i = 0; i < username.length; i++) {
            hash = username.charCodeAt(i) + ((hash << 5) - hash);
        }
        return colors[Math.abs(hash) % colors.length];
    }

    // 更新UI显示
    updateUI() {
        console.log('Updating UI, isLoggedIn:', this.isLoggedIn);
        const loginBtn = document.getElementById('loginBtn');
        const registerBtn = document.getElementById('registerBtn');
        const userInfoDiv = document.getElementById('userInfo');
        const userAvatar = document.getElementById('userAvatar');
        const userName = document.getElementById('userName');

        console.log('UI elements:', { loginBtn, registerBtn, userInfoDiv, userAvatar, userName });
        
        if (this.isLoggedIn && this.currentUser) {
            // 隐藏登录注册按钮，显示用户信息
            if (loginBtn) loginBtn.style.display = 'none';
            if (registerBtn) registerBtn.style.display = 'none';
            if (userInfoDiv) {
                userInfoDiv.style.display = 'flex';
                
                // 设置头像
                if (userAvatar) {
                    const avatarText = this.generateAvatarText(this.currentUser.username);
                    const avatarColor = this.generateAvatarColor(this.currentUser.username);
                    userAvatar.textContent = avatarText;
                    userAvatar.style.backgroundColor = avatarColor;
                }
                
                // 设置用户名
                if (userName) {
                    userName.textContent = this.currentUser.username;
                }
                
                // 如果没有专门的头像和用户名元素（旧版布局），使用原有方式
                if (!userAvatar && !userName) {
                    userInfoDiv.innerHTML = 
                        '<span class="mr-4 text-gray-600">' + this.currentUser.username + '</span>' +
                        '<button id="logoutBtn" class="text-gray-600 hover:text-blue-600 transition-colors">登出</button>';
                }
                
                // 添加登出按钮事件
                const logoutBtn = document.getElementById('logoutBtn');
                if (logoutBtn) {
                    logoutBtn.addEventListener('click', () => this.logout());
                }
            }
        } else {
            // 显示登录注册按钮，隐藏用户信息
            if (loginBtn) loginBtn.style.display = 'block';
            if (registerBtn) registerBtn.style.display = 'block';
            if (userInfoDiv) userInfoDiv.style.display = 'none';
        }
    }

    // 显示登录/注册模态框
    showModal(type = 'login') {
        console.log('Showing modal:', type);
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.id = 'authModal';
        
        const formTitle = type === 'login' ? '登录' : '注册';
        const switchText = type === 'login' ? 
            '还没有账号？<a href="#" class="text-blue-600 hover:underline" onclick="authManager.showModal(\'register\'); return false;">立即注册</a>' :
            '已有账号？<a href="#" class="text-blue-600 hover:underline" onclick="authManager.showModal(\'login\'); return false;">立即登录</a>';

        modal.innerHTML = '<div class="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">' +
            '<button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onclick="document.getElementById(\'authModal\').remove()">' +
            '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button>' +
            '<h2 class="text-2xl font-bold mb-6">' + formTitle + '</h2>' +
            '<form id="authForm" class="space-y-4">' +
            '<div><label class="block text-gray-700 mb-2" for="username">用户名</label>' +
            '<input type="text" id="username" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required></div>' +
            '<div><label class="block text-gray-700 mb-2" for="password">密码</label>' +
            '<input type="password" id="password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required></div>' +
            '<button type="submit" class="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">' +
            formTitle + '</button>' +
            '<p class="text-center text-gray-600">' + switchText + '</p></form></div>';
        
        document.body.appendChild(modal);

        console.log('Modal created and added to document');
        
        // 添加表单提交事件
        const form = document.getElementById('authForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;
                
                try {
                    if (type === 'login') {
                        this.login(username, password);
                    } else {
                        this.register(username, password);
                    }
                } catch (error) {
                    alert(error.message);
                }
            });
            console.log('Form event listener added');
        } else {
            console.error('Form element not found');
        }
    }

    closeModal() {
        const modal = document.getElementById('authModal');
        if (modal) {
            modal.remove();
            console.log('Modal closed');
        }
    }
}

// 创建全局认证管理器实例
console.log('Creating global AuthManager instance...');
window.authManager = new AuthManager();

// 初始化事件监听
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded: Setting up button listeners');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            console.log('Login button clicked');
            window.authManager.showModal('login');
        });
    }
    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            console.log('Register button clicked');
            window.authManager.showModal('register');
        });
    }
});