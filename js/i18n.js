/**
 * 多语言支持模块
 * 处理语言资源加载、切换和页面文本替换
 */

class I18nManager {
    constructor() {
        this.currentLang = 'zh'; // 默认语言为中文
        this.translations = {
            // 直接内联JSON数据，避免CORS问题
            "zh": {
                "app": {
                    "name": "太空探险记忆翻翻乐",
                    "copyright": "© 2024 太空探险记忆翻翻乐",
                    "version": "v1.0.0"
                },
                "tabs": {
                    "home": "首页",
                    "game": "游戏",
                    "records": "记录",
                    "settings": "设置"
                },
                "home": {
                    "title": "太空探险记忆翻翻乐",
                    "subtitle": "开启你的太空记忆之旅",
                    "start_game": "开始游戏",
                    "game_help": "游戏帮助",
                    "game_settings": "游戏设置",
                    "help": "帮助",
                    "settings": "设置",
                    "help_content": "欢迎来到太空探险记忆翻翻乐！\n\n游戏规则：\n1. 点击卡片翻开它们\n2. 找到配对的卡片\n3. 在规定时间内完成所有配对\n\n祝你好运，小宇航员！"
                },
                "difficulty": {
                    "title": "选择你的探险模式",
                    "subtitle": "不同难度的太空之旅",
                    "back": "返回",
                    "help": "帮助",
                    "settings": "设置",
                    "help_content": "每种难度对应不同的游戏时间和配对数量：\n探索模式：120秒，适合初次体验\n冒险模式：90秒，平衡的游戏体验\n挑战模式：60秒，需要快速反应",
                    "explore_mode": {
                        "title": "探索模式",
                        "description": "适合5-7岁小朋友，有充足的时间探索太空！",
                        "feature1": "时间充足",
                        "feature2": "提示更多"
                    },
                    "adventure_mode": {
                        "title": "冒险模式",
                        "description": "适合7-9岁小朋友，来一场刺激的太空冒险！",
                        "feature1": "适度挑战",
                        "feature2": "平衡提示"
                    },
                    "challenge_mode": {
                        "title": "挑战模式",
                        "description": "适合9-10岁小朋友，展现你的太空探险实力！",
                        "feature1": "快速记忆",
                        "feature2": "最少提示"
                    }
                },
                "settings": {
                    "title": "设置",
                    "subtitle": "自定义游戏体验",
                    "game_settings": "游戏设置",
                    "sound": "音效",
                    "sound_desc": "游戏中的音效和提示音",
                    "difficulty": "游戏难度",
                    "difficulty_desc": "调整游戏的整体难度",
                    "animation": "动画效果",
                    "animation_desc": "卡片翻转和其他视觉效果",
                    "other_settings": "其他设置",
                    "dark_mode": "夜间模式",
                    "dark_mode_desc": "使用深色背景以减轻眼睛疲劳",
                    "language": "语言",
                    "language_desc": "选择界面显示语言",
                    "save_settings": "保存设置",
                    "reset_settings": "恢复默认设置",
                    "settings_saved": "设置已保存",
                    "reset_confirm": "确定要恢复默认设置吗？",
                    "difficulty_options": {
                        "easy": "简单",
                        "normal": "普通",
                        "hard": "困难"
                    },
                    "language_options": {
                        "zh": "简体中文",
                        "en": "English"
                    }
                },
                "game": {
                    "time_left": "剩余时间",
                    "round": "关卡",
                    "start": "开始",
                    "restart": "重新开始",
                    "urgent_message": "⏰ 时间过半，加油！",
                    "game_over": "游戏结束！时间到了！",
                    "victory": {
                        "title": "火箭发射成功！",
                        "total_time": "用时",
                        "round_time": "第{round}轮用时",
                        "seconds": "秒",
                        "minutes": "分",
                        "congrats": "恭喜你！火箭已经成功升空，开始了它的太空探险之旅！"
                    },
                    "play_again": "再玩一次",
                    "choose_difficulty": "选择难度",
                    "time_remaining": "剩余时间",
                    "completion_rate": "完成度",
                    "pairs_matched": "配对成功",
                    "try_again": "差一点就能让火箭起飞了！再试一次，这次一定能成功！",
                    "encouragements": [
                        "太棒了！继续保持 🌟",
                        "你真厉害！ 👏",
                        "完美配对！ ✨",
                        "好眼力！ 🎯",
                        "太空探索进行中... 🚀",
                        "智慧小天才！ 🧠",
                        "继续前进！ ⭐",
                        "探索的脚步不停歇！ 🌠"
                    ]
                }
            },
            "en": {
                "app": {
                    "name": "Space Adventure Memory Game",
                    "copyright": "© 2024 Space Adventure Memory Game",
                    "version": "v1.0.0"
                },
                "tabs": {
                    "home": "Home",
                    "game": "Game",
                    "records": "Records",
                    "settings": "Settings"
                },
                "home": {
                    "title": "Space Adventure Memory Game",
                    "subtitle": "Start your space memory journey",
                    "start_game": "Start Game",
                    "game_help": "Game Help",
                    "game_settings": "Game Settings",
                    "help": "Help",
                    "settings": "Settings",
                    "help_content": "Welcome to Space Adventure Memory Game!\n\nGame Rules:\n1. Click on cards to flip them\n2. Find matching pairs of cards\n3. Complete all pairs within the time limit\n\nGood luck, little astronaut!"
                },
                "difficulty": {
                    "title": "Choose Your Adventure Mode",
                    "subtitle": "Different space journey experiences",
                    "back": "Back",
                    "help": "Help",
                    "settings": "Settings",
                    "help_content": "Each difficulty level has different game time and number of pairs:\nExplore Mode: 120 seconds, suitable for beginners\nAdventure Mode: 90 seconds, balanced game experience\nChallenge Mode: 60 seconds, requires fast reactions",
                    "explore_mode": {
                        "title": "Explore Mode",
                        "description": "Perfect for ages 5-7, with plenty of time to explore space!",
                        "feature1": "More Time",
                        "feature2": "More Hints"
                    },
                    "adventure_mode": {
                        "title": "Adventure Mode",
                        "description": "Great for ages 7-9, enjoy an exciting space adventure!",
                        "feature1": "Moderate Challenge",
                        "feature2": "Balanced Hints"
                    },
                    "challenge_mode": {
                        "title": "Challenge Mode",
                        "description": "For ages 9-10, show your space exploration skills!",
                        "feature1": "Quick Memory",
                        "feature2": "Minimal Hints"
                    }
                },
                "settings": {
                    "title": "Settings",
                    "subtitle": "Customize your game experience",
                    "game_settings": "Game Settings",
                    "sound": "Sound Effects",
                    "sound_desc": "Game sounds and audio cues",
                    "difficulty": "Game Difficulty",
                    "difficulty_desc": "Adjust the overall game difficulty",
                    "animation": "Animation Effects",
                    "animation_desc": "Card flips and other visual effects",
                    "other_settings": "Other Settings",
                    "dark_mode": "Dark Mode",
                    "dark_mode_desc": "Use dark background to reduce eye strain",
                    "language": "Language",
                    "language_desc": "Choose interface display language",
                    "save_settings": "Save Settings",
                    "reset_settings": "Reset to Default",
                    "settings_saved": "Settings Saved",
                    "reset_confirm": "Are you sure you want to reset to default settings?",
                    "difficulty_options": {
                        "easy": "Easy",
                        "normal": "Normal",
                        "hard": "Hard"
                    },
                    "language_options": {
                        "zh": "简体中文",
                        "en": "English"
                    }
                },
                "game": {
                    "time_left": "Time Left",
                    "round": "Round",
                    "start": "Start",
                    "restart": "Restart",
                    "urgent_message": "⏰ Half time gone, keep going!",
                    "game_over": "Game Over! Time's up!",
                    "victory": {
                        "title": "Rocket Launch Success!",
                        "total_time": "Time Used",
                        "round_time": "Round {round} Time",
                        "seconds": "seconds",
                        "minutes": "minutes",
                        "congrats": "Congratulations! The rocket has successfully launched and begun its space adventure!"
                    },
                    "play_again": "Play Again",
                    "choose_difficulty": "Choose Difficulty",
                    "time_remaining": "Time Remaining",
                    "completion_rate": "Completion Rate",
                    "pairs_matched": "Pairs Matched",
                    "try_again": "You almost got the rocket to launch! Try again, you'll succeed for sure this time!",
                    "encouragements": [
                        "Great job! Keep it up 🌟",
                        "You're awesome! 👏",
                        "Perfect match! ✨",
                        "Good eye! 🎯",
                        "Space exploration in progress... 🚀",
                        "Smart little genius! 🧠",
                        "Keep going! ⭐",
                        "The journey continues! 🌠"
                    ]
                }
            }
        }; // 存储加载的语言资源
        this.initialized = false;
    }

    /**
     * 初始化多语言管理器
     */
    async init() {
        // 从localStorage获取用户语言偏好
        const savedSettings = JSON.parse(localStorage.getItem('flipCardSettings')) || {};
        this.currentLang = savedSettings.language || 'zh';

        console.log('初始化多语言，当前语言:', this.currentLang);
        
        // 标记为已初始化
        this.initialized = true;
        
        // 初始化页面文本
        this.updatePageTexts();
        
        return this;
    }

    /**
     * 加载指定语言资源 (内联数据，无需实际加载)
     * @param {string} lang - 语言代码
     */
    async loadLanguage(lang) {
        // 已经内联数据，无需加载
        // 如果语言不存在，使用默认语言zh
        if (!this.translations[lang]) {
            console.warn(`语言 ${lang} 不存在，使用默认语言(中文)`);
            return this.translations['zh'];
        }
        
        console.log(`使用语言 ${lang}`);
        return this.translations[lang];
    }

    /**
     * 切换到指定语言
     * @param {string} lang - 要切换到的语言代码
     */
    async changeLanguage(lang) {
        console.log('切换语言到:', lang);
        
        // 如果已经是当前语言，则不做任何事情
        if (this.currentLang === lang) {
            console.log('已经是当前语言，不需要切换');
            return false;
        }
        
        // 更新当前语言
        this.currentLang = lang;
        
        // 更新页面文本
        this.updatePageTexts();
        
        // 保存语言偏好
        const savedSettings = JSON.parse(localStorage.getItem('flipCardSettings')) || {};
        savedSettings.language = lang;
        localStorage.setItem('flipCardSettings', JSON.stringify(savedSettings));
        
        // 通知语言已更改（用于iframe通信）
        if (window.parent !== window) {
            window.parent.postMessage({
                type: 'languageChanged',
                language: lang
            }, '*');
        }
        
        console.log('语言切换完成');
        return true;
    }

    /**
     * 获取翻译文本
     * @param {string} key - 翻译键，支持点号路径如"home.title"
     * @param {object} [params] - 替换参数，用于替换文本中的占位符
     * @returns {string} 翻译后的文本，如果没找到则返回键名
     */
    getText(key, params = {}) {
        if (!this.initialized || !this.translations[this.currentLang]) {
            return key;
        }
        
        // 分解键路径，如"home.title" => ["home", "title"]
        const path = key.split('.');
        
        // 从语言资源中查找文本
        let text = this.translations[this.currentLang];
        for (const segment of path) {
            if (!text || !text[segment]) {
                return key; // 未找到文本，返回键名
            }
            text = text[segment];
        }
        
        // 如果得到的结果不是字符串（如数组或对象），返回键名
        if (typeof text !== 'string') {
            return key;
        }
        
        // 替换参数
        if (Object.keys(params).length > 0) {
            return text.replace(/\{(\w+)\}/g, (match, key) => {
                return params[key] !== undefined ? params[key] : match;
            });
        }
        
        return text;
    }

    /**
     * 更新页面上所有带有data-i18n属性的元素文本
     */
    updatePageTexts() {
        if (!this.initialized) return;
        
        console.log('更新页面文本，语言:', this.currentLang);
        
        // 防止无限循环：如果正在更新，则退出
        if (this._updating) {
            console.log('正在进行另一个更新，跳过此次更新');
            return;
        }
        
        try {
            this._updating = true;
            
            // 查找所有带有data-i18n属性的元素
            const elements = document.querySelectorAll('[data-i18n]');
            
            elements.forEach(element => {
                const key = element.getAttribute('data-i18n');
                const text = this.getText(key);
                
                // 根据元素类型处理不同的更新方式
                if (element.tagName === 'INPUT' && element.type === 'button' || element.tagName === 'BUTTON') {
                    element.value = text;
                } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = text;
                } else if (element.tagName === 'OPTION') {
                    element.text = text;
                } else {
                    element.textContent = text;
                }
            });
            
            // 处理title标签
            const pageTitle = this.getText('app.name');
            if (pageTitle && document.title) {
                document.title = pageTitle;
            }
        } finally {
            this._updating = false;
        }
    }
}

// 创建全局i18n实例
window.i18n = new I18nManager();

// 在文档加载完成后初始化
document.addEventListener('DOMContentLoaded', async () => {
    // 初始化i18n
    await window.i18n.init();
    
    // 处理iframe通信
    window.addEventListener('message', async (event) => {
        const message = event.data;
        
        // 语言改变消息
        if (message && message.type === 'languageChanged') {
            await window.i18n.changeLanguage(message.language);
        }
    });
}); 