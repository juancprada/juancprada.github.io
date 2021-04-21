// Gallery hover effect functionality

  const canastaLink = document.querySelector("a.link-canasta")
  const vibeLink = document.querySelector("a.link-vibe")
  const amazonasLink = document.querySelector("a.link-amazonas")

  const sunriseLink = document.querySelector("a.link-sunrise")
  const avalancheLink = document.querySelector("a.link-avalanche")
  const floatLink = document.querySelector("a.link-float")

  const nbaLink = document.querySelector("a.link-nba")
  const olympicLink = document.querySelector("a.link-olympic")
  const kitkatLink = document.querySelector("a.link-kitkat")

  const interfaceImages = document.querySelector("div.interface")
  const illustrationImages = document.querySelector("div.illustration")
  const onlinemediaImages = document.querySelector("div.online-media")


  // While hovering, the corresponding image thumbnail appears

  canastaLink.addEventListener("mouseover", function() {
    interfaceImages.innerHTML = `<img src="../assets/images/thumbnail_canasta.png" alt="La Canasta &middot; Sitio Web (Concepto)">`
  })

  vibeLink.addEventListener("mouseover", function() {
    interfaceImages.innerHTML = `<img src="../assets/images/thumbnail_vibe.png" alt="Vibe Co-Living &middot; Web App (Concepto)">`
  })

  amazonasLink.addEventListener("mouseover", function() {
    interfaceImages.innerHTML = `<img src="../assets/images/thumbnail_amazonas.png" alt="Destino Amazonas &middot; Minisitio Web (Concepto)">`
  })

  sunriseLink.addEventListener("mouseover", function() {
    illustrationImages.innerHTML = `<img src="../assets/images/thumbnail_sunrise.png" alt="The Last Sunrise &middot; Ilustraci&oacute;n Digital">`
  })

  avalancheLink.addEventListener("mouseover", function() {
    illustrationImages.innerHTML = `<img src="../assets/images/thumbnail_avalanche.png" alt="Avalanche &middot; Ilustraci&oacute;n Digital">`
  })

  floatLink.addEventListener("mouseover", function() {
    illustrationImages.innerHTML = `<img src="../assets/images/thumbnail_float.png" alt="I Could Float Here Forever &middot; Ilustraci&oacute;n Digital">`
  })


  nbaLink.addEventListener("mouseover", function() {
    onlinemediaImages.innerHTML = `<img src="../assets/images/thumbnail_nba.png" alt="NBA League Pass &middot; Contenido Digital + OOH">`
  })

  olympicLink.addEventListener("mouseover", function() {
    onlinemediaImages.innerHTML = `<img src="../assets/images/thumbnail_olympic.png" alt="Olympic Channel &middot; Contenido Digital">`
  })

  kitkatLink.addEventListener("mouseover", function() {
    onlinemediaImages.innerHTML = `<img src="../assets/images/thumbnail_kitkat.png" alt="KitKat Colombia &middot; Contenido Digital">`
  })


  // When hovering is not happening, no image is displayed

  const interfaceLinks = [canastaLink, vibeLink, amazonasLink]
  const illustrationLinks = [sunriseLink, avalancheLink, floatLink]
  const onlinemediaLinks = [nbaLink, olympicLink, kitkatLink]

  interfaceLinks.forEach(item => {item.addEventListener("mouseout", function() {
    interfaceImages.innerHTML = ""
    })
  })

  illustrationLinks.forEach(item => {item.addEventListener("mouseout", function() {
    illustrationImages.innerHTML = ""
    })
  })

  onlinemediaLinks.forEach(item => {item.addEventListener("mouseout", function() {
    onlinemediaImages.innerHTML = ""
    })
  })

// /Gallery hover effect functionality
