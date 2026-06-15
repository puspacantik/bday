gsap.from(".judul-hero", { duration: 1.5, y: 100, opacity: 0 });
let tl = gsap.timeline({
  scrollTrigger: {},
});

// album Product Slider-start
var TrandingSlider = new Swiper(".album-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// album Product Slider-end

// Fungsi untuk muter musik sekali aja pas ada interaksi
function nyalainMusik() {
  const audio = document.getElementById("myBgm");
  audio.volume = 0.4;
  audio
    .play()
    .then(() => {
      // Jika berhasil diputar, hapus event listener biar gak ke-trigger terus tiap ngeklik
      document.removeEventListener("click", nyalainMusik);
      document.removeEventListener("touchstart", nyalainMusik);
      document.removeEventListener("scroll", nyalainMusik);
    })
    .catch((error) => {
      console.log("Autoplay diblokir browser, nunggu interaksi user...");
    });
}

// Dengerin interaksi pertama dari user (klik, sentuh layar, atau scroll)
document.addEventListener("click", nyalainMusik);
document.addEventListener("touchstart", nyalainMusik);
document.addEventListener("scroll", nyalainMusik);
