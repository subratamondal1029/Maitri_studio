document.getElementById('currentYear').textContent = new Date().getFullYear()

document.getElementById('goTop').addEventListener('click', () =>{
 window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
})

const DriveUrl = "https://script.google.com/macros/s/AKfycbw0FSk9YJ61C1tOm094fmYL9F5QxYEhlHiHtDPHkS7t86oJB0K-8Zl352C9jSGtE9w8/exec"
fetch(DriveUrl)
.then((res) => res.json())
.then((data) =>{
setSwiper(data)
setRecent(data)
})

function setSwiper(data){
  const swiper_wrapper = document.querySelector('.swiper-wrapper')

data.forEach(async function(base64){
  const img = await convertToBlob(base64)

  const swiper_slide = document.createElement('div')
  swiper_slide.classList.add('swiper-slide')
  swiper_slide.appendChild(img)

  swiper_wrapper.appendChild(swiper_slide)
})
}

async function setRecent(data){
  data = data.reverse()

  const resentCards = document.querySelector('#recentAnounsment .cards')

  const img1 = await convertToBlob(data[0])
  const img2 = await convertToBlob(data[1])

 const card1 = document.createElement('div')
 card1.classList.add('card')
 card1.appendChild(img1)

 const card2 = document.createElement('div')
 card2.classList.add('card')
 card2.appendChild(img2)

 resentCards.appendChild(card1)
 resentCards.appendChild(card2)

 document.getElementById('loader').style.display = "none"
 swiperActive()
}


function convertToBlob(base64){
  return new Promise((res, rej) =>{
    const parts = base64.split(';base64,');
    const type = "image/png";
  
    const decodedData = atob(parts[0]);
  
    const arrayBuffer = new ArrayBuffer(decodedData.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < decodedData.length; i++) {  
    uint8Array[i] = decodedData.charCodeAt(i);
    }
  
    const blob =  new Blob([uint8Array], { type: type })
    const imageUrl = URL.createObjectURL(blob);
  
    const img = document.createElement("img");
    img.src = imageUrl;

    res(img)
  })

}

function swiperActive(){
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
})
}

window.addEventListener("scroll", () =>{
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("scrollIndicator").style.width = scrolled + "%";
})