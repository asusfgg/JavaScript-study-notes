/*
 * @Author: 千仞无锋
 * @Date: 2022-02-04 14:11:22
 * @LastEditors: 千仞无锋
 * @LastEditTime: 2022-02-04 14:29:58
 * @FilePath: \20220205-网页特效系列\登录框弹出拖动.js
 */
window.onload = function() {
    // 1. 获取元素
    var login = document.querySelector('.login');
    var mask = document.querySelector('.login-bg');
    var link = document.querySelector('#link');
    var closeBtn = document.querySelector('#closeBtn');
    var title = document.querySelector('#title');
    // --------------------------------------------------------
    // 2. 点击弹出层这个链接 link  让mask 和login 显示出来
    link.addEventListener('click', function() {
        mask.style.display = 'block';
        // mask 面具，遮罩
        // block 块
        login.style.display = 'block';
    });
    // ------------------------------------------------------
    // 3. 点击 closeBtn 就隐藏 mask 和 login 
    closeBtn.addEventListener('click', function() {
        mask.style.display = 'none';
        login.style.display = 'none';
    });
    // -------------------------------------------------------
    // 4. 开始拖拽
    // (1) 当我们鼠标按下， 就获得鼠标在盒子内的坐标
    title.addEventListener('mousedown', function(e) {
        var x = e.pageX - login.offsetLeft;
        var y = e.pageY - login.offsetTop;
        // (2) 鼠标移动的时候，把鼠标在页面中的坐标，减去 鼠标在盒子内的坐标就是模态框的left和top值
        document.addEventListener('mousemove', move)

        function move(e) {
            login.style.left = e.pageX - x + 'px';
            login.style.top = e.pageY - y + 'px';
        }
        // (3) 鼠标弹起，就让鼠标移动事件移除
        document.addEventListener('mouseup', function() {
            document.removeEventListener('mousemove', move);
        })
    })
}