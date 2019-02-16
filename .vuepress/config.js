module.exports = {
    head: [
        ['link', { rel: 'icon', sizes:'64x64', href: '/logo64.png' }]
    ],
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Dart programming language | Dart tutorial',
            description: 'Dart is a language optimized for client-side development for web and mobile.'
        },
    },
    themeConfig: {
        repo: 'ranyunlong/dartdocs',
        docsBranch: 'master',
        editLinks: true,
        logo: 'https://www.dartlang.org/assets/shared/dart/logo+text/horizontal/default-363c9c133ffb7780463d3d638632b64cc8221d74d93cd1002fb1efbbe9983bc9.svg',
        sidebarDepth: 1,
        locales: {
            '/': {
                selectText: '选择语言',
                label: '简体中文',
                editLinkText: '在 GitHub 上编辑此页',
                serviceWorker: {
                    updatePopup: {
                      message: "发现新内容可用.",
                      buttonText: "刷新"
                    }
                },
                algolia: {},
                // lastUpdated: '上次更新',
                nav: [
                    { text: '首页', link: '/' },
                    { text: '指南', link: '/guide/' },
                    { text: 'API', link: '/api/'}
                ],
                sidebar: {
                    '/guide/': [
                        {
                            title: '学习指南',
                            collapsable: false,
                            children: [
                                ['/zh/guide/','指南'],
                                ['/zh/guide/install','安装SDK'],
                                ['/zh/guide/tools','开发工具']
                            ]
                        }
                    ],
                    '/api/': [
                        {
                            title: 'CORE',
                            collapsable: false,
                            children: [
                                ['/zh/api/core/async/','async'],
                                ['/zh/api/core/collection/', 'collection'],
                                ['/zh/api/core/convert/', 'convert'],
                                ['/zh/api/core/core/', 'core'],
                                ['/zh/api/core/developer/', 'developer'],
                                ['/zh/api/core/math/', 'math'],
                                ['/zh/api/core/typed_data/', 'typed_data'],
                            ]
                        },
                        {
                            title: 'WEB',
                            collapsable: false,
                            children: [
                                ['/zh/api/web/html/','html'],
                                ['/zh/api/web/indexed_db/', 'indexed_db'],
                                ['/zh/api/web/js/', 'js'],
                                ['/zh/api/web/js_util/', 'js_util'],
                                ['/zh/api/web/svg/', 'svg'],
                                ['/zh/api/web/web_audio/', 'web_audio'],
                                ['/zh/api/web/web_gl/', 'web_gl'],
                                ['/zh/api/web/web_sql/', 'web_sql']
                            ]
                        },
                        {
                            title: 'VM',
                            path: '/api/vm/',
                            collapsable: false,
                            children: [
                                ['/zh/api/vm/cli/','cli'],
                                ['/zh/api/vm/io/', 'io'],
                                ['/zh/api/vm/isolate/', 'isolate'],
                                ['/zh/api/vm/mirrors/', 'mirrors']
                            ]
                        }
                    ]
                },
                footbar: [
                    {
                        label: '技术',
                        children: [
                            {
                                label: 'Dart 移动开发 (Flutter)',
                                link: ''
                            },
                            {
                                label: 'Dart web 开发'
                            },
                            {
                                label: 'Dart 服务器开发'
                            },
                            {
                                label: 'Observatory 工具'
                            },
                            {
                                label: 'Dart 库'
                            },
                            {
                                label: 'Dart 编程语言'
                            }
                        ]
                    },
                    {
                        label: '资源',
                        children: [
                            {
                                label: 'API 参考'
                            },
                            {
                                label: 'DartPad'
                            },
                            {
                                label: 'Pub packages'
                            },
                            {
                                label: 'Dart 新闻'
                            },
                            {
                                label: 'Dart bugs 和新需求'
                            }
                        ]
                    },
                    {
                        label: '社区',
                        children: [
                            {
                                label: '支持和邮件列表'
                            },
                            {
                                label: '谁在用Dart'
                            },
                            {
                                label: 'Stack Overflow'
                            },
                            {
                                label: 'G+ 社区 & 公告组'
                            },
                            {
                                label: 'Gitter聊天室'
                            },
                        ]
                    }
                ]
            }
        }
    },
    markdown: {
        config: md => {
            md.use(require('markdown-it-mark'))
            md.use(require('markdown-it-include'))
        }
    },
    plugins: ['@vuepress/back-to-top'] 
}