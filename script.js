var slideIndex = 0;

function setUp()
{
	mar = document.querySelector(".marquee-top");
	topbar = document.querySelector(".topbar");
	topbar_banner = document.querySelector(".topbar .icon img");
	parallex = document.querySelector(".parallex");
	main = document.querySelector(".main");
	explore = document.querySelector(".explore");
	
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

// 	window.onscroll = function()
// 	{
// 		if(window.scrollY > parallex.getBoundingClientRect().height -100)
// 		{
// 			main.style.borderRadius = "0px";
// 			topbar.style.padding = "2px";
// 			topbar.style.width = "calc(100% - 4px)"
// 			//topbar_banner.classList.add("scrolled");
// 		}
// 		else{
// 			main.style.borderRadius = "30px 30px 0px 0px";
// 			topbar.style.padding = "5px";
// 			topbar.style.width = "calc(100% - 10px)"
// 			//topbar_banner.classList.remove("scrolled");
// 		}
// 	}
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
  setTimeout(carousel, 3000,elem); // Change image every 2 seconds
}