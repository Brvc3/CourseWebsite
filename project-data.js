// 项目数据
const projectsData = {
    // 入门项目
    practices: [
        {
            title: "Mini cJSON",
            description: "实现一个简化版的 JSON 解析器，学习字符串处理、递归下降解析和数据结构。基于开源项目 cJSON，但大幅简化以适合学习。",
            difficulty: "入门",
            language: "C",
            tags: ["解析器", "数据结构"],
            course: "c-language",
            githubUrl: "https://github.com/DaveGamble/cJSON",
            features: [
                "支持基本的 JSON 数据类型",
                "字符串解析与生成",
                "递归数据结构处理"
            ]
        },
        {
            title: "TinyHTTPd",
            description: "一个超轻量级的 HTTP 服务器，仅 500 行代码，非常适合学习网络编程基础和 HTTP 协议。源自著名的教学项目 Tinyhttpd。",
            difficulty: "入门",
            language: "C",
            tags: ["网络", "HTTP"],
            course: "computer-networks",
            githubUrl: "https://github.com/EZLippi/Tinyhttpd",
            features: [
                "基本的 HTTP GET/POST 支持",
                "简单的并发处理",
                "CGI 程序执行"
            ]
        },
        {
            title: "Simple-DBM",
            description: "一个简单的数据库管理系统，帮助理解数据库原理。基于 CMU Database Systems 课程项目，但简化了实现。",
            difficulty: "入门",
            language: "C",
            tags: ["数据库", "文件系统"],
            course: "data-structures",
            githubUrl: "https://github.com/cmu-db/bustub",
            features: [
                "基本的表操作(CRUD)",
                "简单的索引实现",
                "文件存储管理"
            ]
        }
    ],
    // 进阶项目
    assignments: [
        {
            title: "Mini Redis",
            description: "实现一个简化版的 Redis 服务器，包含基本的键值存储、过期机制和简单的数据结构。基于 Redis 源码，但大幅简化以适合学习。",
            difficulty: "进阶",
            language: "C",
            tags: ["数据库", "网络编程", "并发"],
            course: "software-engineering",
            githubUrl: "https://github.com/redis/redis",
            features: [
                "网络事件循环",
                "基本数据结构实现",
                "简单的持久化机制",
                "并发连接处理"
            ],
            deadline: "2024-12-31",
            status: "进行中"
        },
        {
            title: "SimpleKV",
            description: "一个分布式键值存储系统，实现基本的分布式共识算法和数据复制机制。基于 MIT 6.824 分布式系统课程项目。",
            difficulty: "进阶",
            language: "C",
            tags: ["分布式系统", "网络编程"],
            course: "software-engineering",
            githubUrl: "https://github.com/mit-pdos/mit-6.824-labs",
            features: [
                "Leader 选举",
                "日志复制",
                "故障恢复",
                "分布式共识"
            ],
            deadline: "2024-12-31",
            status: "进行中"
        }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    const practiceContainer = document.getElementById('practice-projects');
    const assignmentContainer = document.getElementById('course-assignments');

    // 渲染入门项目
    if (practiceContainer) {
        practiceContainer.innerHTML = projectsData.practices.map(project => `
            <div class="bg-white rounded-xl p-6 flex flex-col h-full border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div class="flex items-start justify-between mb-4">
                    <h3 class="text-xl font-bold text-gray-900">${project.title}</h3>
                    <span class="px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(project.difficulty)}">${project.difficulty}</span>
                </div>
                <p class="text-gray-600 flex-grow mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.tags ? project.tags.map(tag => 
                        `<span class="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-sm">${tag}</span>`
                    ).join('') : ''}
                </div>
                <div class="space-y-3 mb-4">
                    <h4 class="font-medium text-gray-900">主要特性：</h4>
                    <ul class="space-y-2">
                        ${project.features.map(feature => 
                            `<li class="flex items-start">
                                <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                </svg>
                                <span class="text-gray-600">${feature}</span>
                            </li>`
                        ).join('')}
                    </ul>
                </div>
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div class="flex items-center">
                        <span class="flex items-center text-sm text-gray-500">
                            <svg class="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 14.016q2.484 0 4.242-1.758t1.758-4.242-1.758-4.242-4.242-1.758-4.242 1.758-1.758 4.242 1.758 4.242 4.242 1.758zM20.016 2.016q1.266 0 2.133 0.867t0.867 2.133v12q0 1.266-0.867 2.133t-2.133 0.867h-16.031q-1.266 0-2.133-0.867t-0.867-2.133v-12q0-1.266 0.867-2.133t2.133-0.867h16.031zM18.984 18.984v-1.969h-13.969v1.969h13.969zM18.984 15v-1.969h-13.969v1.969h13.969z"></path>
                            </svg>
                            ${project.language}
                        </span>
                    </div>
                    <a href="${project.githubUrl}" target="_blank" rel="noopener" class="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        查看源码
                    </a>
                </div>
            </div>
        `).join('');
    }

    // 渲染进阶项目
    if (assignmentContainer) {
        assignmentContainer.innerHTML = projectsData.assignments.map(project => `
            <div class="bg-white rounded-xl p-6 flex flex-col h-full border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div class="flex items-start justify-between mb-4">
                    <h3 class="text-xl font-bold text-gray-900">${project.title}</h3>
                    <div class="flex gap-2">
                        <span class="px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(project.difficulty)}">${project.difficulty}</span>
                        <span class="px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}">${project.status}</span>
                    </div>
                </div>
                <p class="text-gray-600 flex-grow mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.tags ? project.tags.map(tag => 
                        `<span class="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-sm">${tag}</span>`
                    ).join('') : ''}
                </div>
                <div class="space-y-3 mb-4">
                    <h4 class="font-medium text-gray-900">主要特性：</h4>
                    <ul class="space-y-2">
                        ${project.features.map(feature => 
                            `<li class="flex items-start">
                                <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                </svg>
                                <span class="text-gray-600">${feature}</span>
                            </li>`
                        ).join('')}
                    </ul>
                </div>
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div class="flex items-center gap-4">
                        <span class="flex items-center text-sm text-gray-500">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                            截止: ${project.deadline}
                        </span>
                        <span class="flex items-center text-sm text-gray-500">
                            <svg class="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 14.016q2.484 0 4.242-1.758t1.758-4.242-1.758-4.242-4.242-1.758-4.242 1.758-1.758 4.242 1.758 4.242 4.242 1.758zM20.016 2.016q1.266 0 2.133 0.867t0.867 2.133v12q0 1.266-0.867 2.133t-2.133 0.867h-16.031q-1.266 0-2.133-0.867t-0.867-2.133v-12q0-1.266 0.867-2.133t2.133-0.867h16.031zM18.984 18.984v-1.969h-13.969v1.969h13.969zM18.984 15v-1.969h-13.969v1.969h13.969z"></path>
                            </svg>
                            ${project.language}
                        </span>
                    </div>
                    <a href="${project.githubUrl}" target="_blank" rel="noopener" class="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        查看源码
                    </a>
                </div>
            </div>
        `).join('');
    }
});

// 难度等级颜色
function getDifficultyColor(difficulty) {
    switch(difficulty) {
        case '入门':
            return 'bg-green-100 text-green-800';
        case '中等':
            return 'bg-yellow-100 text-yellow-800';
        case '进阶':
            return 'bg-red-100 text-red-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
}

// 状态颜色
function getStatusColor(status) {
    switch(status) {
        case '进行中':
            return 'bg-blue-100 text-blue-800';
        case '已结束':
            return 'bg-gray-100 text-gray-800';
        case '即将开始':
            return 'bg-yellow-100 text-yellow-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
}