var slideIndex = 0;
var is_menu_opened = false;


function setUp()
{
//	mar = document.querySelector(".marquee-top");
	topbar = document.querySelector(".topbar");
	topbar_banner = document.querySelector(".topbar .icon img");
	parallex = document.querySelector(".parallex");
	main = document.querySelector(".main");
	explore = document.querySelector(".explore");
	menuIcon = document.getElementById("menu-icon");
	goToTop = document.querySelector("#go-to-top");
	
	block = document.getElementsByClassName("block");
	
	explore.onclick = function()
	{
		window.scrollTo({top: main.getBoundingClientRect().top - 150, behavior: "smooth"});
	}
	menuIcon.addEventListener("click", openMenu);

	window.onscroll = function(e)
	{
		var windowBottom = $(this).scrollTop() + $(this).innerHeight();
		if(window.scrollY >= $('.explore').offsetTop)
		{
			explore.style.opacity = 0;
		}else{explore.style.opacity = 1;}
		if(window.scrollY >= main.offsetTop - topbar.getBoundingClientRect().height)
		{
			topbar.classList.add("scrolled");
		}
		else if(window.scrollY >= main.offsetTop - topbar.getBoundingClientRect().height - 150)
		{
			goToTop.style.display = "flex";
		}
		else
		{
			topbar.classList.remove("scrolled");
			goToTop.style.display = "none";
		}
		$(".block").each(function() {
			var objectBottom = $(this).offset().top;
			if (objectBottom < windowBottom) {
				if ($(this).css("opacity")==0) {$(this).fadeTo(700,1);}
			} else {
				if ($(this).css("opacity")==1) {$(this).fadeTo(700,0);}
			}
			
		});
	}
	const swiper = new Swiper('.latest-widget-swiper', {
		loop: true,
		effect: 'creative',
		creativeEffect: {
          prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: "right center",
            translate: ["5%", 0, -200],
            rotate: [0, -100, 0],
          },
        },
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.banner-pagination',
			clickable: true,
		},
		
	});
	const swiper2 = new Swiper('.parallex-background', {
		direction: 'vertical',
		effect: 'fade',
		loop: true,
		lazy: true,
		allowTouchMove: false,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		speed: 2000,
		pagination: {
			el: '.parallex-pagination',
			clickable: true,
		},
	});
	const swiper3 = new Swiper('.icons-swiper', {
		direction: 'horizontal',
		pagination: {
			el: '.icons-pagination',
			clickable: true,
		},
		navigation: {
          nextEl: '.icons-next',
          prevEl: '.icons-prev',
          clickable: true,
		},
		/*scrollbar: {
			el: '.icons-scrollbar',
		},*/
	});
	const swiper4 = new Swiper('.department-swiper', {
		direction: 'horizontal',
		slidesPerView: 1.2,
        spaceBetween: 0,
        freeMode: true,
        loop: true,
        autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		scrollbar: {
			el: '.department-scrollbar',
		},
	});
	const swiper5 = new Swiper('.news-swiper', {
		direction: 'vertical',
		slidesPerView: 3,
        spaceBetween: 0,
        loop: true,
        allowTouchMove: false,
        autoplay: {
			delay: 1500,
			disableOnInteraction: false,
		},
		navigation: {
          nextEl: '.news-down',
          prevEl: '.news-up',
          clickable: true,
		},
		speed: 1000,
	});
}
function openMenu()
{
	menuIcon = document.getElementById("menu-icon");
	menu = document.getElementById("full-menu");
	if(!is_menu_opened){
		menu.style.height = "auto";
		menu.style.opacity = 1;
		is_menu_opened = true;
	}
	else{
		menu.style.height = "0px";
		menu.style.opacity = 0;
		is_menu_opened = false;
	}
}
function imageLoaded(elem)
{
	elem.style.opacity = 1;
}
function carousel(elem) {
  var i;
  var x = elem.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
  	/*x[i].style.transition = "all 1s ease";
    x[i].style.opacity = 0;*/
    x[i].style.display = "none";
  }
  setTimeout(function(x){
  	for (i = 0; i < x.length; i++) {
  		
    }
  },1000,x);
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  /*x[slideIndex-1].style.transition = "all 1s ease";
  x[slideIndex-1].style.opacity = 1;*/
  setTimeout(carousel, 4900,elem); // Change image every 2 seconds
}