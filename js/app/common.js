
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

//头部应用的点击事件
$(".yingyong-btn").on("click",function(){
	$(".header-nav-ul").toggle();
})
    $(".header-nav-ul li").on("click",function(){
    	var _index = $(this).index();
    	if(_index == 0){
    		window.location.href = 'useone.html';
    	}else if(_index == 1){
    		window.location.href = 'duizhang.html';
    	}else if(_index == 2){
    		window.location.href = 'xinyongrongzhi.html';
    	}else{
    		window.location.href = 'dianzizhengshu.html';
    	}
    	return false;
    })

//首页的点击事件
$(".go-userone").on("click",function(){
	window.location.href = 'useone.html';
})
$(".go-duizhang").on("click",function(){
	window.location.href = 'duizhang.html';
})
$(".go-rongzi").on("click",function(){
	window.location.href = 'xinyongrongzhi.html';
})
$(".go-qianzhang").on("click",function(){
	window.location.href = 'dianzizhengshu.html';
})