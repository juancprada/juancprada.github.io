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
