$('.page-scroll').on('click', function(e)({


	var tujuan = $(this).attr('href');

	var elementTujuan = $(tujuan);


	$('body').animate({
		scrollTop: elementTujuan.offset().top
	});

	e.preventDefault();
});