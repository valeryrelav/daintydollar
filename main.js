function toggleDarkMode() {
    let bodyElement = document.getElementById("main-background"); // target the body element
    let darkModeButtonElement = document.getElementById("dark-mode-btn")
    // if backround is black, change background to tan
    if (bodyElement.style.background ==="black") {
     bodyElement.style.background = "white"; // set background to black
     darkModeButtonElement.innerText = "Switch to Light mode!"
     bodyElement.style.color="black";
    }
    
    // if background is not tan, change background to black
    
    else {
        bodyElement.style.background = "black"; // set background to black
        darkModeButtonElement.innerText = "Switch to Dark mode!"
        bodyElement.style.color="#536551";
    }
    
    }

    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
      }