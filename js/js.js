// JavaScript Document
// var right_icon = document.querySelector('.slier__icon');
// console.log(right_icon)
// var kich_thuoc = document.querySelectorAll('.slider_img_hospital')[0].clientWidth;
// console.log(kich_thuoc)
// right_icon.onclick = function(e){
//     document.querySelectorAll('.slider_img_hospital')[0].style.marginLeft = '1349px'
//     // console.log(document.querySelectorAll('.slider_img_hospital')[0])
// }


// let sliderImg = document.querySelectorAll('.slide__image'),
//     arrowRight = document.querySelector('.slider__icon-right'),
//     arrowLeft = document.querySelector('.slider__icon-left'),
//     current = 0
// // console.log(sliderImg);
// // console.log(arrowLeft);
// // console.log(arrowRight);
// function reset(){
//     for(let i =0 ; i< sliderImg.length; i++){
//         sliderImg[i].style.display = 'none';
//     }
// }   
// function startSlider(){
//     reset();
//     sliderImg[0].style.display = 'block';
// }
// function sliderLeft(){
//     reset();
//     sliderImg[current - 1].style.display = 'block';
//     current--;
// }
// arrowLeft.addEventListener('click',function(){
//     if(current === 0){
//         current = sliderImg.length
//     }
//     sliderLeft();
// });
// function sliderRight(){
//     reset();
//     sliderImg[current + 1].style.display = 'block';
//     ++current;
// }
// arrowRight.addEventListener('click',function(){
//     if(current === sliderImg.length - 1){
//         current = -1 
//     }
//     // current++;
//     sliderRight();
// });

// setTimeout(sliderRight, 2000); 

// setInterval(function(){
//     sliderRight();
// },2000)

// startSlider();        


const   myslide = document.querySelectorAll('.slider__img'),
		dot = document.querySelectorAll('.dot');

// console.log(myslide)
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 3000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 5000);
}
function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}


document.addEventListener("DOMContentLoaded",function(){
	var nut = document.getElementsByClassName('customers__check-input');
	var ds_customers = document.querySelectorAll('.customers_1');
	console.log(ds_customers)
	console.log(nut)
	ds_customers_1 =ds_customers.length;
	// for(var i = 0 ; i < ds_customers_1; i++){
	// 	ds_customers[i].classList.remove('ra_customers')
	// 	// console.log(ds_customers[i])
	// }
	// ds_customers[0].classList.add('ra_customers')
	for( var i = 0 ; i< nut.length; i++){
		nut[i].onclick = function(){
			var nd_customers = this.getAttribute('data-display');
			var pt_customers = document.getElementById(nd_customers);
			// console.log(nd_customers)
			pt_customers.classList.toggle('ra_customers');
			// console.log(pt_customers)
		}
	}
},false)
document.addEventListener("DOMContentLoaded",function(){


	var menu = document.querySelector('.header__nav');
	var a_menu = document.querySelectorAll('.header__nav__navbar-item-link-lable');

	var scroll_menu = menu.offsetTop;
	// console.log(a_menu)
	console.log(scroll_menu);
	var tt_menu = "duoi127"

	// scroll_news

	var news = document.querySelectorAll('.new__img--image')
	var scroll_news = news[0].offsetTop ;
	var news_label = document.querySelectorAll('.news__item')
	// console.log(scroll_news)
	var tt_news = "duoi2506"

	window.addEventListener('scroll',function(){
		if (window.pageYOffset > scroll_menu){
			if( tt_menu == 'duoi127'){
				menu.classList.add('menu_scroll');
				for(var i = 0; i < a_menu.length; i++){
					// console.log(a_menu[i])
					a_menu[i].classList.add('mau_menu');
				}
				tt_menu = 'tren127';
			}
		}else if(window.pageYOffset < scroll_menu){
			if (tt_menu == 'tren127'){
				menu.classList.remove('menu_scroll');
				for(var i = 0; i < a_menu.length; i++){
					// console.log(a_menu[i])
					a_menu[i].classList.remove('mau_menu');
				}
				tt_menu = 'duoi127';
			}
		}
		if (window.pageYOffset > scroll_news){
			if( tt_news == 'duoi2506'){
				for(var i = 0; i < news.length; i++){
					// console.log(a_menu[i])
					news[i].classList.add('cd_new');
					// a_menu[i].classList.add('');
				}
				for (var i = 0 ; i< news_label.length; i++){
					news_label[i].classList.toggle('cd__new--label');
				}
				tt_news = 'tren2506';
			}
		}
		// }else if(window.pageYOffset < scroll_news){
		// 	if (tt_news == 'tren2506'){
		// 		menu.classList.remove('menu_scroll');
		// 		for(var i = 0; i < a_menu.length; i++){
		// 			// console.log(a_menu[i])
		// 			a_menu[i].classList.remove('mau_menu');
		// 		}
		// 		tt_news = 'duoi127';
		// 	}
		// }
	})





},false)