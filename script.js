// script.js
let currentIndex = 0;
const banners = document.querySelectorAll('.banner-img');
const totalBanners = banners.length;

function showBanner(index) {
    banners.forEach((banner, i) => {
        banner.classList.toggle('active', i === index);
    });
}

function nextBanner() {
    currentIndex = (currentIndex + 1) % totalBanners;
    showBanner(currentIndex);
}

function prevBanner() {
    currentIndex = (currentIndex - 1 + totalBanners) % totalBanners;
    showBanner(currentIndex);
}

document.querySelector('.next-btn').addEventListener('click', nextBanner);
document.querySelector('.prev-btn').addEventListener('click', prevBanner);

// Auto change every 2 seconds
//setInterval(nextBanner, 2000);
