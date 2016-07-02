var mySwiper = new Swiper('.swiper-container', {
	loop: true,
	autoplay: 1000,
	pagination: '.swiper-pagination',

});

$('.boot .navList').eq(1).on("click",function(){
	location.href='index.html'
})
$('.boot .navList').eq(0).on("click",function(){
	location.href='demo.html'
})
$('.boot .navList').eq(2).on("click",function(){
	location.href='my.html'
})