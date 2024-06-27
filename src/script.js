const swiper = new Swiper(".mySwiper", {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
})


document.getElementById('currentYear').textContent = new Date().getFullYear()

document.getElementById('goTop').addEventListener('click', () =>{
 window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
})