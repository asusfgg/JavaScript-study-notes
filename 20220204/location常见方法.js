/*
 * @Author: 千仞无锋
 * @Date: 2022-02-03 19:25:23
 * @LastEditors: 千仞无锋
 * @LastEditTime: 2022-02-03 22:15:12
 * @FilePath: \202202\location常见方法.js
 */
window.onload = function() {
    var btns = document.querySelectorAll('button');
    console.log(btns[0]);
    btns[0].addEventListener('click', function() {
        location.assign('https://www.baidu.com');
        // assign 具备记录历史功能 可以回退
    })
    btns[1].addEventListener('click', function() {
        location.replace('https://www.4399.com');
        // replace 替换页面，不具备历史功能，不能回退
    })
    btns[2].addEventListener('click', function() {
        location.reload()
            //相当于刷新
        location.reload(ture);
        //强制刷新
    })
};