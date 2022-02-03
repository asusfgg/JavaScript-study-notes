/*
 * @Author: 千仞无锋
 * @Date: 2022-02-03 21:56:58
 * @LastEditors: 千仞无锋
 * @LastEditTime: 2022-02-04 01:36:42
 * @FilePath: \202202\navigatior对象.js
 */
// navigator对象
// navigator 对象包含有关浏览器的信息， 它有很多属性
// 我们常用的是userAgent, 该属性可以返回由客户机发送服务器的user - agent头部的值。
// 前端代码可以判断用户是用哪个终端打开页面的，如果是用 PC 打开的，我们就跳转到 PC 端的页面，如果是用手机打开的，就跳转到手机端页面。
if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone))){
        // match 相配的意思， 后面跟了个正则表达式
        window.location.href = "../";
        // ../的意思是 先跳出本文件夹到上一层文件夹里
        // href 超链接的意思
    }
    else {
        window.location.href = "";
    }