// Header animation functionality

const headerTag = document.querySelector("header")
var prevScrollpos = window.pageYOffset; //When the user scrolls down, hide the hider. When the user scrolls up, make it visible

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    headerTag.style.top = "0";
  } else {
    headerTag.style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

// /Header animation functionality

// Progress bar functionality

const bodyTag = document.querySelector("body")
const barTag = document.querySelector("div.progress-bar")

document.addEventListener("scroll", function(){
  const pixels = window.pageYOffset
  const pageHeight = bodyTag.getBoundingClientRect().height
  const totalScrollableDistance = pageHeight - window.innerHeight

  const percentage = pixels / totalScrollableDistance

  barTag.style.width = `${100 * percentage}%`

})

// /Progress bar functionality



// Mobile menu functionality

const menuTag = document.querySelector("a.mobile-menu")
const closeTag = document.querySelector("a.close-mobile-menu")
const navTag = document.getElementById("mobile-nav")

[menuTag, closeTag].forEach((tag)=>{
  tag.addEventListener("click", function() {
    navTag.classList.toggle("open")
  })
})

// /Mobile menu functionality
