
/* 动态换算rem和px值  */
var rem =20;
function changeW() {
    var _width = document.documentElement.clientWidth;
    var _height = document.documentElement.clientHeight;
    if(_width<=414){ //6plus宽
      rem = 20 / 375 * _width;
    }else{
      rem = 20 / 385 * _width;;
    }
    document.documentElement.style.fontSize = rem + "px";

}
changeW();
window.addEventListener("resize", changeW, false);

if (typeof jQBrowser != 'undefined') {
    if (jQBrowser.name == 'msie' && jQBrowser.versionNumber <= 8) {
        var k = confirm('您的浏览器版本太旧，网页不再支持老版本浏览器，是否跳转到建议页面？')
        if (k) {
            window.location.href = "np.html";
        }
    }
}