/*
 * @Author: 千仞无锋
 * @Date: 2022-01-25 22:40:06
 * @LastEditors: 千仞无锋
 * @LastEditTime: 2022-01-25 22:51:52
 * @FilePath: \2022 01js练习\js异步.js
 */
// JavaScript 语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。
// 这是因为 Javascript 这门脚本语言诞生的使命所致——JavaScript 是为处理页面中用户的交互，以及操作 DOM 而诞生的。
// 比如我们对某个 DOM 元素进行添加和删除操作，不能同时进行。 应该先进行添加，之后再删除。
// 单线程就意味着， 所有任务需要排队， 前一个任务结束， 才会执行后一个任务。 
// 这样所导致的问题是： 如果 JS 执行的时间过长， 这样就会造成页面的渲染不连贯， 导致页面渲染加载阻塞的感觉。
console.log(1);
var timer0 = window.setTimeout(function() {
    console.log(3);
}, 1000);
console.log(2);
//浏览器依次输出 ： 1 2  然后 一秒后 出现 3
//********************************************** */
// 为了解决这个问题， 利用多核 CPU 的计算能力， HTML5 提出 Web Worker 标准， 允许 JavaScript 脚本创建多个线程
// 于是， JS 中出现了同步和异步。
// 同步:
//      前一个任务结束后再执行后一个任务
// 异步：
//      在做这件事的同时， 你还可以去处理其他事情
// 同步任务：
//      同步任务都在主线程上执行， 形成一个 执行栈
// 异步任务：
/*
 JS中的异步是通过回调函数实现的
 异步任务有以下三种类型：
 普通事件， 如click, resize等
 资源加载， 如load, error等
 定时器， 包括setInterval, setTimeout等
 异步任务相关回调函数添加到任务队列中
 */
//********************************************* */
console.log(1);
var time = window.setTimeout(function() {
    console.log(3);
}, 0);
console.log(2);
//浏览器依次输出 ： 1 2  然后 出现 3
//********************************************** */