var slideIndex = 0;
var is_menu_opened = false;
var topbar_height = "100px";
var innerWidth = window.innerWidth;


function setUp()
{

	topbar = document.querySelector(".topbar");
	topbar_banner = document.querySelector(".topbar .icon img");
	main = document.querySelector(".main");
	menuIcon = document.getElementById("menu-icon");
	goToTop = document.querySelector("#go-to-top");
	
	block = document.getElementsByClassName("block");
	
	menuIcon.addEventListener("click", openMenu);

	window.onscroll = function(e)
	{
		var windowBottom = $(this).scrollTop() + $(this).innerHeight();
		if(window.scrollY >= 100)goToTop.style.display = "flex";else goToTop.style.display="none";
		
		// if(window.scrollY >= 100)
		// {
		// 	topbar.classList.add("scrolled");
		// }
		// else
		// {
		// 	topbar.classList.remove("scrolled");
		// 	//goToTop.style.display = "none";
		// }
		$(".block").each(function() {
			var objectBottom = $(this).offset().top;
			if (objectBottom < windowBottom) {
				if ($(this).css("opacity")==0) {$(this).fadeTo(700,1);}
			} else {
				if ($(this).css("opacity")==1) {$(this).fadeTo(700,0);}
			}
			
		});
	}
	const swiper = new Swiper('.main-swiper', {
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
	
}
function openSubMenu(elem)
{
	elem.parentElement.classList.add('opened');
//	elem.onclick = null;
}
function closeSubMenu(elem)
{
	elem = elem.parentElement.parentElement;
//	elem.setAttribute("onclick","openSubMenu(this);");
	elem.classList.remove("opened");
	console.log(elem);
}
function openMenu()
{
	menuIcon = document.getElementById("menu-icon");
	menu = document.getElementById("full-menu");
	if(!is_menu_opened){
		menu.style.height = "auto";
	//	menu.style.opacity = 1;
		topbar.classList.add("menu-opened");
		is_menu_opened = true;
	}
	else{
		menu.style.height = "0px";
	//	menu.style.opacity = 0;
		topbar.classList.remove("menu-opened");
		is_menu_opened = false;
	}
}
function imageLoaded(elem)
{
	elem.style.opacity = 1;
}