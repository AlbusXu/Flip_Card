// 更新状态栏时间
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    document.querySelector('.time').textContent = `${hours}:${minutes}`;
}

// 初始化时间并每分钟更新
updateTime();
setInterval(updateTime, 60000);

// 处理标签栏切换
document.querySelectorAll('.tab-item').forEach(item => {
    item.addEventListener('click', () => {
        // 更新活动标签
        document.querySelectorAll('.tab-item').forEach(tab => {
            tab.classList.remove('active');
        });
        item.classList.add('active');

        // 更改iframe源
        const pagePath = item.getAttribute('data-page');
        document.getElementById('content-frame').src = pagePath;
        
        // 添加点击反馈
        item.style.transform = 'scale(0.95)';
        setTimeout(() => {
            item.style.transform = '';
        }, 100);
    });
});

// 全局消息传递机制，用于页面间通信
window.addEventListener('message', (event) => {
    // 处理来自iframe的消息
    const message = event.data;
    
    if (message.type === 'navigate') {
        // 导航到特定页面
        document.querySelectorAll('.tab-item').forEach(tab => {
            if (tab.getAttribute('data-page') === message.page) {
                tab.click();
            }
        });
    } else if (message.type === 'gameCompleted') {
        // 游戏完成时的处理逻辑
        // 可以在这里更新记录等...
    }
});

// 创建全屏手机效果
function setupFullscreenMode() {
    const iPhoneContainer = document.querySelector('.iphone-container');
    
    // 检测是否在移动设备上运行
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile && window.innerWidth < 500) {
        iPhoneContainer.classList.add('mobile-view');
        document.body.style.background = '#000';
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    setupFullscreenMode();
    
    // 窗口大小变化时重新检查
    window.addEventListener('resize', setupFullscreenMode);
}); 