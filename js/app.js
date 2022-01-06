const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");

// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
date.innerHTML = new Date().getFullYear();

// get all matching HTML from the page, using the class value to try and find it
var imgs = $(".case-study-img");

// get the modal element
var modal = document.getElementById('modal');
// and the image inside of it
var modalImg = document.getElementById('modal-img');
// for the arrow key function
var modalOn = 0;
// for tracking which image is being displayed
var currentImgIndex;

// when the case study image is clickced
$(".case-study-img").click(function(){
  // display the image in the modal
  modalImg.src = $(this).attr('src');
  modal.style.display = "block";
  // the modal is on, so the arrow keys should work
  modalOn = 1;
  // track which image you are currently displaying
  currentImgIndex = jQuery.inArray($(this)[0], imgs);
});

/*
// turning off the modal
$(modal).click(function(){
  modal.style.display = "none";
  modalOn = false;
});
*/


// turning off the modal
$(modal).click(function(){
  if(modalOn == 1){
    modalImg.classList.add("modal-content-extrazoom");
    modalOn = 2;
  }
  else if (modalOn == 2){
    modalImg.classList.remove("modal-content-extrazoom");
    modal.style.display = "none";
    modalOn = 0;
  }
});


// when a key is pressed
$(window).keydown(function(e) {
    // e.preventDefault(); //prevent default arrow key behavior

    //when the modal is open and the key is the left arrow
    if (modalOn && e.keyCode == 37) {
      // decrement the index
      if (currentImgIndex !=0){
        currentImgIndex--;
      }
      // if you are at the start, loop to the end
      else {
        currentImgIndex = imgs.length-1;
      }
    }

    //when the modal is open and the key is the right arrow
    else if (modalOn && e.keyCode == 39) {
      //increment the index
      if (currentImgIndex != imgs.length-1){
        currentImgIndex++;
      }
      // if you are at the end, loop to the start
      else {
        currentImgIndex = 0;
      }
    }

    // based on previous index setting, set the image
    modalImg.src = imgs[currentImgIndex].src;

});