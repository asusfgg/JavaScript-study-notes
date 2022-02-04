/*
 * @Author: 千仞无锋
 * @Date: 2022-02-04 13:20:44
 * @LastEditors: 千仞无锋
 * @LastEditTime: 2022-02-04 14:03:44
 * @FilePath: \20220205-网页特效系列\鼠标在盒子内坐标.js
 */
// 我们在盒子内点击， 想要得到鼠标距离盒子左右的距离。
// 首先得到鼠标在页面中的坐标（ e.pageX, e.pageY）
// 其次得到盒子在页面中的距离(box.offsetLeft, box.offsetTop)
// 用鼠标距离页面的坐标减去盒子在页面中的距离， 得到 鼠标在盒子内的坐标
window.onload = initAll

function initAll() {
    var box = document.querySelector('.box');

    box.addEventListener('mousemove', function(e) {
        console.log(e.pageX);
        console.log(e.pageY);
        console.log(box.offsetLeft);
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        this.innerHTML = 'x坐标是' + x + ' y坐标是' + y;
    })
}