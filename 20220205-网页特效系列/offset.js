/*
 * @Author: 千仞无锋
 * @Date: 2022-02-04 11:48:31
 * @LastEditors: 千仞无锋
 * @LastEditTime: 2022-02-04 13:01:47
 * @FilePath: \20220205-网页特效系列\offset.js
 */
// offset系列
window.onload = initAll;

function initAll() {
    var father = document.querySelector('.father');
    // 以下两条语句 的结果数值，会动态变化
    // 1.可以得到元素的偏移 位置 返回的不带单位的数值  
    console.log(father.offsetTop + ' px');
    // 距离顶部150
    console.log(father.offsetLeft + ' px');
    // 距离左边150
    //若粉色div内部还有个紫色div，内部相对外部位置：
    var son = document.querySelector('.son');
    console.log(son.offsetLeft + ' px');
    // 195  这是直接对标浏览器body边框了，而不是父级边缘.
    // 说明: 它以带有定位的父级为准，若上级没有定位，则body为准.
    // 需要在style标签中 对父级加一句 position: relative;
    // 45    现在显示符合意向需求
    //--------------------------------
    var w = document.querySelector('.w');
    // 2.可以得到元素的大小 宽度和高度 是包含padding + border + width 
    console.log(w.offsetWidth);
    // 706
    console.log(w.offsetHeight);
    // 250
    //--------------------------------
    // 3. 返回带有定位的父亲 否则返回的是body
    console.log(son.offsetParent);
    // 返回带有定位的父亲 否则返回的是body
    // <div class="son"></div>
    console.log(son.parentNode);
    // 返回父亲 是最近一级的父亲 亲爸爸 不管父亲有没有定位
    // <div class="father">
    //-----------------------------------------------------
    // offset 和 style 区别
    // offset与style的区别
    var box = document.querySelector('.box');
    console.log(box.offsetWidth);
    // 220
    console.log(box.style.width);
    // 行内样式表
    // 不包含 padding + border
    box.offsetWidth = '300px';
    // 这句话没意义 改不了
    box.style.width = '300px';
    // 这句话可以改变

}