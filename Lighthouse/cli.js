const fs = require('fs');
// 性能报告
const lighthouse = require('lighthouse');
// 谷歌浏览器的启动器
const chromeLauncher = require('chrome-launcher');
(async () => {
  // 启动⼀个 Chrome
  const chrome = await chromeLauncher.launch();
  // 对生成的页面做的配置
  const options = {
    logLevel: 'info', output: 'html', onlyCategories:
      ['performance'], port: chrome.port
  };
  // 使⽤ Lighthouse 对⻚⾯进⾏⼀个计算
  const res = await lighthouse('https://www.baidu.com/', options);
  const { report } = res;
  // 写入返回的报告
  fs.writeFileSync('report.html', report);
  // res.lhr.finalUrl是lighthouse结果的集合
  console.log('Report is done for', res.lhr.finalUrl);
  // 用完了释放
  await chrome.kill();
})();
