// --- 数据中心 ---
// 在这里集中管理所有课程信息
// 对象的键 (例如 'c-language') 必须与课程页面的HTML文件名 (c-language.html) 匹配。
const coursesData = {
    'c-language': {
        title: 'C语言程序设计',
        subtitle: '一门为未来工程师打造的实践课程',
        description: '学习编程基础，掌握C语言核心语法、指针、内存管理等，为后续的专业课程打下坚实基础。',
        challenges: [
            {
                id: 'level1',
                name: '变量的艺术',
                chapter: '第1章',
                description: '通过简单的温度转换程序，掌握变量的基本操作。',
                status: 'published',
                difficulty: 'easy',
                points: 10,
                estimatedTime: '20分钟',
                task: {
                    title: '温度转换器',
                    description: '编写一个程序，将摄氏温度转换为华氏温度。这是你的第一个挑战，让我们开始吧！',
                    requirements: [
                        '声明一个float类型变量存储摄氏温度',
                        '读取用户输入的摄氏温度',
                        '使用公式 F = C * 9/5 + 32 进行转换',
                        '打印转换后的温度，保留一位小数'
                    ],
                    hints: [
                        '使用scanf("%f", &celsius)读取浮点数',
                        '使用printf("%.1f", fahrenheit)输出一位小数',
                        '记得包含stdio.h头文件'
                    ],
                    sampleInput: '26.5',
                    sampleOutput: '79.7',
                    testUrl: 'https://pintia.cn/problem-sets/1234567890/problems/1234567891'
                }
            },
            {
                id: 'level2',
                name: '条件判断大师',
                chapter: '第2章',
                description: '通过编写成绩评级程序，掌握if-else条件判断的使用。',
                status: 'published',
                difficulty: 'easy',
                points: 15,
                estimatedTime: '30分钟',
                task: {
                    title: '成绩评级系统',
                    description: '创建一个程序，根据输入的成绩自动判定等级。让我们用条件语句来实现智能判断！',
                    requirements: [
                        '读取一个0-100的整数成绩',
                        '根据成绩范围判定等级：',
                        '90-100分为A',
                        '80-89分为B',
                        '70-79分为C',
                        '60-69分为D',
                        '60分以下为F'
                    ],
                    hints: [
                        '使用多重if-else结构',
                        '注意处理边界值',
                        '考虑输入验证'
                    ],
                    sampleInput: '85',
                    sampleOutput: 'B',
                    testUrl: 'https://pintia.cn/problem-sets/1234567890/problems/1234567892'
                }
            },
            {
                id: 'level3',
                name: '循环的魔力',
                chapter: '第3章',
                description: '挑战斐波那契数列，体验循环结构的强大。',
                status: 'locked',
                difficulty: 'medium',
                points: 20,
                estimatedTime: '45分钟',
                task: {
                    title: '斐波那契数列生成器',
                    description: '编写一个程序，生成斐波那契数列的第n个数。让我们用循环来征服这个经典问题！',
                    requirements: [
                        '读取一个正整数n (1 ≤ n ≤ 20)',
                        '计算斐波那契数列的第n个数',
                        '使用循环而不是递归来实现',
                        '考虑程序的性能'
                    ],
                    hints: [
                        '使用三个变量交替计算',
                        '记住前两个数都是1',
                        '善用for循环'
                    ],
                    sampleInput: '6',
                    sampleOutput: '8',
                    testUrl: 'https://pintia.cn/problem-sets/1234567890/problems/1234567893'
                },
                unlockRequirements: ['level1', 'level2']
            }
        ],
        resources: [
            { name: '第01章 C 语言概述.ppt', url: 'courses/c-language/resources/第01章 C 语言概述.ppt' },
            { name: "第02章 结构化程序设计与算法.ppt", url: 'courses/c-language/resources/第02章 结构化程序设计与算法.ppt' },
            { name: "第03章 数据类型及其运算.ppt", url: 'courses/c-language/resources/第03章 数据类型及其运算.ppt' },
            { name: "第04章 顺序结构程序设计.ppt"   , url: 'courses/c-language/resources/第04章 顺序结构程序设计.ppt' },
            { name: "第05章 选择结构程序设计.ppt"  , url: 'courses/c-language/resources/第05章 选择结构程序设计.ppt' },
            { name: "第06章 循环结构程序设计.ppt"  , url: 'courses/c-language/resources/第06章 循环结构程序设计.ppt' },
            { name: "第07章 数组及其应用.ppt"      , url: 'courses/c-language/resources/第07章 数组及其应用.ppt' },
            { name: "第08章 函数及其应用.ppt"      , url: 'courses/c-language/resources/第08章 函数及其应用.ppt' },
            { name: "第09章 指针及其应用.ppt"      , url: 'courses/c-language/resources/第09章 指针及其应用.ppt' },
            { name: "第10章 自定义类型及其应用.ppt", url: 'courses/c-language/resources/第10章 自定义类型及其应用.ppt' },
            { name: "第11章 文件及其应用.ppt", url: 'courses/c-language/resources/第11章 文件及其应用.ppt' },
            { name: "第13章 位运算.ppt", url: 'courses/c-language/resources/第13章 位运算.ppt' }
        ],
        videos: [
                    {
                "name": "C语言简史",
                "bvid": "BV1dr4y1n7vA",
                "page": 1
        },
        {
                "name": "1.1.1 计算机与编程语言：计算机怎么做事情的，编程语言是什么_高清",
                "bvid": "BV1dr4y1n7vA",
                "page": 2
        },
        {
                "name": "1.1.2 计算机的思维方式：重复是计算机最擅长的_高清",
                "bvid": "BV1dr4y1n7vA",
                "page": 3
        },
        {
                "name": "1.2.1 为什么是C：C语言在工业界有重要地位，在很多领域无可替代_高清",
                "bvid": "BV1dr4y1n7vA",
                "page": 4
        },
        {
                "name": "1.2.2 简单历史：关于C语言和版本的极其简单的历史_高清",
                "bvid": "BV1dr4y1n7vA",
                "page": 5
        },
        {
                "name": "1.2.3 编程软件：C语言的编程软件选择太多，我们推荐DevC++_高清",
                "bvid": "BV1dr4y1n7vA",
                "page": 6
        },
        {
                "name": "1.3.1 第一个C程序：如何在DevC++中编辑、编译和运行程序_高清",
                "bvid": "BV1dr4y1n7vA",
                "page": 7
        },
        {
                "name": "1.3.2 详解第一个程序：程序框架、printf、出错怎么办_高清",
                "bvid": "BV1dr4y1n7vA",
                "page": 8
        },
        {
                "name": "1.3.3 做点计算：如何让程序输出算术结果_高清",
                "bvid": "BV1dr4y1n7vA",
                "page": 9
        },
        {
                "name": "1.3.4 MacOSX如何在命令行编辑、编译和运行C程序_高清",
                "bvid": "BV1dr4y1n7vA",
                "page": 10
        },
        {
                "name": "2.1.1 第二周概述_高清",
                "bvid": "BV1dr4y1n7vA",
                "page": 11
        },
        {
                "name": "2.1.2 变量定义：变量是做什么的，如何定义一个变量_高清",
                "bvid": "BV1dr4y1n7vA",
                "page": 12
        },
        {
                "name": "2.1.3 变量赋值与初始化：以及如何读输入的数字_高清",
                "bvid": "BV1dr4y1n7vA",
                "page": 13
        },
        {
                "name": "2.1.4 变量输入：如何让程序读入用户输入的数字，scanf14讲 关于scanf_高清",
                "bvid": "BV1dr4y1n7vA",
                "page": 14
        },
        {
                "name": "2.1.5 常量vs变量：不变的量是常量_高清",
                "bvid": "BV1dr4y1n7vA",
                "page": 15
        },
        {
                "name": "2.1.6 浮点数：整数运算的结果只有整数部分，不然就要用浮点数_高清",
                "bvid": "BV1dr4y1n7vA",
                "page": 16
        },
        {
                "name": "2.2.1 表达式：运算符和算子，取余计算，程序就是数据加计算_高清",
                "bvid": "BV1dr4y1n7vA",
                "page": 17
        },
        {
                "name": "2.2.2 运算符优先级：优先级、结合关系、赋值运算符_高清",
                "bvid": "BV1dr4y1n7vA",
                "page": 18
        },
        {
                "name": "2.2.3 交换变量：如何交换两个变量的值，顺便看下Dev的调试功能_高清",
                "bvid": "BV1dr4y1n7vA",
                "page": 19
        },
        {
                "name": "2.2.4 复合赋值和递增递减：这是两类有历史也有争议的运算符_高清",
                "bvid": "BV1dr4y1n7vA",
                "page": 20
        },
        {
                "name": "2.2.5 如何使用PAT系统来做编程练习题_高清",
                "bvid": "BV1dr4y1n7vA",
                "page": 21
        },
        {
                "name": "3.1.1 PAT再解释_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 22
        },
        {
                "name": "3.1.2 第二周习题解析_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 23
        },
        {
                "name": "3.1.3 0的故事_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 24
        },
        {
                "name": "3.2.1 做判断：if语句根据条件决定做还是不做_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 25
        },
        {
                "name": "3.2.2 判断的条件：关系运算，做比较的运算符_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 26
        },
        {
                "name": "3.2.3 找零计算器：判断，注释，流程图_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 27
        },
        {
                "name": "3.2.4 否则的话：如果条件不成立呢？_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 28
        },
        {
                "name": "3.2.5 if语句再探：if和else后面也可以没有{}而是一条语句_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 29
        },
        {
                "name": "3.3.1 嵌套的if-else：在if或else后面要执行的还是if语句_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 30
        },
        {
                "name": "3.3.2 级联的if-else_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 31
        },
        {
                "name": "3.3.4 多路分支：switch-case语句_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 32
        },
        {
                "name": "4.1.1 循环：有些事情就得用循环才能解决_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 33
        },
        {
                "name": "4.1.2 while循环：就像if一样，条件满足就不断地做后面的句子_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 34
        },
        {
                "name": "4.1.3 do-while循环：不管三七二十一，先做循环内的句子_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 35
        },
        {
                "name": "4.2.2 猜数_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 36
        },
        {
                "name": "4.2.3 算平均数_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 37
        },
        {
                "name": "4.2.4 整数求逆_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 38
        },
        {
                "name": "5.1.1 for循环：这是最古老的循环，确实样子看上去有点古怪_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 39
        },
        {
                "name": "5.1.2 循环的计算和选择：如何计算循环的次数，如何选择不同的循环_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 40
        },
        {
                "name": "5.2.1 循环控制：如何用break和continue来控制循环_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 41
        },
        {
                "name": "5.2.2 嵌套的循环：在循环里面还是循环_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 42
        },
        {
                "name": "5.2.3 从嵌套的循环中跳出：break只能跳出其所在的循环_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 43
        },
        {
                "name": "5.3.1 前n项求和_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 44
        },
        {
                "name": "5.3.2 整数分解_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 45
        },
        {
                "name": "5.3.3 求最大公约数_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 46
        },
        {
                "name": "6.1.1 编程练习解析4-0：给定条件的整数集_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 47
        },
        {
                "name": "6.1.2 编程练习解析4-1：水仙花数_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 48
        },
        {
                "name": "6.1.3 编程练习解析4-2：九九乘法表_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 49
        },
        {
                "name": "6.1.4 编程练习解析4-3：统计素数求和_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 50
        },
        {
                "name": "6.1.5 编程练习解析4-4：猜数游戏_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 51
        },
        {
                "name": "6.1.6 编程练习解析5-0：n项求和_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 52
        },
        {
                "name": "6.1.7 编程练习解析5-1~5-3_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 53
        },
        {
                "name": "6.2.1 数据类型：C语言有哪些基础数据类型，sizeof可以做什么_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 54
        },
        {
                "name": "6.2.2 整数类型：除了int，还有多少整数类型_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 55
        },
        {
                "name": "6.2.3 整数的内部表达：整数是如何表达的，尤其是负数如何表达_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 56
        },
        {
                "name": "6.2.4 整数的范围：如何推算整数类型所能表达的数的范围，越界了会怎样_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 57
        },
        {
                "name": "6.2.5 整数的格式化：如何格式化输入输出整数，如何处理8进制和16进制_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 58
        },
        {
                "name": "6.2.6 选择整数类型：没什么特殊需要就只用int就好了_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 59
        },
        {
                "name": "6.2.7 浮点类型：double和float，它们是什么，如何输入输出_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 60
        },
        {
                "name": "6.2.8 浮点的范围与精度：浮点数到底能表示哪些数_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 61
        },
        {
                "name": "6.2.9 字符类型_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 62
        },
        {
                "name": "6.2.10 逃逸字符_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 63
        },
        {
                "name": "6.2.11 类型转换：如何在不同类型之间做转换_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 64
        },
        {
                "name": "6.3.1 逻辑类型：表示关系运算和逻辑运算结果的量_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 65
        },
        {
                "name": "6.3.2 逻辑运算：对逻辑量进行与、或、非运算_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 66
        },
        {
                "name": "6.3.3 条件运算和逗号运算_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 67
        },
        {
                "name": "7.1.1 初见函数_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 68
        },
        {
                "name": "7.1.2 函数的定义和使用_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 69
        },
        {
                "name": "7.1.3 从函数中返回_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 70
        },
        {
                "name": "7.2.1 函数原型_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 71
        },
        {
                "name": "7.2.2 参数传递_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 72
        },
        {
                "name": "7.2.3 本地变量_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 73
        },
        {
                "name": "7.2.4 函数庶事：一些有关函数的细节问题，main()是什么_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 74
        },
        {
                "name": "8.1.1 初试数组_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 75
        },
        {
                "name": "8.1.2 定义数组_高清 1080P",
                "bvid": "BV1dr4y1n7vA",
                "page": 76
        },
        {
                "name": "8.1.3 数组的例子：统计个数_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 77
        },
        {
                "name": "8.2.1 数组运算_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 78
        },
        {
                "name": "8.2.2 数组例子：素数_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 79
        },
        {
                "name": "8.2.3 二维数组_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 80
        },
        {
                "name": "9.1.1 取地址运算：&运算符取得变量的地址_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 81
        },
        {
                "name": "9.1.2 指针：指针变量就是记录地址的变量_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 82
        },
        {
                "name": "9.1.3 指针的使用：指针有什么用呢？_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 83
        },
        {
                "name": "9.1.4 指针与数组：为什么数组传进函数后的sizeof不对了_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 84
        },
        {
                "name": "9.1.5 指针与const：指针本身和所指的变量都可能const_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 85
        },
        {
                "name": "9.2.1 指针运算_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 86
        },
        {
                "name": "9.2.2 动态内存分配_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 87
        },
        {
                "name": "10.1.1 字符串_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 88
        },
        {
                "name": "10.1.2 字符串变量_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 89
        },
        {
                "name": "10.1.3 字符串输入输出_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 90
        },
        {
                "name": "10.1.4 字符串数组_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 91
        },
        {
                "name": "10.2.1 单字符输入输出_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 92
        },
        {
                "name": "10.2.2 字符串函数strlen_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 93
        },
        {
                "name": "10.2.3 字符串函数strc_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 94
        },
        {
                "name": "10.2.4 字符串函数strcpy_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 95
        },
        {
                "name": "10.2.6 字符串搜索函数_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 96
        },
        {
                "name": "11.1.1 枚举_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 97
        },
        {
                "name": "附1 ACLLib介绍，看几个小游戏的演示_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 98
        },
        {
                "name": "附2 Win32API简单介绍，太难了，咱不学！_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 99
        },
        {
                "name": "附3 DevC++建ACLLib项目，第一个窗口跑起来_高清 720P",
                "bvid": "BV1dr4y1n7vA",
                "page": 100
        },
        ],
        assignments: [
            { name: '第一次作业', dueDate: '2025-10-10', url: 'courses/c-language/homeworks/作业1.docx', status: 'published' },
            { name: '第二次作业', dueDate: '2025-10-24', url: 'courses/c-language/homeworks/作业2.docx', status: 'published' },
            { name: '第三次作业', dueDate: '2025-11-07', url: 'courses/c-language/homeworks/作业3.docx', status: 'published' },
            { name: '第四次作业', dueDate: '2025-11-21', url: 'courses/c-language/homeworks/作业4.docx', status: 'published' },
            { name: '第五次作业', dueDate: '2025-12-05', url: 'courses/c-language/homeworks/作业5.docx', status: 'published' },
            { name: '第六次作业', dueDate: '2025-12-19', url: 'courses/c-language/homeworks/作业6.docx', status: 'unpublished' },
            { name: '第七次作业', dueDate: '2026-01-02', url: 'courses/c-language/homeworks/作业7.docx', status: 'unpublished' },
        ]
    },
    'data-structures': {
        title: '数据结构',
        subtitle: '计算机科学的核心，高效解决问题的关键',
        description: '探讨数组、链表、栈、队列、树、图等基本数据结构，并分析相关算法的时间与空间复杂度。',
        resources: [
            { name: '第01章.ppt', url: 'courses/data-structures/resources/第01章.ppt' },
            { name: '第02章.ppt', url: 'courses/data-structures/resources/第02章.ppt' },
            { name: '第03章.ppt', url: 'courses/data-structures/resources/第03章.ppt' },
            { name: '第04章.ppt', url: 'courses/data-structures/resources/第04章.ppt' },
            { name: '第05章.ppt', url: 'courses/data-structures/resources/第05章.ppt' },
            { name: '第06章.ppt', url: 'courses/data-structures/resources/第06章.ppt' },
            { name: '第07章.ppt', url: 'courses/data-structures/resources/第07章.ppt' },
            { name: '第08章.ppt', url: 'courses/data-structures/resources/第08章.ppt' },
            { name: '第09章.ppt', url: 'courses/data-structures/resources/第09章.ppt' },
            { name: '第10章.ppt', url: 'courses/data-structures/resources/第10章.ppt' },
            { name: '第11章.ppt', url: 'courses/data-structures/resources/第11章.ppt' }
    ],
        videos: [
                    {
                "name": "第01周a--前言",
                "bvid": "BV1nJ411V7bd",
                "page": 1
        },
        {
                "name": "第01周b--1.1数据结构研究",
                "bvid": "BV1nJ411V7bd",
                "page": 2
        },
        {
                "name": "第01周c--1.2基本概念和术语1",
                "bvid": "BV1nJ411V7bd",
                "page": 3
        },
        {
                "name": "第01周d--1.2基本概念和术语2",
                "bvid": "BV1nJ411V7bd",
                "page": 4
        },
        {
                "name": "第01周e--1.3抽象数据类型的表示与实现",
                "bvid": "BV1nJ411V7bd",
                "page": 5
        },
        {
                "name": "第01周f--1.4算法与算法分析1",
                "bvid": "BV1nJ411V7bd",
                "page": 6
        },
        {
                "name": "第01周g--1.4算法与算法分析2",
                "bvid": "BV1nJ411V7bd",
                "page": 7
        },
        {
                "name": "第01周h--1.4算法与算法分析3",
                "bvid": "BV1nJ411V7bd",
                "page": 8
        },
        {
                "name": "第01周h--1.4算法与算法分析4",
                "bvid": "BV1nJ411V7bd",
                "page": 9
        },
        {
                "name": "第02周01--2.1线性表的定义和特点",
                "bvid": "BV1nJ411V7bd",
                "page": 10
        },
        {
                "name": "第02周02--2.2案例引入",
                "bvid": "BV1nJ411V7bd",
                "page": 11
        },
        {
                "name": "第02周03--2.3线性表的类型定义",
                "bvid": "BV1nJ411V7bd",
                "page": 12
        },
        {
                "name": "第02周04--2.4线性表的顺序表示和实现1",
                "bvid": "BV1nJ411V7bd",
                "page": 13
        },
        {
                "name": "第02周05--2.4线性表的顺序表示和实现2",
                "bvid": "BV1nJ411V7bd",
                "page": 14
        },
        {
                "name": "第02周06--类C语言有关操作补充1",
                "bvid": "BV1nJ411V7bd",
                "page": 15
        },
        {
                "name": "第02周07--类C语言有关操作补充2",
                "bvid": "BV1nJ411V7bd",
                "page": 16
        },
        {
                "name": "第02周08--2.4线性表的顺序表示和实现3",
                "bvid": "BV1nJ411V7bd",
                "page": 17
        },
        {
                "name": "第02周09--2.4线性表的顺序表示和实现4--查找算法",
                "bvid": "BV1nJ411V7bd",
                "page": 18
        },
        {
                "name": "第02周10--2.4线性表的顺序表示和实现5--插入算法",
                "bvid": "BV1nJ411V7bd",
                "page": 19
        },
        {
                "name": "第02周11--2.4线性表的顺序表示和实现6--删除算法",
                "bvid": "BV1nJ411V7bd",
                "page": 20
        },
        {
                "name": "第02周12--顺序表小结",
                "bvid": "BV1nJ411V7bd",
                "page": 21
        },
        {
                "name": "第3周01--2.5线性表的链式表示和实现1--链表概念",
                "bvid": "BV1nJ411V7bd",
                "page": 22
        },
        {
                "name": "第3周02--2.5线性表的链式表示和实现2--单链表的定义",
                "bvid": "BV1nJ411V7bd",
                "page": 23
        },
        {
                "name": "第3周03--2.5线性表的链式表示和实现3--单链表基本操作1-初始化和判断空表",
                "bvid": "BV1nJ411V7bd",
                "page": 24
        },
        {
                "name": "第3周04--2.5线性表的链式表示和实现4--单链表基本操作2--销毁单链表",
                "bvid": "BV1nJ411V7bd",
                "page": 25
        },
        {
                "name": "第3周05--2.5线性表的链式表示和实现5--单链表基本操作3--清空单链表",
                "bvid": "BV1nJ411V7bd",
                "page": 26
        },
        {
                "name": "第3周06--2.5线性表的链式表示和实现6--单链表基本操作4--求单链表的表",
                "bvid": "BV1nJ411V7bd",
                "page": 27
        },
        {
                "name": "第3周07--2.5线性表的链式表示和实现7--单链表基本操作5--取第i个元素值",
                "bvid": "BV1nJ411V7bd",
                "page": 28
        },
        {
                "name": "第3周08--2.5线性表的链式表示和实现8--单链表基本操作6--按值查找",
                "bvid": "BV1nJ411V7bd",
                "page": 29
        },
        {
                "name": "第3周09--2.5线性表的链式表示和实现9--单链表基本操作7--插入节点",
                "bvid": "BV1nJ411V7bd",
                "page": 30
        },
        {
                "name": "第3周10--2.5线性表的链式表示和实现10--单链表基本操作8--删除节点",
                "bvid": "BV1nJ411V7bd",
                "page": 31
        },
        {
                "name": "第3周11--2.5线性表的链式表示和实现11--单链表基本操作9--查找插入删除算法分析",
                "bvid": "BV1nJ411V7bd",
                "page": 32
        },
        {
                "name": "第3周12--2.5线性表的链式表示和实现12--单链表基本操作10--头插法建立链表",
                "bvid": "BV1nJ411V7bd",
                "page": 33
        },
        {
                "name": "第3周13--2.5线性表的链式表示和实现13--单链表基本操作11--尾插法建立链表",
                "bvid": "BV1nJ411V7bd",
                "page": 34
        },
        {
                "name": "第04周01--2.5.3循环链表1",
                "bvid": "BV1nJ411V7bd",
                "page": 35
        },
        {
                "name": "第04周02--2.5.3循环链表2--两个链表合并",
                "bvid": "BV1nJ411V7bd",
                "page": 36
        },
        {
                "name": "第04周03--2.5.4双向链表1",
                "bvid": "BV1nJ411V7bd",
                "page": 37
        },
        {
                "name": "第04周04--2.5.4双向链表2--双向链表的插入操作",
                "bvid": "BV1nJ411V7bd",
                "page": 38
        },
        {
                "name": "第04周05--2.5.4双向链表3--双向链表的删除操作",
                "bvid": "BV1nJ411V7bd",
                "page": 39
        },
        {
                "name": "第04周06--单链表、循环链表、双向链表的比较",
                "bvid": "BV1nJ411V7bd",
                "page": 40
        },
        {
                "name": "第04周07--2.6顺序表和链表的比较",
                "bvid": "BV1nJ411V7bd",
                "page": 41
        },
        {
                "name": "第04周08--2.7线性表的应用1--线性表的合并",
                "bvid": "BV1nJ411V7bd",
                "page": 42
        },
        {
                "name": "第04周09--2.7线性表的应用2--有序表的合并--用顺序表实现",
                "bvid": "BV1nJ411V7bd",
                "page": 43
        },
        {
                "name": "第04周10--2.7线性表的应用3--有序表的合并--用链表实现",
                "bvid": "BV1nJ411V7bd",
                "page": 44
        },
        {
                "name": "第04周11--2.8案例分析与实现1--多项式运算",
                "bvid": "BV1nJ411V7bd",
                "page": 45
        },
        {
                "name": "第04周12--2.8案例分析与实现2--稀疏多项式运算",
                "bvid": "BV1nJ411V7bd",
                "page": 46
        },
        {
                "name": "第04周13--2.8案例分析与实现3--图书信息管理",
                "bvid": "BV1nJ411V7bd",
                "page": 47
        },
        {
                "name": "第05周01--3.1栈和队列的定义和特点1--栈和队列介绍",
                "bvid": "BV1nJ411V7bd",
                "page": 48
        },
        {
                "name": "第05周02--3.1栈和队列的定义和特点2--3.1.1栈的定义和特点",
                "bvid": "BV1nJ411V7bd",
                "page": 49
        },
        {
                "name": "第05周03--3.1栈和队列的定义和特点1--3.1.2队列的定义和特点",
                "bvid": "BV1nJ411V7bd",
                "page": 50
        },
        {
                "name": "第05周04--3.2案例引入",
                "bvid": "BV1nJ411V7bd",
                "page": 51
        },
        {
                "name": "第05周05--3.3栈的表示和实现1--3.3.1栈的抽象数据类型定义",
                "bvid": "BV1nJ411V7bd",
                "page": 52
        },
        {
                "name": "第05周06--3.3栈的表示和实现2--3.3.2栈的顺序表示和实现1--栈的顺序表示",
                "bvid": "BV1nJ411V7bd",
                "page": 53
        },
        {
                "name": "第05周07--3.3栈的表示和实现3--3.3.2栈的顺序表示和实现2--顺序栈操作1",
                "bvid": "BV1nJ411V7bd",
                "page": 54
        },
        {
                "name": "第05周08--3.3栈的表示和实现4--3.3.2栈的顺序表示和实现3--顺序栈操作2",
                "bvid": "BV1nJ411V7bd",
                "page": 55
        },
        {
                "name": "第05周09--3.3栈的表示和实现5--3.3.2栈的顺序表示和实现4--顺序栈操作3",
                "bvid": "BV1nJ411V7bd",
                "page": 56
        },
        {
                "name": "第05周10--3.3栈的表示和实现6--3.3.3链栈表示和实现",
                "bvid": "BV1nJ411V7bd",
                "page": 57
        },
        {
                "name": "第05周11--3.4栈和递归",
                "bvid": "BV1nJ411V7bd",
                "page": 58
        },
        {
                "name": "第05周12--3.5队列的表示和实现1--3.5.1队列的类型定义",
                "bvid": "BV1nJ411V7bd",
                "page": 59
        },
        {
                "name": "第05周13--3.5队列的表示和实现2--3.5.2队列的顺序表示和实现1",
                "bvid": "BV1nJ411V7bd",
                "page": 60
        },
        {
                "name": "第05周14--3.5队列的表示和实现3--3.5.2队列的顺序表示和实现2i",
                "bvid": "BV1nJ411V7bd",
                "page": 61
        },
        {
                "name": "第05周15--3.5队列的表示和实现4--3.5.3队列的链式表示和实现",
                "bvid": "BV1nJ411V7bd",
                "page": 62
        },
        {
                "name": "第06周01--第4章串、数组和广义表1-4.1串的定义",
                "bvid": "BV1nJ411V7bd",
                "page": 63
        },
        {
                "name": "第06周02--第4章串、数组和广义表2-4.2案例引入",
                "bvid": "BV1nJ411V7bd",
                "page": 64
        },
        {
                "name": "第06周03--第4章串、数组和广义表3-4.3串的类型定义、存储结构",
                "bvid": "BV1nJ411V7bd",
                "page": 65
        },
        {
                "name": "第06周04--第4章串、数组和广义表4-4.3串的操作--串的匹配算法1--BF算法",
                "bvid": "BV1nJ411V7bd",
                "page": 66
        },
        {
                "name": "第06周05--第4章串、数组和广义表5-4.3串的操作--串的匹配算法2--KMP算法",
                "bvid": "BV1nJ411V7bd",
                "page": 67
        },
        {
                "name": "第06周06--第4章串、数组和广义表6-4.4数组1--数组的定义及特点",
                "bvid": "BV1nJ411V7bd",
                "page": 68
        },
        {
                "name": "第06周07--第4章串、数组和广义表7-4.4数组2--数组的抽象类型定义",
                "bvid": "BV1nJ411V7bd",
                "page": 69
        },
        {
                "name": "第06周08--第4章串、数组和广义表8-4.4数组3--数组的顺序存储",
                "bvid": "BV1nJ411V7bd",
                "page": 70
        },
        {
                "name": "第06周09--第4章串、数组和广义表9-4.4数组4--对称矩阵压缩存储",
                "bvid": "BV1nJ411V7bd",
                "page": 71
        },
        {
                "name": "第06周10--第4章串、数组和广义表10-4.4数组5--三角矩阵、对角矩阵压缩存储",
                "bvid": "BV1nJ411V7bd",
                "page": 72
        },
        {
                "name": "第06周11--第4章串、数组和广义表11-4.4数组6--稀疏矩阵压缩存储",
                "bvid": "BV1nJ411V7bd",
                "page": 73
        },
        {
                "name": "第06周12--第4章串、数组和广义表12-4.5广义表",
                "bvid": "BV1nJ411V7bd",
                "page": 74
        },
        {
                "name": "第06周13--第4章串、数组和广义表13-4.6案例分析与实现",
                "bvid": "BV1nJ411V7bd",
                "page": 75
        },
        {
                "name": "第07周01--5.1树和二叉树的定义1--5.1.1树的定义",
                "bvid": "BV1nJ411V7bd",
                "page": 76
        },
        {
                "name": "第07周02--5.1树和二叉树的定义2--5.1.2树的基本术语",
                "bvid": "BV1nJ411V7bd",
                "page": 77
        },
        {
                "name": "第07周03--5.1树和二叉树的定义3--5.1.3二叉树的定义",
                "bvid": "BV1nJ411V7bd",
                "page": 78
        },
        {
                "name": "第07周04--5.2案例引入",
                "bvid": "BV1nJ411V7bd",
                "page": 79
        },
        {
                "name": "第07周05--5.3 树和二叉树的抽象数据类型定义",
                "bvid": "BV1nJ411V7bd",
                "page": 80
        },
        {
                "name": "第07周06--5.4 二叉树的性质和存储结构1--二叉树性质1、2、3",
                "bvid": "BV1nJ411V7bd",
                "page": 81
        },
        {
                "name": "第07周07--5.4 二叉树的性质和存储结构2--满二叉树和完全二叉树",
                "bvid": "BV1nJ411V7bd",
                "page": 82
        },
        {
                "name": "第07周08--5.4 二叉树的性质和存储结构3--二叉树性质4、5",
                "bvid": "BV1nJ411V7bd",
                "page": 83
        },
        {
                "name": "第07周09--5.4 二叉树的性质和存储结构4--二叉树的存储结构1-顺序存储结构",
                "bvid": "BV1nJ411V7bd",
                "page": 84
        },
        {
                "name": "第07周10--5.4 二叉树的性质和存储结构4--二叉树的存储结构2-链式存储结构",
                "bvid": "BV1nJ411V7bd",
                "page": 85
        },
        {
                "name": "第07周11--5.5 遍历二叉树和线索二叉树1--遍历二叉树",
                "bvid": "BV1nJ411V7bd",
                "page": 86
        },
        {
                "name": "第07周12--5.5 遍历二叉树和线索二叉树2--由遍历序列确定二叉树",
                "bvid": "BV1nJ411V7bd",
                "page": 87
        },
        {
                "name": "第08周01--5.5遍历二叉树和线索二叉树3--二叉树的先序递归遍历算法",
                "bvid": "BV1nJ411V7bd",
                "page": 88
        },
        {
                "name": "第08周02--5.5遍历二叉树和线索二叉树4--二叉树的递归遍历算法及分析",
                "bvid": "BV1nJ411V7bd",
                "page": 89
        },
        {
                "name": "第08周03--5.5遍历二叉树和线索二叉树5--二叉树的遍历算法--中序非递归算法",
                "bvid": "BV1nJ411V7bd",
                "page": 90
        },
        {
                "name": "第08周04--5.5遍历二叉树和线索二叉树6--二叉树的遍历算法--层次遍历算法",
                "bvid": "BV1nJ411V7bd",
                "page": 91
        },
        {
                "name": "第08周05--5.5遍历二叉树和线索二叉树7--二叉树的遍历算法应用1--建立二叉树算法",
                "bvid": "BV1nJ411V7bd",
                "page": 92
        },
        {
                "name": "第08周06--5.5遍历二叉树和线索二叉树8--二叉树的遍历算法应用2--复制、求结点数、求叶子结点数",
                "bvid": "BV1nJ411V7bd",
                "page": 93
        },
        {
                "name": "第08周07--5.5遍历二叉树和线索二叉树9--线索二叉树",
                "bvid": "BV1nJ411V7bd",
                "page": 94
        },
        {
                "name": "第08周08--5.6树和森林1--树的存储结构1-双亲表示法",
                "bvid": "BV1nJ411V7bd",
                "page": 95
        },
        {
                "name": "第08周09--5.6树和森林2--树的存储结构2-孩子链表",
                "bvid": "BV1nJ411V7bd",
                "page": 96
        },
        {
                "name": "第08周10--5.6树和森林3--树的存储结构3-孩子兄弟表示法",
                "bvid": "BV1nJ411V7bd",
                "page": 97
        },
        {
                "name": "第08周11--5.6树和森林4--树与二叉树的转换",
                "bvid": "BV1nJ411V7bd",
                "page": 98
        },
        {
                "name": "第08周12--5.6树和森林5--森林与二叉树的转换",
                "bvid": "BV1nJ411V7bd",
                "page": 99
        },
        {
                "name": "第08周13--5.6树和森林6--树和森林的遍历",
                "bvid": "BV1nJ411V7bd",
                "page": 100
        },
        {
                "name": "第09周01--5.7哈夫曼树及其应用1-引子",
                "bvid": "BV1nJ411V7bd",
                "page": 101
        },
        {
                "name": "第09周02--5.7哈夫曼树及其应用2-5.7.1哈夫曼树的基本概念",
                "bvid": "BV1nJ411V7bd",
                "page": 102
        },
        {
                "name": "第09周03--5.7哈夫曼树及其应用3-5.7.2哈夫曼树的构造算法1",
                "bvid": "BV1nJ411V7bd",
                "page": 103
        },
        {
                "name": "第09周04--5.7哈夫曼树及其应用4-5.7.2哈夫曼树的构造算法2-哈夫曼树算法实现",
                "bvid": "BV1nJ411V7bd",
                "page": 104
        },
        {
                "name": "第09周05--5.7哈夫曼树及其应用5-5.7.3哈夫曼编码1-哈夫曼编码思想",
                "bvid": "BV1nJ411V7bd",
                "page": 105
        },
        {
                "name": "第09周06--5.7哈夫曼树及其应用6-5.7.3哈夫曼编码2-哈夫曼编码的算法实现",
                "bvid": "BV1nJ411V7bd",
                "page": 106
        },
        {
                "name": "第09周07--5.7哈夫曼树及其应用7-5.7.3哈夫曼编码3-文件的编码和译码",
                "bvid": "BV1nJ411V7bd",
                "page": 107
        },
        {
                "name": "第09周08--6.1图的基本概念和术语1",
                "bvid": "BV1nJ411V7bd",
                "page": 108
        },
        {
                "name": "第09周09--6.1图的基本概念和术语2",
                "bvid": "BV1nJ411V7bd",
                "page": 109
        },
        {
                "name": "第09周10--6.2案例引入",
                "bvid": "BV1nJ411V7bd",
                "page": 110
        },
        {
                "name": "第09周11--6.3图的类型定义",
                "bvid": "BV1nJ411V7bd",
                "page": 111
        },
        {
                "name": "第10周01--6.4图的存储结构1-1邻接矩阵表示法1-无向图的邻接矩阵",
                "bvid": "BV1nJ411V7bd",
                "page": 112
        },
        {
                "name": "第10周02--6.4图的存储结构2-1邻接矩阵表示法2-有向图和网的邻接矩阵",
                "bvid": "BV1nJ411V7bd",
                "page": 113
        },
        {
                "name": "第10周03--6.4图的存储结构3-2采用邻接矩阵表示法创建无向网",
                "bvid": "BV1nJ411V7bd",
                "page": 114
        },
        {
                "name": "第10周04--6.4图的存储结构4-3邻接矩阵表示法的优缺点",
                "bvid": "BV1nJ411V7bd",
                "page": 115
        },
        {
                "name": "第10周05--6.4图的存储结构5-6.4.2邻接表表示法1-无向图的邻接表",
                "bvid": "BV1nJ411V7bd",
                "page": 116
        },
        {
                "name": "第10周06--6.4图的存储结构6-6.4.2邻接表表示法2-有向图的邻接表",
                "bvid": "BV1nJ411V7bd",
                "page": 117
        },
        {
                "name": "第10周07--6.4图的存储结构7-6.4.2邻接表表示法3-建立邻接表的算法",
                "bvid": "BV1nJ411V7bd",
                "page": 118
        },
        {
                "name": "第10周08--6.4图的存储结构8-6.4.2邻接表表示法4-邻接表表示法优缺点及与邻接矩阵的关系",
                "bvid": "BV1nJ411V7bd",
                "page": 119
        },
        {
                "name": "第10周09--6.4图的存储结构9-6.4.3十字链表",
                "bvid": "BV1nJ411V7bd",
                "page": 120
        },
        {
                "name": "第10周10--6.4图的存储结构10-6.4.4邻接多重表",
                "bvid": "BV1nJ411V7bd",
                "page": 121
        },
        {
                "name": "第10周11--6.5图的遍历1--深度优先搜索遍历思想",
                "bvid": "BV1nJ411V7bd",
                "page": 122
        },
        {
                "name": "第10周12--6.5图的遍历2--深度优先搜索遍历实现--邻接矩阵上的遍历算法",
                "bvid": "BV1nJ411V7bd",
                "page": 123
        },
        {
                "name": "第10周13--6.5图的遍历3--深度优先搜索遍历实现--邻接表上的遍历算法及算法分析",
                "bvid": "BV1nJ411V7bd",
                "page": 124
        },
        {
                "name": "第10周14--6.5图的遍历4--广度优先搜索遍历及其实现",
                "bvid": "BV1nJ411V7bd",
                "page": 125
        },
        {
                "name": "第11周01--6.6图的应用1--6.6.1最小生成树1--生成树及其构造",
                "bvid": "BV1nJ411V7bd",
                "page": 126
        },
        {
                "name": "第11周02--6.6图的应用2--6.6.1最小生成树2--最小生成树及其典型应用",
                "bvid": "BV1nJ411V7bd",
                "page": 127
        },
        {
                "name": "第11周03--6.6图的应用3--6.6.1最小生成树3--MST性质",
                "bvid": "BV1nJ411V7bd",
                "page": 128
        },
        {
                "name": "第11周04--6.6图的应用4--6.6.1最小生成树4--构造最小生成树1--Prim算法",
                "bvid": "BV1nJ411V7bd",
                "page": 129
        },
        {
                "name": "第11周05--6.6图的应用5--6.6.1最小生成树5--构造最小生成树2--Kruskal算法",
                "bvid": "BV1nJ411V7bd",
                "page": 130
        },
        {
                "name": "第11周06--6.6图的应用6--6.6.2最短路径1--最短路径问题抽象",
                "bvid": "BV1nJ411V7bd",
                "page": 131
        },
        {
                "name": "第11周07--6.6图的应用7--6.6.2最短路径2--Dijkstra算法",
                "bvid": "BV1nJ411V7bd",
                "page": 132
        },
        {
                "name": "第11周08--6.6图的应用8--6.6.2最短路径3--Floyd算法",
                "bvid": "BV1nJ411V7bd",
                "page": 133
        },
        {
                "name": "第11周09--6.6图的应用9--6.6.3拓扑排序",
                "bvid": "BV1nJ411V7bd",
                "page": 134
        },
        {
                "name": "第11周10--6.6图的应用10--6.6.4关键路径1--用AOE网表示工程计划",
                "bvid": "BV1nJ411V7bd",
                "page": 135
        },
        {
                "name": "第11周11--6.6图的应用11--6.6.4关键路径2--求解关键路径",
                "bvid": "BV1nJ411V7bd",
                "page": 136
        },
        {
                "name": "第12周01--第7章查找1--7.1查找的基本概念",
                "bvid": "BV1nJ411V7bd",
                "page": 137
        },
        {
                "name": "第12周02--第7章查找2--7.2线性表的查找1--7.2.1顺序查找1--顺序查找算法",
                "bvid": "BV1nJ411V7bd",
                "page": 138
        },
        {
                "name": "第12周03--第7章查找3--7.2线性表的查找2--7.2.1顺序查找2--顺序查找算法分析",
                "bvid": "BV1nJ411V7bd",
                "page": 139
        },
        {
                "name": "第12周04--第7章查找4--7.2线性表的查找3--7.2.2折半查找1--折半查找算法",
                "bvid": "BV1nJ411V7bd",
                "page": 140
        },
        {
                "name": "第12周05--第7章查找5--7.2线性表的查找4--7.2.2折半查找2--折半查找算法分析",
                "bvid": "BV1nJ411V7bd",
                "page": 141
        },
        {
                "name": "第12周06--第7章查找6--7.2线性表的查找5--7.2.3分块查找1--分块查找算法",
                "bvid": "BV1nJ411V7bd",
                "page": 142
        },
        {
                "name": "第12周07--第7章查找7--7.2线性表的查找6--7.2.3分块查找2--分块查找算法分析及比较",
                "bvid": "BV1nJ411V7bd",
                "page": 143
        },
        {
                "name": "第12周08--第7章查找8--7.3树表的查找1--7.3.1二叉排序树1--二叉排序树定义",
                "bvid": "BV1nJ411V7bd",
                "page": 144
        },
        {
                "name": "第12周09--第7章查找9--7.3树表的查找2--7.3.1二叉排序树2--二叉排序树查找--递归算法",
                "bvid": "BV1nJ411V7bd",
                "page": 145
        },
        {
                "name": "第12周10--第7章查找10--7.3树表的查找3--7.3.1二叉排序树3--二叉排序树查找算法分析",
                "bvid": "BV1nJ411V7bd",
                "page": 146
        },
        {
                "name": "第12周11--第7章查找11--7.3树表的查找4--7.3.1二叉排序树4--二叉排序树的插入和生成",
                "bvid": "BV1nJ411V7bd",
                "page": 147
        },
        {
                "name": "第12周12--第7章查找12--7.3树表的查找5--7.3.1二叉排序树5--二叉排序树的删除",
                "bvid": "BV1nJ411V7bd",
                "page": 148
        },
        {
                "name": "第13周1--7.3树表的查找6--7.3.2平衡二叉树1--平衡二叉树的定义",
                "bvid": "BV1nJ411V7bd",
                "page": 149
        },
        {
                "name": "第13周2--7.3树表的查找7--7.3.2平衡二叉树2--平衡调整方法1",
                "bvid": "BV1nJ411V7bd",
                "page": 150
        },
        {
                "name": "第13周3--7.3树表的查找8--7.3.2平衡二叉树3--平衡调整方法2--四种类型的调整",
                "bvid": "BV1nJ411V7bd",
                "page": 151
        },
        {
                "name": "第13周4--7.3树表的查找9--7.3.2平衡二叉树4--平衡调整方法3--例题",
                "bvid": "BV1nJ411V7bd",
                "page": 152
        },
        {
                "name": "第13周5--7.4散列表的查找1--7.4.1散列表的基本概念",
                "bvid": "BV1nJ411V7bd",
                "page": 153
        },
        {
                "name": "第13周6--7.4散列表的查找2--7.4.2散列函数的构造",
                "bvid": "BV1nJ411V7bd",
                "page": 154
        },
        {
                "name": "第13周7--7.4散列表的查找3--7.4.3处理冲突方法1--开地址法1-线性探测法",
                "bvid": "BV1nJ411V7bd",
                "page": 155
        },
        {
                "name": "第13周8--7.4散列表的查找4--7.4.3处理冲突方法2--开地址法2-二次探测法、伪随机探测法",
                "bvid": "BV1nJ411V7bd",
                "page": 156
        },
        {
                "name": "第13周9--7.4散列表的查找5--7.4.3处理冲突方法3--链地址法",
                "bvid": "BV1nJ411V7bd",
                "page": 157
        },
        {
                "name": "第13周10--7.4散列表的查找6--7.4.4散列表的查找及性能分析",
                "bvid": "BV1nJ411V7bd",
                "page": 158
        },
        {
                "name": "第14周01--第8章排序1--8.1排序概述",
                "bvid": "BV1nJ411V7bd",
                "page": 159
        },
        {
                "name": "第14周02--第8章排序2--8.2插入排序1--直接插入排序",
                "bvid": "BV1nJ411V7bd",
                "page": 160
        },
        {
                "name": "第14周03--第8章排序3--8.2插入排序2--折半插入排序",
                "bvid": "BV1nJ411V7bd",
                "page": 161
        },
        {
                "name": "第14周04--第8章排序4--8.2插入排序3--希尔排序",
                "bvid": "BV1nJ411V7bd",
                "page": 162
        },
        {
                "name": "第14周05--第8章排序5--8.3交换排序1--冒泡排序",
                "bvid": "BV1nJ411V7bd",
                "page": 163
        },
        {
                "name": "第14周06--第8章排序6--8.3交换排序2--快速排序1",
                "bvid": "BV1nJ411V7bd",
                "page": 164
        },
        {
                "name": "第14周07--第8章排序7--8.3交换排序3--快速排序2--快速排序算法分析",
                "bvid": "BV1nJ411V7bd",
                "page": 165
        },
        {
                "name": "第14周08--第8章排序8--8.4选择排序1--简单选择排序",
                "bvid": "BV1nJ411V7bd",
                "page": 166
        },
        {
                "name": "第14周09--第8章排序9--8.4选择排序2--堆排序1",
                "bvid": "BV1nJ411V7bd",
                "page": 167
        },
        {
                "name": "第14周10--第8章排序10--8.4选择排序3--堆排序2--堆调整",
                "bvid": "BV1nJ411V7bd",
                "page": 168
        },
        {
                "name": "第14周11--第8章排序11--8.4选择排序4--堆排序3--建立堆",
                "bvid": "BV1nJ411V7bd",
                "page": 169
        },
        {
                "name": "第14周12--第8章排序12--8.4选择排序5--堆排序4--堆排序算法及分析",
                "bvid": "BV1nJ411V7bd",
                "page": 170
        },
        {
                "name": "第14周13--第8章排序13--8.5归并排序",
                "bvid": "BV1nJ411V7bd",
                "page": 171
        },
        {
                "name": "第14周14--第8章排序14--8.6基数排序",
                "bvid": "BV1nJ411V7bd",
                "page": 172
        },
        {
                "name": "第14周15--第8章排序15--各种排序方法比较",
                "bvid": "BV1nJ411V7bd",
                "page": 173
        },
        ],
        assignments: [
            { name: '第一次作业', dueDate: '2025-10-10', url: 'courses/data-structures/homeworks/作业1.docx', status: 'published' },
            { name: '第二次作业', dueDate: '2025-10-24', url: 'courses/data-structures/homeworks/作业2.docx', status: 'published' },
            { name: '第三次作业', dueDate: '2025-11-07', url: 'courses/data-structures/homeworks/作业3.docx', status: 'published' },
            { name: '第四次作业', dueDate: '2025-11-21', url: 'courses/data-structures/homeworks/作业4.docx', status: 'published' },
            { name: '第五次作业', dueDate: '2025-12-05', url: 'courses/data-structures/homeworks/作业5.docx', status: 'published' },
        ]
    },
        'software-engineering': {
        title: '软件工程',
        subtitle: '构建可靠、高效软件的系统化方法',
        description: '学习软件开发全过程，包括需求分析、系统设计、编码、测试和维护，掌握团队协作与项目管理的核心技能。',
        resources: [
            { name: '00_课程介绍.pptx', url: 'courses/software-engineering/resources/00_课程介绍.pptx' },
            { name: '01_软件工程概述.pptx', url: 'courses/software-engineering/resources/01_软件工程概述.pptx' },
            { name: '02_软件开发过程.pptx', url: 'courses/software-engineering/resources/02_软件开发过程.pptx' },
            { name: '03_需求分析.pptx', url: 'courses/software-engineering/resources/03_需求分析.pptx' },
            { name: '04_软件架构的构建.pptx', url: 'courses/software-engineering/resources/04_软件架构的构建.pptx' },
            { name: '05_类的分析与设计.pptx', url: 'courses/software-engineering/resources/05_类的分析与设计.pptx' },
            { name: '06_代码生成.pptx', url: 'courses/software-engineering/resources/06_代码生成.pptx' },
            { name: '07_类的详细设计.pptx', url: 'courses/software-engineering/resources/07_类的详细设计.pptx' },
            { name: '08_设计优化.pptx', url: 'courses/software-engineering/resources/08_设计优化.pptx' },
            { name: '09_实现技术.pptx', url: 'courses/software-engineering/resources/09_实现技术.pptx' },
            { name: '10_交互设计.pptx', url: 'courses/software-engineering/resources/10_交互设计.pptx' },
            { name: '11_软件测试.pptx', url: 'courses/software-engineering/resources/11_软件测试.pptx' },
            { name: '12_软件项目级管理.pptx', url: 'courses/software-engineering/resources/12_软件项目级管理.pptx' },
            { name: '13_软件过程管理与改进.pptx', url: 'courses/software-engineering/resources/13_软件过程管理与改进.pptx' }
        ],
        videos: [
        {
                "name": "1.2软件工程课程介绍第一讲",
                "bvid": "BV1Vt411V72G",
                "page": 1
        },
        {
                "name": "1.2软件工程课程介绍第二讲",
                "bvid": "BV1Vt411V72G",
                "page": 2
        },
        {
                "name": "2.1软件生存周期过程第一讲",
                "bvid": "BV1Vt411V72G",
                "page": 3
        },
        {
                "name": "2.1软件生存周期过程第二讲",
                "bvid": "BV1Vt411V72G",
                "page": 4
        },
        {
                "name": "2.2软件生存周期模型第一讲",
                "bvid": "BV1Vt411V72G",
                "page": 5
        },
        {
                "name": "2.2软件生存周期模型第二讲",
                "bvid": "BV1Vt411V72G",
                "page": 6
        },
        {
                "name": "3软件需求与软件需求规约第一讲",
                "bvid": "BV1Vt411V72G",
                "page": 7
        },
        {
                "name": "3软件需求与软件需求规约第二讲",
                "bvid": "BV1Vt411V72G",
                "page": 8
        },
        {
                "name": "4结构化分析方法第一讲",
                "bvid": "BV1Vt411V72G",
                "page": 9
        },
        {
                "name": "4结构化分析方法第二讲",
                "bvid": "BV1Vt411V72G",
                "page": 10
        },
        {
                "name": "5.1结构化设计方法-总体设计第一讲",
                "bvid": "BV1Vt411V72G",
                "page": 11
        },
        {
                "name": "5.1结构化设计方法-总体设计第二讲",
                "bvid": "BV1Vt411V72G",
                "page": 12
        },
        {
                "name": "5.2结构化设计方法-详细设计第一讲",
                "bvid": "BV1Vt411V72G",
                "page": 13
        },
        {
                "name": "5.2结构化设计方法-详细设计第二讲",
                "bvid": "BV1Vt411V72G",
                "page": 14
        },
        {
                "name": "6敏捷软件开发第一讲",
                "bvid": "BV1Vt411V72G",
                "page": 15
        },
        {
                "name": "6敏捷软件开发第二讲",
                "bvid": "BV1Vt411V72G",
                "page": 16
        },
        {
                "name": "7.1面向对象方法简介",
                "bvid": "BV1Vt411V72G",
                "page": 17
        },
        {
                "name": "7.2UML描述客体及客体关系的术语-第一部分",
                "bvid": "BV1Vt411V72G",
                "page": 18
        },
        {
                "name": "7.3UML描述客体及客体关系的术语-第二部分（第1讲）",
                "bvid": "BV1Vt411V72G",
                "page": 19
        },
        {
                "name": "7.3UML描述客体及客体关系的术语-第二部分（第2讲）",
                "bvid": "BV1Vt411V72G",
                "page": 20
        },
        {
                "name": "7.4UML模型表达工具第一讲",
                "bvid": "BV1Vt411V72G",
                "page": 21
        },
        {
                "name": "7.4UML模型表达工具第二讲",
                "bvid": "BV1Vt411V72G",
                "page": 22
        },
        {
                "name": "8.1面向对象分析第一部分",
                "bvid": "BV1Vt411V72G",
                "page": 23
        },
        {
                "name": "8.1面向对象分析第二部分",
                "bvid": "BV1Vt411V72G",
                "page": 24
        },
        {
                "name": "8.2面向对象设计第一部分",
                "bvid": "BV1Vt411V72G",
                "page": 25
        },
        {
                "name": "8.2面向对象设计第二部分",
                "bvid": "BV1Vt411V72G",
                "page": 26
        },
        {
                "name": "8.2面向对象设计第三部分",
                "bvid": "BV1Vt411V72G",
                "page": 27
        },
        {
                "name": "8.3面向对象编程",
                "bvid": "BV1Vt411V72G",
                "page": 28
        },
        {
                "name": "9.1软件测试技术第一讲",
                "bvid": "BV1Vt411V72G",
                "page": 29
        },
        {
                "name": "9.1软件测试技术第二讲",
                "bvid": "BV1Vt411V72G",
                "page": 30
        },
        {
                "name": "9.2软件测试步骤和测试技术应用第一讲",
                "bvid": "BV1Vt411V72G",
                "page": 31
        },
        {
                "name": "9.2软件测试步骤和测试技术应用第二讲",
                "bvid": "BV1Vt411V72G",
                "page": 32
        },
        {
                "name": "10.1软件项目管理简介",
                "bvid": "BV1Vt411V72G",
                "page": 33
        },
        {
                "name": "10.2CMM和ISO9000第一讲",
                "bvid": "BV1Vt411V72G",
                "page": 34
        },
        {
                "name": "10.2CMM和ISO9000第二讲",
                "bvid": "BV1Vt411V72G",
                "page": 35
        },
        {
                "name": "11互联网软件技术第一讲",
                "bvid": "BV1Vt411V72G",
                "page": 36
        },
        {
                "name": "11互联网软件技术第二讲",
                "bvid": "BV1Vt411V72G",
                "page": 37
        },
        {
                "name": "12软件开发工具与环境",
                "bvid": "BV1Vt411V72G",
                "page": 38
        },
        {
                "name": "13课程总复习",
                "bvid": "BV1Vt411V72G",
                "page": 39
        },
        {
                "name": "14.1习题课第一讲",
                "bvid": "BV1Vt411V72G",
                "page": 40
        },
        {
                "name": "14.2习题课第二讲",
                "bvid": "BV1Vt411V72G",
                "page": 41
        },
        {
                "name": "15.1课程实践介绍",
                "bvid": "BV1Vt411V72G",
                "page": 42
        },
        {
                "name": "15.2课程实践工具和技术介绍",
                "bvid": "BV1Vt411V72G",
                "page": 43
        },
        {
                "name": "16.1课程实践1：软件开发计划和结构化需求分析(第1讲)",
                "bvid": "BV1Vt411V72G",
                "page": 44
        },
        {
                "name": "16.1课程实践1：软件开发计划和结构化需求分析（第2讲）",
                "bvid": "BV1Vt411V72G",
                "page": 45
        },
        {
                "name": "16.2课程实践2：结构化总体设计和详细设计（第1讲）",
                "bvid": "BV1Vt411V72G",
                "page": 46
        },
        {
                "name": "16.2课程实践2：结构化总体设计和详细设计（第2讲）",
                "bvid": "BV1Vt411V72G",
                "page": 47
        },
        {
                "name": "16.3课程实践3：面向对象分析和设计（第1讲）",
                "bvid": "BV1Vt411V72G",
                "page": 48
        },
        {
                "name": "16.3课程实践3：面向对象分析和设计（第2讲）",
                "bvid": "BV1Vt411V72G",
                "page": 49
        },
        {
                "name": "16.4课程实践4：软件实现、软件测试和项目开发总结（第1讲）",
                "bvid": "BV1Vt411V72G",
                "page": 50
        },
        {
                "name": "16.4课程实践4：软件实现、软件测试和项目开发总结（第2讲）",
                "bvid": "BV1Vt411V72G",
                "page": 51
        },
        {
                "name": "1.1软件工程概述第一讲",
                "bvid": "BV1Vt411V72G",
                "page": 52
        },
        {
                "name": "1.1软件工程概述第二讲",
                "bvid": "BV1Vt411V72G",
                "page": 53
        },
        ],
        assignments: [
            { name: '第一次作业', dueDate: '2025-10-10', url: 'courses/software-engineering/homeworks/作业1.docx', status: 'published' },
            { name: '第二次作业', dueDate: '2025-10-24', url: 'courses/software-engineering/homeworks/作业2.docx', status: 'published' },
            { name: '第三次作业', dueDate: '2025-11-07', url: 'courses/software-engineering/homeworks/作业3.docx', status: 'published' },
            { name: '第四次作业', dueDate: '2025-11-21', url: 'courses/software-engineering/homeworks/作业4.docx', status: 'published' },
            { name: '第五次作业', dueDate: '2025-12-05', url: 'courses/software-engineering/homeworks/作业5.docx', status: 'published' },
        ]
    },
    'computer-networks': {
        title: '计算机网络',
        subtitle: '探索现代互联网的基石',
        description: '深入理解计算机网络的分层模型、协议和服务。从物理层到应用层，掌握数据如何在网络中传输。',
        resources: [
            { name: '第01章 计算机网络体系结构.pptx', url: '#' },
            { name: '第02章 物理层.pptx', url: '#' },
            { name: '第04章 网络层与IP协议.pptx', url: '#' },
            { name: '第05章 传输层TCP与UDP.pptx', url: '#' },
        ],
        videos: [
        {
                "name": "1.1 计算机网络在信息时代的作用",
                "bvid": "BV1c4411d7jb",
                "page": 1
        },
        {
                "name": "1.2 因特网概述",
                "bvid": "BV1c4411d7jb",
                "page": 2
        },
        {
                "name": "1.3 三种交换方式：电路交换、分组交换和报文交换",
                "bvid": "BV1c4411d7jb",
                "page": 3
        },
        {
                "name": "1.4 计算机网络的定义和分类",
                "bvid": "BV1c4411d7jb",
                "page": 4
        },
        {
                "name": "1.5 计算机网络的性能指标（1）",
                "bvid": "BV1c4411d7jb",
                "page": 5
        },
        {
                "name": "1.5 计算机网络的性能指标（2）",
                "bvid": "BV1c4411d7jb",
                "page": 6
        },
        {
                "name": "1.6 计算机网络体系结构（1）—常见的计算机网络体系结构",
                "bvid": "BV1c4411d7jb",
                "page": 7
        },
        {
                "name": "1.6 计算机网络体系结构（2）—分层的必要性",
                "bvid": "BV1c4411d7jb",
                "page": 8
        },
        {
                "name": "1.6 计算机网络体系结构（3）—分层思想举例",
                "bvid": "BV1c4411d7jb",
                "page": 9
        },
        {
                "name": "1.6 计算机网络体系结构（4）—专用术语",
                "bvid": "BV1c4411d7jb",
                "page": 10
        },
        {
                "name": "1.7 第1章 概述 章节小结",
                "bvid": "BV1c4411d7jb",
                "page": 11
        },
        {
                "name": "1.8 第1章 概述 习题课（1）— 体系结构相关习题",
                "bvid": "BV1c4411d7jb",
                "page": 12
        },
        {
                "name": "1.8 第1章 概述 习题课（2）— 时延相关习题",
                "bvid": "BV1c4411d7jb",
                "page": 13
        },
        {
                "name": "2.1 物理层的基本概念",
                "bvid": "BV1c4411d7jb",
                "page": 14
        },
        {
                "name": "2.2 物理层下面的传输媒体",
                "bvid": "BV1c4411d7jb",
                "page": 15
        },
        {
                "name": "2.3 传输方式",
                "bvid": "BV1c4411d7jb",
                "page": 16
        },
        {
                "name": "2.4 编码与调制",
                "bvid": "BV1c4411d7jb",
                "page": 17
        },
        {
                "name": "2.5 信道的极限容量",
                "bvid": "BV1c4411d7jb",
                "page": 18
        },
        {
                "name": "2.6 第2章 物理层 章节小结",
                "bvid": "BV1c4411d7jb",
                "page": 19
        },
        {
                "name": "2.7 第2章 物理层 习题课",
                "bvid": "BV1c4411d7jb",
                "page": 20
        },
        {
                "name": "3.1 数据链路层概述",
                "bvid": "BV1c4411d7jb",
                "page": 21
        },
        {
                "name": "3.2 封装成帧",
                "bvid": "BV1c4411d7jb",
                "page": 22
        },
        {
                "name": "3.3 差错检测",
                "bvid": "BV1c4411d7jb",
                "page": 23
        },
        {
                "name": "3.4.1 可靠传输的基本概念",
                "bvid": "BV1c4411d7jb",
                "page": 24
        },
        {
                "name": "3.4.2 可靠传输的实现机制 — 停止-等待协议",
                "bvid": "BV1c4411d7jb",
                "page": 25
        },
        {
                "name": "3.4.3 可靠传输的实现机制 — 回退N帧协议",
                "bvid": "BV1c4411d7jb",
                "page": 26
        },
        {
                "name": "3.4.4 可靠传输的实现机制 — 选择重传协议",
                "bvid": "BV1c4411d7jb",
                "page": 27
        },
        {
                "name": "3.5 点对点协议PPP",
                "bvid": "BV1c4411d7jb",
                "page": 28
        },
        {
                "name": "3.6.1 媒体接入控制的基本概念",
                "bvid": "BV1c4411d7jb",
                "page": 29
        },
        {
                "name": "3.6.2 媒体接入控制 — 静态划分信道",
                "bvid": "BV1c4411d7jb",
                "page": 30
        },
        {
                "name": "3.6.3 随机接入 — CSMA/CD协议",
                "bvid": "BV1c4411d7jb",
                "page": 31
        },
        {
                "name": "3.6.4 随机接入— CSMA/CA协议",
                "bvid": "BV1c4411d7jb",
                "page": 32
        },
        {
                "name": "3.7 MAC地址、IP地址以及ARP协议（1） — MAC地址",
                "bvid": "BV1c4411d7jb",
                "page": 33
        },
        {
                "name": "3.7 MAC地址、IP地址以及ARP协议（2） — IP地址",
                "bvid": "BV1c4411d7jb",
                "page": 34
        },
        {
                "name": "3.7 MAC地址、IP地址以及ARP协议（3） — ARP协议",
                "bvid": "BV1c4411d7jb",
                "page": 35
        },
        {
                "name": "3.8 集线器与交换机的区别",
                "bvid": "BV1c4411d7jb",
                "page": 36
        },
        {
                "name": "3.9 以太网交换机自学习和转发帧的流程",
                "bvid": "BV1c4411d7jb",
                "page": 37
        },
        {
                "name": "3.10 以太网交换机的生成树协议STP",
                "bvid": "BV1c4411d7jb",
                "page": 38
        },
        {
                "name": "3.11.1 虚拟局域网VLAN概述",
                "bvid": "BV1c4411d7jb",
                "page": 39
        },
        {
                "name": "3.11.2 虚拟局域网VLAN的实现机制",
                "bvid": "BV1c4411d7jb",
                "page": 40
        },
        {
                "name": "4.1 网络层概述",
                "bvid": "BV1c4411d7jb",
                "page": 41
        },
        {
                "name": "4.2 网络层提供的两种服务",
                "bvid": "BV1c4411d7jb",
                "page": 42
        },
        {
                "name": "4.3.1 IPv4地址概述",
                "bvid": "BV1c4411d7jb",
                "page": 43
        },
        {
                "name": "4.3.2 分类编址的IPv4地址",
                "bvid": "BV1c4411d7jb",
                "page": 44
        },
        {
                "name": "4.3.3 划分子网的IPv4地址",
                "bvid": "BV1c4411d7jb",
                "page": 45
        },
        {
                "name": "4.3.4 无分类编址的IPv4地址",
                "bvid": "BV1c4411d7jb",
                "page": 46
        },
        {
                "name": "4.3.5 IPv4地址的应用规划",
                "bvid": "BV1c4411d7jb",
                "page": 47
        },
        {
                "name": "4.4 IP数据报的发送和转发过程",
                "bvid": "BV1c4411d7jb",
                "page": 48
        },
        {
                "name": "4.5 静态路由配置及其可能产生的路由环路问题",
                "bvid": "BV1c4411d7jb",
                "page": 49
        },
        {
                "name": "4.6.1 路由选择协议概述",
                "bvid": "BV1c4411d7jb",
                "page": 50
        },
        {
                "name": "4.6.2 路由信息协议RIP的基本工作原理",
                "bvid": "BV1c4411d7jb",
                "page": 51
        },
        {
                "name": "4.6.3 开放最短路径优先OSPF的基本工作原理",
                "bvid": "BV1c4411d7jb",
                "page": 52
        },
        {
                "name": "4.6.4 边界网关协议BGP的基本工作原理",
                "bvid": "BV1c4411d7jb",
                "page": 53
        },
        {
                "name": "4.7 IPv4数据报的首部格式",
                "bvid": "BV1c4411d7jb",
                "page": 54
        },
        {
                "name": "4.8 网际控制报文协议ICMP",
                "bvid": "BV1c4411d7jb",
                "page": 55
        },
        {
                "name": "4.9 虚拟专用网VPN与网络地址转换NAT",
                "bvid": "BV1c4411d7jb",
                "page": 56
        },
        {
                "name": "5.1 运输层概述",
                "bvid": "BV1c4411d7jb",
                "page": 57
        },
        {
                "name": "5.2 运输层端口号、复用与分用的概念",
                "bvid": "BV1c4411d7jb",
                "page": 58
        },
        {
                "name": "5.3 UDP和TCP的对比",
                "bvid": "BV1c4411d7jb",
                "page": 59
        },
        {
                "name": "5.4 TCP的流量控制",
                "bvid": "BV1c4411d7jb",
                "page": 60
        },
        {
                "name": "5.5 TCP的拥塞控制",
                "bvid": "BV1c4411d7jb",
                "page": 61
        },
        {
                "name": "5.6 TCP超时重传时间的选择",
                "bvid": "BV1c4411d7jb",
                "page": 62
        },
        {
                "name": "5.7 TCP可靠传输的实现",
                "bvid": "BV1c4411d7jb",
                "page": 63
        },
        {
                "name": "5.8.1 TCP的运输连接管理—TCP的连接建立",
                "bvid": "BV1c4411d7jb",
                "page": 64
        },
        {
                "name": "5.8.2 TCP的运输连接管理—TCP的连接释放",
                "bvid": "BV1c4411d7jb",
                "page": 65
        },
        {
                "name": "5.9 TCP报文段的首部格式",
                "bvid": "BV1c4411d7jb",
                "page": 66
        },
        {
                "name": "6.1 应用层概述",
                "bvid": "BV1c4411d7jb",
                "page": 67
        },
        {
                "name": "6.2 客户—服务器方式和对等方式",
                "bvid": "BV1c4411d7jb",
                "page": 68
        },
        {
                "name": "6.3 动态主机配置协议DHCP",
                "bvid": "BV1c4411d7jb",
                "page": 69
        },
        {
                "name": "6.4 域名系统DNS",
                "bvid": "BV1c4411d7jb",
                "page": 70
        },
        {
                "name": "6.5 文件传送协议FTP",
                "bvid": "BV1c4411d7jb",
                "page": 71
        },
        {
                "name": "6.6 电子邮件",
                "bvid": "BV1c4411d7jb",
                "page": 72
        },
        {
                "name": "6.7 万维网WWW",
                "bvid": "BV1c4411d7jb",
                "page": 73
        },
        ],
        assignments: [
            { name: '第一次作业', dueDate: '2025-10-10', url: 'courses/computer-networks/homeworks/作业1.docx', status: 'published' },
            { name: '第二次作业', dueDate: '2025-10-24', url: 'courses/computer-networks/homeworks/作业2.docx', status: 'published' },
            { name: '第三次作业', dueDate: '2025-11-07', url: 'courses/computer-networks/homeworks/作业3.docx', status: 'published' },
            { name: '第四次作业', dueDate: '2025-11-21', url: 'courses/computer-networks/homeworks/作业4.docx', status: 'published' },
            { name: '第五次作业', dueDate: '2025-12-05', url: 'courses/computer-networks/homeworks/作业5.docx', status: 'published' },
        ]
    }
};