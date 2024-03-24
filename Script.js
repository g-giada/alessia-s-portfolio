// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("headername").style.fontSize = "30px";
      document.getElementById("headername").style.float = "left";
      document.getElementById("headername").style.textShadow = "0px 0px var(--alepink);";
      document.getElementById("headerexplore").style.display = "none";
      document.getElementById("headerarrow").style.display = "none";
      document.getElementById("navigation").style.display = "block";
    } else {
      document.getElementById("headername").style.fontSize = "150px";
      document.getElementById("headerexplore").style.display = "block";
      document.getElementById("headerarrow").style.display = "block";
      document.getElementById("navigation").style.display = "none";
      document.getElementById("headername").style.float = "none";
      document.getElementById("header").style.maxHeight = "200px";

    }
  } 