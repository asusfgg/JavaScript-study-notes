/*
 * @Author: 千仞无锋
 * @Date: 2022-01-25 18:40:52
 * @LastEditors: 千仞无锋
 * @LastEditTime: 2022-01-25 22:34:50
 * @FilePath: \2022 01js练习\短信发送案例.js
 */
window.onload = function() {
    var btn = window.document.querySelector('button');
    //console.log(btn);
    //var timer = null;

    // function countdown() {
    //     var i = 10;
    //     var timer = window.setInterval(function() {
    //         btn.innerHTML = '还剩下' + i + '秒钟';
    //         i--;
    //         console.log(i);
    //     }, 1000);
    // };

    btn.addEventListener('click', function() {
        // btn.disabled = true;
        this.disabled = true;
        var i = 10;
        var timer = window.setInterval(function() {
            if (i == 0) {
                window.clearInterval(timer);
                i = 10;
                btn.disabled = false;
                //这里不能用this 因为 调用者是 window
                // this.disabled = false;
                btn.innerHTML = '发送按钮';
                // this.innerHTML = '发送按钮';
            } else {
                btn.innerHTML = '还剩下' + i + '秒钟';
                // this.innerHTML = '还剩下' + i + '秒钟';
                i--;
                console.log(i);
            }
        }, 1000);
    })
}