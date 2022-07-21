var slideIndex = 0;
var is_menu_opened = false;


function setUp()
{
//	mar = document.querySelector(".marquee-top");
	topbar = document.querySelector(".topbar");
	topbar_banner = document.querySelector(".topbar .icon img");
//	parallex = document.querySelector(".parallex");
	main = document.querySelector(".main");
//	explore = document.querySelector(".explore");
	menuIcon = document.getElementById("menu-icon");
	goToTop = document.querySelector("#go-to-top");
	
	block = document.getElementsByClassName("block");
	
/*	explore.onclick = function()
	{
		window.scrollTo({top: main.getBoundingClientRect().top - topbar.offsetHeight + 15, behavior: "smooth"});
	//	window.onscroll();
	}
*/
	menuIcon.addEventListener("click", openMenu);

	window.onscroll = function(e)
	{
		var windowBottom = $(this).scrollTop() + $(this).innerHeight();
		if(window.scrollY >= 60)
		{
		//	explore.style.bottom = "-100%";
		}else{explore.style.bottom = "0";}
		if(window.scrollY >= $('.icons-swiper')[0].offsetTop + $('.icons-swiper')[0].getBoundingClientRect().height /2)
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