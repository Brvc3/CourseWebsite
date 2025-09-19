// 创建导航栏组件
function createNavbar(currentPage) {
    const navbar = document.createElement('nav');
    navbar.className = 'w-full bg-white/95 backdrop-blur-sm shadow fixed top-0 left-0 z-50';
    navbar.innerHTML = `
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <a href="index.html" class="flex items-center space-x-2 hover:text-blue-600 transition-colors">
                        <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                        </svg>
                        <span class="text-xl font-semibold">课程网站</span>
                    </a>
                </div>
                <!-- 中间导航菜单 -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="index.html" class="text-gray-600 hover:text-blue-600 transition-colors font-medium ${currentPage === 'home' ? 'text-blue-600' : ''}">首页</a>
                    <a href="projects.html" class="text-gray-600 hover:text-blue-600 transition-colors font-medium ${currentPage === 'projects' ? 'text-blue-600' : ''}">项目库</a>
                </div>
                <!-- 右边用户信息 -->
                <div class="flex items-center space-x-4">
                    <div id="userInfo" style="display: none;" class="flex items-center gap-3">
                        <div id="userAvatar" class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold text-sm"></div>
                        <span id="userName" class="text-gray-700 font-medium"></span>
                        <button id="logoutBtn" class="text-gray-500 hover:text-blue-600 transition-colors text-sm">登出</button>
                    </div>
                    <button id="loginBtn" class="px-4 py-2 text-gray-600 hover:text-blue-600 font-medium transition-colors">登录</button>
                    <button id="registerBtn" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">注册</button>
                </div>
            </div>

        </div>
    `;
    
    return navbar;
}

// 为页面添加导航栏
function initializeNavigation(currentPage = '') {
    console.log('Initializing navigation for page:', currentPage);
    
    // 排除课程页面
    if (window.location.pathname.endsWith('course.html')) {
        console.log('Course page detected, skipping navigation');
        return;
    }
    
    const body = document.body;
    const navbar = createNavbar(currentPage);
    body.insertBefore(navbar, body.firstChild);
    console.log('Navigation bar inserted into DOM');
    
    // 为内容添加适当的上边距
    const adjustContent = () => {
        const header = document.querySelector('header');
        const main = document.querySelector('main');
        
        // 设置基础边距
        const baseMargin = '4rem';
        
        if (header) {
            header.style.marginTop = baseMargin;
        } else if (main) {
            main.style.marginTop = baseMargin;
        }
    };

    // 初始调整
    adjustContent();
    
    // 监听窗口大小变化，重新调整内容
    window.addEventListener('resize', adjustContent);
    
    // 延迟一小段时间后更新 UI，确保 AuthManager 已加载
    setTimeout(() => {
        console.log('Checking for AuthManager...');
        if (window.authManager) {
            console.log('AuthManager found, updating UI');
            window.authManager.updateUI();
        } else {
            console.warn('AuthManager not found. Make sure auth.js is loaded before nav.js');
        }
    }, 100);
}