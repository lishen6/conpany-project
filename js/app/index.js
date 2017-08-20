/* 动态换算rem和px值  */
var rem =20;
function changeW() {
    rem = 20 / 375 * document.documentElement.clientWidth;
    document.documentElement.style.fontSize = rem + "px";
}
changeW();
window.addEventListener("resize", changeW, false);

$(function(){
	var mySwiper1 = new Swiper ('#swiper-container1', {
    	pagination : '#pagination1',
    	paginationClickable :true,
        autoplay: 5000,
        prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
		onSlideChangeEnd: function(swiper){
	      var _index = swiper.activeIndex; //切换结束时，告诉我现在是第几个slide
	      $(".pagationBox").children('img').removeClass('active').eq(_index).addClass('active');
	    }
    })
    var mySwiper2 = new Swiper ('#swiper-honour', {
        pagination : '#pagination2',
        paginationClickable :true,
        autoplay: 5000,
        prevButton:'.swiper-honour-prev',
        nextButton:'.swiper-honour-next',
        spaceBetween : 15
    })
	$(".pagationBox img").on("click",function(){ //点击缩略图控制swiper的显示
		var _index = $(this).index();
		mySwiper1.slideTo(_index, 300, false);//切换到第一个slide，速度为300毫秒
		$(".pagationBox").children('img').removeClass('active').eq(_index).addClass('active');
	})
})
