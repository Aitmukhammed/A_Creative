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
          document.getElementById("ss").style.backgroundColor = "";
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
  
  
  
  
    const gap = 5;
  
  const carousel = document.getElementById("carousel"),
    content = document.getElementById("content"),
    next = document.getElementById("next"),
    prev = document.getElementById("prev");
  
  next.addEventListener("click", e => {
    carousel.scrollBy(width + gap, 0);
    if (carousel.scrollWidth !== 0) {
      prev.style.display = "flex";
    }
    if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      next.style.display = "none";
    }
  });
  prev.addEventListener("click", e => {
    carousel.scrollBy(-(width + gap), 0);
    if (carousel.scrollLeft - width - gap <= 0) {
      prev.style.display = "none";
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      next.style.display = "flex";
    }
  });
  
  let width = carousel.offsetWidth;
  window.addEventListener("resize", e => (width = carousel.offsetWidth));