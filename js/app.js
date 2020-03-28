$('.card-servico').on('mouseover',function(){
    $(this).find('.card-img img').addClass('img-branco');
});

$('.card-servico').on('mouseout',function(){
    $(this).find('.card-img img').removeClass('img-branco');
});

$(document).ready(function(){
    $('.open-nav').click(function(){
        $('.menu').toggleClass('active');
        $('.open-nav').toggleClass('open');
    });
});

var btnToggleMenu = document.getElementById('btn-toggle-menu');
btnToggleMenu.onclick = function(){
	btnToggleMenu.classList.toggle("menu-close");
	if(btnToggleMenu.classList.contains('menu-close')){
		showMenuMobile();
	} else {
		hideMenuMobile();
	}
}

function showMenuMobile(){
	document.getElementById("menu-mobile").classList.remove("slideOutLeft");
	document.getElementById("menu-mobile").classList.add("slideInLeft");
	document.getElementById("menu-mobile").style.display="block";
}

function hideMenuMobile(){
	document.getElementById("menu-mobile").classList.remove("slideInLeft");
	document.getElementById("menu-mobile").classList.add("slideOutLeft");
}

$(window).scroll(function() { 
	var height = $(window).scrollTop();
	if(height  > 100) {
		if(!$("header").hasClass('header-scroll')){
			$("header").addClass('header-scroll');
		}
	} else{
		$("header").removeClass('header-scroll');
	}
});