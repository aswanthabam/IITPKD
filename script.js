var slideIndex = 0;
var is_menu_opened = false;


function setUp()
{
	mar = document.querySelector(".marquee-top");
	topbar = document.querySelector(".topbar");
	topbar_banner = document.querySelector(".topbar .icon img");
	parallex = document.querySelector(".parallex");
	main = document.querySelector(".main");
	explore = document.querySelector(".explore");
	menuIcon = document.getElementById("menu-icon");

	mar.onmouseover = function(e)
	{
		mar.stop();
	}
	mar.onmouseout = function(e)
	{
		mar.start();
	}
	explore.onclick = function()
	{
		window.scrollTo({top: main.getBoundingClientRect().top - 150, behavior: "smooth"});
	}
	menuIcon.addEventListener("click", openMenu);

	window.onscroll = function(e)
	{
			if(window.scrollY >= main.offsetTop - topbar.getBoundingClientRect().height)
			{
				topbar.classList.add("scrolled");
			}
			else
			{
				topbar.classList.remove("scrolled");
			}
	}
	const swiper = new Swiper('.latest-widget-swiper', {
		loop: true,
		autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
     pagination: {
	    el: '.banner-pagination',
	    clickable: true,
		},

    navigation: {
          nextEl: '.banner-next',
          prevEl: '.banner-prev',
    },
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