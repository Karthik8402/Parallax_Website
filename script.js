let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill1.style.top = value * .8 + 'px';

})
 // Check if the user is in desktop mode
 let isDesktopMode = window.matchMedia("(min-width: 1250px)").matches;
      
 // Function to handle content display
 function handleContentDisplay() {
   if (isDesktopMode) {
     // Display the content for desktop mode
     document.getElementById("content").style.display = "block";
   } else {
     // Hide the content for mobile mode
     document.getElementById("content").style.display = "none";
     window.alert("Your window size is less than 1250 resolution, So Turn to Desktop Mode")
   }
 }

 // Call the function on page load and whenever the window is resized
 window.addEventListener("load", handleContentDisplay);
 window.addEventListener("resize", handleContentDisplay);