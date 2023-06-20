// let stepblock = document.querySelectorAll('.stepblock');
// let stepinfolast = document.querySelectorAll(".stepinfolast");
// let cards = document.querySelectorAll('.card');
// // let slider_img = document.querySelectorAll('.slider');
// let prevSlide = document.querySelectorAll('.prev');
// let nextSlide = document.querySelectorAll('.next');

// // for (let i = 0; i < prevSlide.length; i++) {
// //   prevSlide[i].addEventListener('click', function minusSlide(event) {


// //   } );
// // }




// // get Slider-block

// /* Индекс слайда по умолчанию */
// var slideIndex = 1;
// showSlides(slideIndex);

// /* Функция увеличивает индекс на 1, показывает следующй слайд*/
// function plusSlide(event) {
//    let target = event.target;
//   showSlides(slideIndex += 1);
// }

// /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
// function minusSlide(event) {
//    let target = event.target;
//   showSlides(slideIndex -= 1);
// }

// /* Устанавливает текущий слайд */
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// /* Основная функция сладера */
// function showSlides(n) {    
//   // let target = event.target;
//   var i;
//   let slides = target.parentNode.querySelectorAll('.item');

//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex - 1].style.display = "block";
// }








// //get Border in block-cards
// for (let i = 0; i < stepblock.length; i++) {
//   stepblock[i].addEventListener('mouseover', function changeBorder() {

//     for (let j = 0; j < stepinfolast.length; j++) {
//       stepinfolast[j].style.borderBottom = "3px solid white";

//     };
//   })
// }