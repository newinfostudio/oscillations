document.addEventListener('DOMContentLoaded', function () { 
  /* VARS */
  const backToTop = document.getElementById('back-to-top')
  const carouselEls = Array.from(document.querySelectorAll('.default-carousel'))
  const dropdowns = Array.from(document.querySelectorAll('.dropdown'))
  const vids = Array.from(document.querySelectorAll('.video-player'))
  const navLinks = Array.from(document.getElementById('nav-links').querySelectorAll('a'))

  /* BACK TO TOP */
  backToTop.addEventListener('click', function () { 
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })

  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      document.body.classList.add('back-to-top-active')
    } else {
      document.body.classList.remove('back-to-top-active')
    }
  })

  /* CAROUSELS */
  carouselEls.forEach(function (el) { 
    const swiperEl = el.querySelector('.swiper')
    const prev = el.querySelector('.prev')
    const next = el.querySelector('.next')

    const swiper = new Swiper(swiperEl, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      on: {
        afterInit: function () {
          prev.addEventListener('click', function () { 
            swiper.slidePrev()
          })

          next.addEventListener('click', function () {
            swiper.slideNext()
          })
        }
      }
    });
  })


  /* DROPDOWNS */
  dropdowns.forEach(function (el) {
    const clicker = el.querySelector('.clicker')

    clicker.addEventListener('click', function () {
      el.classList.toggle('active')
    })
  })

  /* VIDEOS */
  vids.forEach(function (el) {
    const button = el.querySelector('.overlay')
    const video = el.querySelector('video')

    button.addEventListener('click', function () {
      el.classList.add('playing')

      video.play()
    })
  })

  /* Nav Links */
  navLinks.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault()

      const href = el.getAttribute('href')
      const target = document.querySelector(href)

      target.scrollIntoView({
        behavior: 'smooth'
      })
    })
  })
})