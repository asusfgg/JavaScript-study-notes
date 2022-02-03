/*
 * @Author: 千仞无锋
 * @Date: 2022-02-04 01:37:33
 * @LastEditors: 千仞无锋
 * @LastEditTime: 2022-02-04 01:53:14
 * @FilePath: \202202\history对象.js
 */
// history对象
// window 对象给我们提供了一个 history 对象， 与浏览器历史记录进行交互
// 该对象包含用户（ 在浏览器窗口中） 访问过的 URL。
// 方法：（浏览器相关按钮）
// back() 可以后退功能
// forward() 前进功能
// go(参数) 前进后退功能， 参数如果是 1 前进1个页面 如果是 - 1 后退1个页面。
var btn = document.querySelector('button');
btn.addEventListener('click', function() {
    // history.forward();
    history.go(1);
})