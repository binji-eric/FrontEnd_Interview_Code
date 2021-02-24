// 创建script标签
// 设置script标签的src属性，以问号传递参数，设置好回调函数callback名称
// 插入到html文本中
// 调用回调函数，res参数就是获取的数据


let script = document.createElement('script');

script.src = 'http://www.baidu.cn/login?username=JasonShu&callback=callback';

document.body.appendChild(script);

function callback (res) {
 console.log(res);
}