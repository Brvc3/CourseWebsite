// course-loader.js (已升級以支援分P影片)
document.addEventListener('DOMContentLoaded', function() {
    // 延迟检查，确保data-course-id已经设置
    setTimeout(() => {
        const body = document.body;
        const courseId = body.dataset.courseId;
        
        if (!courseId || typeof coursesData === 'undefined' || !coursesData[courseId]) {
            console.error('Course data not found for ID:', courseId);
            document.getElementById('course-title').textContent = '错误：找不到课程信息';
            return;
        }
        
        initializeCourse(courseId);
    }, 100);
});

function initializeCourse(courseId) {
    console.log('Initializing course with ID:', courseId);
    const course = coursesData[courseId];
    console.log('Course data:', course);

    document.title = course.title;
    const courseTitleElement = document.getElementById('course-title');
    if (courseTitleElement) {
        courseTitleElement.textContent = course.title;
    } else {
        console.error('course-title element not found');
    }
    
    const resourceList = document.getElementById('resource-list');
    resourceList.innerHTML = course.resources.map(res => `
        <li class="resource-item flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-blue-50/80 transition-all duration-300 mb-3 border border-blue-100/50 shadow-sm hover:shadow-md">
            <span class="flex items-center">
                <svg class="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                <span class="font-medium text-gray-700">${res.name}</span>
            </span>
            <a href="${res.url}" class="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-all duration-300">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                下载
            </a>
        </li>
    `).join('');

    const videoList = document.getElementById('video-list');
    const playerContainer = document.getElementById('video-player-container');

    // 1. 【已修改】填充影片清單時，同時綁定 bvid 和 page 資料
    videoList.innerHTML = course.videos.map(vid => `
        <li class="video-item rounded-md">
            <button data-bvid="${vid.bvid}" data-page="${vid.page}" class="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 transition-colors rounded-md flex items-center">
                <svg class="w-5 h-5 mr-3 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9A2.25 2.25 0 0 0 13.5 5.25h-9A2.25 2.25 0 0 0 2.25 7.5v9A2.25 2.25 0 0 0 4.5 18.75Z"></path></svg>
                ${vid.name}
            </button>
        </li>
    `).join('');

    // 2. 【已修改】為影片清單添加點擊事件監聽，同時獲取 bvid 和 page
    videoList.addEventListener('click', function(e) {
        const button = e.target.closest('button');
        if (!button) return;

        videoList.querySelectorAll('.video-item').forEach(item => item.classList.remove('active'));
        button.parentElement.classList.add('active');

        const bvid = button.dataset.bvid;
        const page = button.dataset.page; // 獲取 page 資料
        
        // 【已修改】構造B站外鏈播放器時，傳入正確的 page 參數
        const iframeHtml = `
            <iframe 
                src="https://player.bilibili.com/player.html?bvid=${bvid}&page=${page}&autoplay=0" 
                scrolling="no" 
                border="0" 
                frameborder="no" 
                framespacing="0" 
                allowfullscreen="true"
                class="w-full aspect-video rounded-lg">
            </iframe>
        `;
        
        playerContainer.innerHTML = iframeHtml;
    });

    // 渲染闯关模块
    const challengeList = document.getElementById('challenge-list');
    if (challengeList && course.challenges) {
        // 更新统计信息
        updateChallengeStats(course.challenges);
        
        // 渲染闯关卡片
        challengeList.innerHTML = course.challenges.map(challenge => {
            const isCompleted = localStorage.getItem(`challenge_${courseId}_${challenge.id}`) === 'completed';
            const isLocked = challenge.status === 'locked' && !checkUnlockRequirements(challenge, courseId);
            
            const statusClass = isCompleted ? 'bg-green-100 border-green-200' 
                : isLocked ? 'bg-gray-100 border-gray-200' 
                : 'bg-white border-blue-100/50';
            
            const difficultyClass = {
                'easy': 'bg-green-100 text-green-800',
                'medium': 'bg-yellow-100 text-yellow-800',
                'hard': 'bg-red-100 text-red-800'
            }[challenge.difficulty] || 'bg-gray-100 text-gray-800';
            
            const difficultyText = {
                'easy': '入门',
                'medium': '进阶',
                'hard': '挑战'
            }[challenge.difficulty] || '未知';

            return `
                <div class="relative ${statusClass} rounded-xl border p-6 transition-all hover:shadow-lg">
                    ${isLocked ? `
                    <div class="absolute inset-0 rounded-xl bg-gray-900/5 backdrop-blur-sm flex items-center justify-center">
                        <div class="text-center">
                            <svg class="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                            </svg>
                            <p class="text-gray-600 font-medium">完成前置关卡以解锁</p>
                        </div>
                    </div>
                    ` : ''}
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center gap-3">
                            <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 text-blue-600 font-bold">
                                ${challenge.id.replace('level', '')}
                            </div>
                            <div>
                                <h3 class="font-semibold text-lg text-gray-800">${challenge.name}</h3>
                                <p class="text-sm text-gray-500">${challenge.chapter}</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="px-3 py-1 rounded-full text-sm font-medium ${difficultyClass}">
                                ${difficultyText}
                            </span>
                            ${isCompleted ? `
                            <span class="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                已完成
                            </span>` : ''}
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4">${challenge.description}</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-4">
                            <div class="flex items-center gap-1 text-yellow-600">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                                </svg>
                                <span class="font-medium">${challenge.points}分</span>
                            </div>
                            <div class="flex items-center gap-1 text-gray-500">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span>${challenge.estimatedTime}</span>
                            </div>
                        </div>
                        <a href="${!isLocked ? challenge.task.testUrl : '#'}" 
                           class="flex items-center gap-2 px-4 py-2 rounded-lg ${isLocked ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : isCompleted ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-blue-500 text-white hover:bg-blue-600'} transition-colors">
                            ${isCompleted ? `
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                            </svg>
                            查看解析` : `
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                            </svg>
                            开始挑战`}
                        </a>
                    </div>
                </div>
            `;
        }).join('');
    }

    function updateChallengeStats(challenges) {
        const totalPoints = challenges.reduce((sum, c) => sum + c.points, 0);
        const completedChallenges = challenges.filter(c => 
            localStorage.getItem(`challenge_${courseId}_${c.id}`) === 'completed'
        ).length;
        
        document.getElementById('total-points').textContent = `总分: ${totalPoints}`;
        document.getElementById('completed-challenges').textContent = 
            `完成: ${completedChallenges}/${challenges.length}`;
    }

    function checkUnlockRequirements(challenge, courseId) {
        if (!challenge.unlockRequirements) return true;
        return challenge.unlockRequirements.every(reqId => 
            localStorage.getItem(`challenge_${courseId}_${reqId}`) === 'completed'
        );
    }

    // 课程作业列表
    const assignmentList = document.getElementById('assignment-list');
    console.log('Assignment list element:', assignmentList);
    console.log('Course assignments:', course.assignments);
    
    if(assignmentList && course.assignments) {
        // 定义作业文件路径
        const homeworksPath = `courses/${courseId}/homeworks/`;
        const assignments = course.assignments.map((asm, index) => {
            return {
                ...asm,
                index: index + 1,
                docxPath: `${homeworksPath}作业${index + 1}.docx`,
                mdPath: `${homeworksPath}作业${index + 1}.md`
            };
        });

        assignmentList.innerHTML = assignments.map(asm => {
            const isPublished = asm.status === 'published';
            return `
            <div class="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button onclick="toggleAssignment(${asm.index})" class="w-full text-left">
                    <div class="p-4 bg-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h3 class="font-semibold text-lg text-gray-800">第${asm.index}次作业</h3>
                            <p class="text-sm text-gray-500 mt-1">截止日期: ${asm.dueDate}</p>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="px-3 py-1 rounded-full text-sm font-medium ${isPublished ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'}">${isPublished ? '已发布' : '未发布'}</span>
                            <svg id="assignment-arrow-${asm.index}" class="w-5 h-5 text-gray-400 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                            </svg>
                        </div>
                    </div>
                </button>
                <div id="assignment-content-${asm.index}" class="hidden">
                    <div class="border-t border-gray-100">
                        <div class="p-4 bg-gray-50">
                            <div class="flex justify-between items-center mb-4">
                                <h4 class="font-medium text-gray-700">作业内容</h4>
                                ${isPublished ? `
                                <a href="${asm.docxPath}" class="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                                    </svg>
                                    下载Word文档
                                </a>` : ''}
                            </div>
                            <div class="prose max-w-none text-gray-600 bg-white rounded-lg p-6 border border-gray-100" id="assignment-text-${asm.index}">
                                <div class="flex justify-center items-center py-8">
                                    <svg class="animate-spin h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span class="ml-3 text-gray-600">正在加载作业内容...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }).join('');

        // 添加作业展开/折叠和内容加载的JavaScript函数
        const script = document.createElement('script');
        script.textContent = `
            function toggleAssignment(index) {
                const content = document.getElementById('assignment-content-' + index);
                const arrow = document.getElementById('assignment-arrow-' + index);
                const isHidden = content.classList.contains('hidden');
                
                content.classList.toggle('hidden');
                arrow.style.transform = isHidden ? 'rotate(180deg)' : '';

                // 如果是展开状态，则尝试加载作业内容
                if (isHidden) {
                    loadAssignmentContent(index);
                }
            }

            async function loadAssignmentContent(index) {
                const textContainer = document.getElementById('assignment-text-' + index);
                const courseId = document.body.getAttribute('data-course-id');
                const mdPath = \`courses/\${courseId}/homeworks/作业\${index}.md\`;

                console.log('Loading assignment:', index, 'courseId:', courseId, 'path:', mdPath);

                try {
                    const response = await fetch(mdPath);
                    console.log('Fetch response:', response.status, response.ok);
                    if (response.ok) {
                        const markdown = await response.text();
                        console.log('Markdown content length:', markdown.length);
                        console.log('Marked available:', typeof marked !== 'undefined');
                        
                        // 使用marked解析Markdown
                        if (typeof marked !== 'undefined') {
                            const htmlContent = marked.parse(markdown);
                            textContainer.innerHTML = htmlContent;
                        } else {
                            // 如果marked没有加载，直接显示原始文本
                            textContainer.innerHTML = '<pre>' + markdown + '</pre>';
                        }
                        
                        // 添加代码高亮和图表支持
                        if (textContainer.querySelectorAll('pre code').length > 0) {
                            // 如果有代码块，动态加载highlight.js
                            const highlightCSS = document.createElement('link');
                            highlightCSS.rel = 'stylesheet';
                            highlightCSS.href = 'https://unpkg.com/@highlightjs/cdn-assets@11.7.0/styles/github.min.css';
                            document.head.appendChild(highlightCSS);
                            
                            const highlightJS = document.createElement('script');
                            highlightJS.src = 'https://unpkg.com/@highlightjs/cdn-assets@11.7.0/highlight.min.js';
                            highlightJS.onload = () => {
                                document.querySelectorAll('pre code').forEach((block) => {
                                    hljs.highlightBlock(block);
                                });
                            };
                            document.head.appendChild(highlightJS);
                        }
                    } else {
                        throw new Error('Failed to load content');
                    }
                } catch (error) {
                    console.error('Error loading assignment content:', error);
                    textContainer.innerHTML = \`
                        <div class="text-center py-6">
                            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                            </svg>
                            <p class="mt-2 text-gray-600">作业内容暂时无法显示，请下载Word文档查看。</p>
                        </div>
                    \`;
                }
            }
        `;
        document.body.appendChild(script);
    }

    const tabs = document.querySelectorAll('.nav-tab');
    const contentSections = document.querySelectorAll('.content-section');
    const compilerFrame = document.getElementById('compiler-frame');
    const initialCompilerSrc = compilerFrame ? compilerFrame.src : '';
    let compilerLoadedOnce = false;

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(item => item.classList.remove('active-tab'));
            this.classList.add('active-tab');
            const targetId = this.getAttribute('data-target');
            contentSections.forEach(section => {
                section.id === targetId ? section.classList.add('visible') : section.classList.remove('visible');
            });
            if (targetId === 'compiler' && !compilerLoadedOnce && compilerFrame) {
                compilerFrame.src = initialCompilerSrc;
                compilerLoadedOnce = true;
            }
        });
    });
}