function openNav() {
document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  if(document.getElementById("demo").style.backgroundColor)
  document.getElementById("demo").style.backgroundColor = "";
  else
    document.getElementById("demo").style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  window.onclick = function(event) {
  if (!event.target.matches('.dropbtn, .message, .submit_application')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
    }
  }
}
  

  window.onclick = function(event) {
    if (!event.target.matches('.btndrop')) {
  
      var dropdowns = document.getElementsByClassName("content-dropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
      }
    }
  }


function apple() {
  document.getElementById("downdropmy").classList.toggle("showInfoCall");
  if(document.getElementById("ss").style.backgroundColor)
      document.getElementById("ss").style.backgroundColor = "";
      else
        document.getElementById("ss").style.backgroundColor = "red";
      }

function closeAppli() {
    document.getElementById("myDropdown").classList.remove('show');
    if(document.getElementById("demo").style.backgroundColor )
    document.getElementById("demo").style.backgroundColor = "";
    else
       document.getElementById("demo").style.backgroundColor = "rgba(0,0,0,0.4)";
    }

function closeCall() {
  document.getElementById("downdropmy").classList.remove('showInfoCall');
  }   








  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }