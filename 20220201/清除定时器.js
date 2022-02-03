/*
 * @Author: 千仞无锋
 * @Date: 2022-01-24 20:10:30
 * @LastEditors: 千仞无锋
 * @LastEditTime: 2022-01-25 00:38:47
 * @FilePath: \2022 01js练习\清除定时器.js
 */
window.onload = function() {
    var btn0 = window.document.querySelector('.begin');
    var btn1 = window.document.querySelector('.stop');

    var hour = window.document.querySelector('.hour')
    var minute = window.document.querySelector('.minute')
    var second = window.document.querySelector('.second')
    var day = window.document.querySelector('.day')

    var date = new Date();
    var inputtime = +new Date('2022-02-14 00:00:00');
    countdown();

    function countdown() {
        var sumdays = +new Date();
        var time = (inputtime - sumdays);
        var times = time / 1000;
        var d = parseInt(times / 60 / 60 / 24);
        d = d < 10 ? '0' + d : d;
        var h = parseInt((times / 60 / 60) % 24);
        h = h < 10 ? '0' + h : h;
        var m = parseInt((times / 60) % 60);
        m = m < 10 ? '0' + m : m;
        var s = parseInt(times % 60);
        s = s < 10 ? '0' + s : s;
        day.innerHTML = d + ' 天';
        hour.innerHTML = h + ' 小时';
        minute.innerHTML = m + ' 分钟';
        second.innerHTML = s + ' 秒';
    };
    var timer0 = null; //等于一个空，比较安全
    console.log('初始化的timer0的类型是: ' + typeof(timer0) + '内容是' + timer0);
    // 若 var timer0 ； 这样写，返回的是undefined
    // 把timer0 变成全局变量。
    btn0.addEventListener('click', function() {
        console.log('已经打开定时器了');
        // 下方timer0是局部变量
        timer0 = window.setInterval(function() {
            countdown();
        }, 1000);
        console.log('此时timer0的类型是: ' + typeof(timer0) + '内容是' + timer0);
    });
    btn1.addEventListener('click', function() {
        console.log('已经暂停定时器了');
        // window.clearInterval(timer0)；
        // 所以此处直接调用局部变量timer0 就直接GG了
        console.log('此时timer0的类型是: ' + typeof(timer0) + '内容是' + timer0);
        window.clearInterval(timer0);
    })
}