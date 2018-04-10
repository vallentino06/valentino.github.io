$('.page-scroll').on('click',function(e){


var tujuan =$(this).attr('tujuan');

var elemenTujuan = $(tujuan);


$('body').animate({
	scrollTop: elemenTujuan.ofsset().top - 50
}, 1000);



});
