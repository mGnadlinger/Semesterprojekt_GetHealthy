let recipeSlideshow = document.getElementById('swiper-wrapper');
let recipeSlideshowHTML = "";

loadRecipeForSlideshow()
function loadRecipeForSlideshow() {

    for (let i = 0; i < 16; i++) {
        if (i % 2 === 0) {
            recipeSlideshowHTML +=
                `
        <div class="swiper-slide" >
          <img src="./${recipes[i].imgPath}" alt="">
          <p>${recipes[i].name}</p>
          <div class="button" onclick="showRecipe(${i})">
            <p>Lese weiter</p>
          </div>
        </div>
        `
        }
    }
    recipeSlideshow.innerHTML = recipeSlideshowHTML;
}

function showRecipe(index) {
    sessionStorage['loadRecipe'] = `${index}`
    location.href = './Pages/RezeptDetail.html'
}

function initializeSwiper() {
    let slidesPerSwiper;

    if (window.innerWidth <= 767) {
        slidesPerSwiper = 2;
    } else {
        slidesPerSwiper = 4;
    }

    // Initialize the Swiper
    let swiper = new Swiper(".foodSwiper", {
        slidesPerView: slidesPerSwiper,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        keyboard: {
            enabled: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
    });
}

initializeSwiper();

window.addEventListener('resize', () => {
    initializeSwiper();
});