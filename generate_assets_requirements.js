// 生成太空探险记忆翻翻乐游戏资源需求Excel文件
// 运行此脚本将在桌面创建一个Excel文件，包含所有动画、特效和音效需求

const fs = require('fs');
const ExcelJS = require('exceljs');
const path = require('path');
const os = require('os');

// 创建Excel工作簿
const workbook = new ExcelJS.Workbook();
workbook.creator = '太空探险记忆翻翻乐开发团队';
workbook.lastModifiedBy = '制作人';
workbook.created = new Date();
workbook.modified = new Date();

// 添加工作表
const worksheet = workbook.addWorksheet('资源需求列表');

// 设置列标题
worksheet.columns = [
  { header: '版本', key: 'version', width: 8 },
  { header: '场景', key: 'scene', width: 15 },
  { header: '页面', key: 'page', width: 15 },
  { header: '元素', key: 'element', width: 20 },
  { header: '图片', key: 'image', width: 10 },
  { header: '优先级', key: 'priority', width: 10 },
  { header: '状态', key: 'status', width: 10 },
  { header: '动画描述', key: 'animationDesc', width: 30 },
  { header: '循环动画', key: 'loopAnimation', width: 10 },
  { header: '实现方式', key: 'implementation', width: 15 },
  { header: '文件命名', key: 'fileName', width: 20 },
  { header: '制作进度', key: 'animationProgress', width: 10 },
  { header: '特效描述', key: 'effectDesc', width: 30 },
  { header: '文件名', key: 'effectFileName', width: 20 },
  { header: '是否循环', key: 'effectLoop', width: 10 },
  { header: '制作进度', key: 'effectProgress', width: 10 },
  { header: '类型', key: 'audioType', width: 15 },
  { header: '音频需求', key: 'audioDesc', width: 30 },
  { header: '文件名', key: 'audioFileName', width: 20 },
  { header: '制作进度', key: 'audioProgress', width: 10 }
];

// 设置标题行样式
worksheet.getRow(1).font = {
  bold: true,
  size: 12,
  color: { argb: 'FF000000' }
};
worksheet.getRow(1).fill = {
  type: 'pattern',
  pattern: 'solid',
  fgColor: { argb: 'FFD9D9D9' }
};

// 添加数据
const data = [
  // 动画需求 - 通用动画
  {
    version: 'v1.0',
    scene: '通用',
    page: '所有页面',
    element: '按钮',
    image: '是',
    priority: '高',
    status: '待制作',
    animationDesc: '按钮悬停放大效果(1.05倍)，按下缩小效果(0.97倍)',
    loopAnimation: '否',
    implementation: 'CSS',
    fileName: 'btn_hover.css',
    animationProgress: '0%'
  },
  {
    version: 'v1.0',
    scene: '通用',
    page: '所有页面',
    element: '背景',
    image: '是',
    priority: '中',
    status: '待制作',
    animationDesc: '星空背景微动效果',
    loopAnimation: '是',
    implementation: 'CSS',
    fileName: 'bg_stars.css',
    animationProgress: '0%'
  },
  
  // 游戏核心动画
  {
    version: 'v1.0',
    scene: '游戏',
    page: '游戏界面',
    element: '卡片',
    image: '是',
    priority: '高',
    status: '待制作',
    animationDesc: '卡片3D翻转效果(Y轴)，持续0.3秒',
    loopAnimation: '否',
    implementation: 'CSS',
    fileName: 'card_flip.css',
    animationProgress: '0%'
  },
  {
    version: 'v1.0',
    scene: '游戏',
    page: '游戏界面',
    element: '卡片',
    image: '是',
    priority: '高',
    status: '待制作',
    animationDesc: '配对失败卡片晃动，持续0.3秒，晃动幅度8px',
    loopAnimation: '否',
    implementation: 'CSS',
    fileName: 'card_shake.css',
    animationProgress: '0%',
    effectDesc: '失败晃动时的波纹特效',
    effectFileName: 'card_shake_effect.png',
    effectLoop: '否',
    effectProgress: '0%',
    audioType: '交互音效',
    audioDesc: '匹配失败音效，轻微的失败提示音',
    audioFileName: 'match_fail.mp3',
    audioProgress: '0%'
  },
  {
    version: 'v1.0',
    scene: '游戏',
    page: '游戏界面',
    element: '卡片',
    image: '是',
    priority: '高',
    status: '待制作',
    animationDesc: '配对成功卡片保持翻开，有短暂的微缩放效果',
    loopAnimation: '否',
    implementation: 'CSS',
    fileName: 'card_match.css',
    animationProgress: '0%',
    effectDesc: '成功匹配时的边框发光特效',
    effectFileName: 'card_match_glow.png',
    effectLoop: '否',
    effectProgress: '0%',
    audioType: '交互音效',
    audioDesc: '匹配成功音效，欢快的成功音',
    audioFileName: 'match_success.mp3',
    audioProgress: '0%'
  },
  {
    version: 'v1.0',
    scene: '游戏',
    page: '游戏界面',
    element: '倒计时',
    image: '否',
    priority: '中',
    status: '待制作',
    animationDesc: '剩余时间≤30%时红色闪烁，透明度1.0→0.7→1.0循环',
    loopAnimation: '是',
    implementation: 'CSS',
    fileName: 'timer_urgent.css',
    animationProgress: '0%',
    audioType: '系统音效',
    audioDesc: '倒计时紧急提示音，滴答声，每秒一次',
    audioFileName: 'timer_urgent.mp3',
    audioProgress: '0%'
  },
  {
    version: 'v1.0',
    scene: '游戏',
    page: '游戏界面',
    element: '进度条',
    image: '是',
    priority: '中',
    status: '待制作',
    animationDesc: '进度条填充平滑增长，持续0.3秒',
    loopAnimation: '否',
    implementation: 'CSS',
    fileName: 'progress_bar.css',
    animationProgress: '0%'
  },
  
  // 结算页面
  {
    version: 'v1.0',
    scene: '结算',
    page: '结算界面',
    element: '星级评价',
    image: '是',
    priority: '高',
    status: '待制作',
    animationDesc: '星星依次出现，每颗0.5秒，间隔0.3秒',
    loopAnimation: '否',
    implementation: 'CSS/JS',
    fileName: 'stars_appear.js',
    animationProgress: '0%',
    effectDesc: '三星评价时星星有光芒四射效果',
    effectFileName: 'stars_shine.png',
    effectLoop: '否',
    effectProgress: '0%',
    audioType: '成就音效',
    audioDesc: '星级奖励音效，星星出现的清脆声音',
    audioFileName: 'star_appear.mp3',
    audioProgress: '0%'
  },
  {
    version: 'v1.0',
    scene: '结算',
    page: '结算界面',
    element: '庆祝动画',
    image: '是',
    priority: '中',
    status: '待制作',
    animationDesc: '彩带从屏幕上方飘落，背景轻微闪烁，持续3秒',
    loopAnimation: '否',
    implementation: 'JS',
    fileName: 'confetti.js',
    animationProgress: '0%',
    effectDesc: '胜利彩带粒子特效',
    effectFileName: 'confetti_particles.png',
    effectLoop: '否',
    effectProgress: '0%',
    audioType: '成就音效',
    audioDesc: '胜利音效，欢快的庆祝音乐，持续5秒',
    audioFileName: 'victory.mp3',
    audioProgress: '0%'
  },
  
  // 背景音乐
  {
    version: 'v1.0',
    scene: '主界面',
    page: '主页面',
    element: '背景音乐',
    audioType: '背景音乐',
    audioDesc: '主界面背景音乐，轻快、神秘、太空主题，30-60秒循环',
    audioFileName: 'main_bgm.mp3',
    audioProgress: '0%'
  },
  {
    version: 'v1.0',
    scene: '游戏',
    page: '游戏界面',
    element: '背景音乐',
    audioType: '背景音乐',
    audioDesc: '游戏中背景音乐，节奏稳定、轻松、专注，60-90秒循环',
    audioFileName: 'game_bgm.mp3',
    audioProgress: '0%'
  },
  
  // 交互音效
  {
    version: 'v1.0',
    scene: '通用',
    page: '所有页面',
    element: '按钮',
    audioType: '交互音效',
    audioDesc: '按钮点击音效，简短的点击反馈音',
    audioFileName: 'button_click.mp3',
    audioProgress: '0%'
  },
  {
    version: 'v1.0',
    scene: '游戏',
    page: '游戏界面',
    element: '卡片',
    audioType: '交互音效',
    audioDesc: '卡片翻转音效，简短清脆的翻页声',
    audioFileName: 'card_flip.mp3',
    audioProgress: '0%'
  },
  {
    version: 'v1.0',
    scene: '游戏',
    page: '游戏界面',
    element: '时间',
    audioType: '系统音效',
    audioDesc: '时间结束音效，温和的结束提示音',
    audioFileName: 'time_up.mp3',
    audioProgress: '0%'
  }
];

// 写入数据
data.forEach((item, index) => {
  worksheet.addRow(item);
  
  // 设置单元格边框样式
  const row = worksheet.getRow(index + 2);
  row.eachCell({ includeEmpty: true }, cell => {
    cell.border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    };
  });
});

// 设置条件格式化 - 根据优先级着色
worksheet.addConditionalFormatting({
  ref: 'F2:F' + (data.length + 1),
  rules: [
    {
      type: 'expression',
      formulae: ['F2="高"'],
      style: { fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFFF9999' } } }
    },
    {
      type: 'expression',
      formulae: ['F2="中"'],
      style: { fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFFFCC99' } } }
    },
    {
      type: 'expression',
      formulae: ['F2="低"'],
      style: { fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFCCFF99' } } }
    }
  ]
});

// 根据操作系统获取桌面路径
const desktopPath = path.join(os.homedir(), 'Desktop');
const filePath = path.join(desktopPath, '太空探险记忆翻翻乐_资源需求表.xlsx');

// 保存文件
async function saveExcel() {
  try {
    await workbook.xlsx.writeFile(filePath);
    console.log(`文件已保存至: ${filePath}`);
  } catch (error) {
    console.error('保存文件时出错:', error);
  }
}

saveExcel(); 