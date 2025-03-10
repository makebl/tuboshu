const path = require('path');

module.exports = Object.freeze({
    SIZE: {
        HEIGHT:768,
        WIDTH: 1024,
        MENU_WIDTH: 50
    },
    ERROR_MESSAGES: {
        ERROR: 'connection failed'
    }
    ,
    PATH: {
        APP_PATH: path.join(__dirname, '..'),
    },
    PREVIEW_IMG: "/gui/static/images/logo/preview_default.png",
    SETTING:[
        {
            tag:  "设置",
            name: "setting",
            url: "gui/dist/index.html/",
            img: "/gui/static/images/logo/setting.png",
        },
    ],
    SITES:[
        {
            tag: "腾讯元宝",
            name: "yuanbao",
            url: "https://yuanbao.tencent.com",
            img: "/gui/static/images/logo/yuanbao.png",
            isOpen:true,
            order:1,
        },
        {
            tag: "深度求索",
            name: "deepseek",
            url: "https://chat.deepseek.com/",
            img: "/gui/static/images/logo/deepseek.png",
            isOpen:true,
            order: 2,
        },
        {
            tag:  "字节豆包",
            name: "doubao",
            url: "https://www.doubao.com",
            img: "/gui/static/images/logo/doubao.png",
            isOpen:true,
            order: 3,
        },
        {
            tag:  "纳米搜索",
            name: "nami",
            url: "https://bot.n.cn/",
            img: "/gui/static/images/logo/nami.png",
            isOpen:true,
            order: 4,
        },
        {
            tag:  "月之暗面",
            name: "kimi",
            url: "https://kimi.moonshot.cn",
            img: "/gui/static/images/logo/kimi.png",
            isOpen:true,
            order: 5,
        },
        {
            tag:"通义千问",
            name: "alibaba",
            url: "https://tongyi.aliyun.com/qianwen",
            img: "/gui/static/images/logo/tongyi.png",
            isOpen:true,
            order: 6,
        },
        {
            tag: "文心一言",
            name: "baidu",
            url: "https://yiyan.baidu.com",
            img: "/gui/static/images/logo/baidu.png",
            isOpen:true,
            order: 7,
        },
        {
            tag: "火山方舟",
            name: "huoshan",
            url: "https://www.volcengine.com/experience/ark",
            img: "/gui/static/images/logo/huoshan.png",
            isOpen:false,
            order: 8,
        },
        {
            tag:"智谱清言",
            name: "qingyan",
            url: "https://chatglm.cn",
            img: "/gui/static/images/logo/qingyan.png",
            isOpen:false,
            order: 9,
        },
        {
            tag:  "ChatGPT",
            name: "chatgpt",
            url: "https://chatgpt.com",
            img: "/gui/static/images/logo/chatgpt.png",
            isOpen:false,
            order: 10,
        },
        {
            tag:"Gemini",
            name: "gemini",
            url: "https://gemini.google.com",
            img: "/gui/static/images/logo/gemini.png",
            isOpen:false,
            order: 11,
        },
        {
            tag: "Midjourney",
            name: "midjourney",
            url: "https://www.midjourney.com",
            img: "/gui/static/images/logo/midjourney.png",
            isOpen:false,
            order: 12,
        }
    ]
});