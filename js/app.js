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

var modal = document.getElementById('modal');
var modalImg = document.getElementById('modal-img');
var modalOn = false;
var currentImgIndex;

$(".case-study-img").click(function(){
  modalImg.src = $(this).attr('src');
  modal.style.display = "block";
  modalOn = true;
  currentImgIndex = jQuery.inArray($(this)[0], imgs);
  console.log(currentImgIndex);
});

$("#modal").click(function(){
  modal.style.display = "none";
  modalOn = false;
});

$(window).keydown(function(e) {
    // e.preventDefault(); //prevent default arrow key behavior

    //left
    if (modalOn && e.keyCode == 37) {
      if (currentImgIndex !=0){
        currentImgIndex--;
      }
      else {
        currentImgIndex = imgs.length-1;
      }
    }
    //right
    else if (modalOn && e.keyCode == 39) {
      if (currentImgIndex != imgs.length-1){
        currentImgIndex++;
      }
      else {
        currentImgIndex = 0;
      }
    }
    modalImg.src = imgs[currentImgIndex].src;

});