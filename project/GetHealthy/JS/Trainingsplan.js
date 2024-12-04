var swiper = new Swiper(".trainingsSwiper", {
    slidesPerView: 1,
    freeMode: true,
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
});


preloadSlideshowPictures();

function preloadSlideshowPictures() {
    let preloadHTML = ``

    for (let i = 1; i < 9; i++) {
        preloadHTML +=
            `
            <link rel="preload" href="../Images/PagesPictures/Training_SlideshowPictures (${i}).jpg" as="image"></link>
            `
    }
    document.getElementById('trainingsPlanHead').innerHTML += preloadHTML;
}

function initializeSwiper() {
    let slidesPerView = 'auto';

    let swiper2 = new Swiper(".trainingsImageSwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: slidesPerView,
        coverflowEffect: {
            rotate: 25,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: true,
        },
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },
        loop: true,
    });
}

initializeSwiper();

window.addEventListener('resize', () => {
    initializeSwiper();
});


function exercisesDetails(index) {
    sessionStorage['loadExercise'] = `${index}`
    location.href = './TrainingDetail.html'
}

loadStartedExercises();

function loadStartedExercises() {
    let trainingsSwiper = document.getElementById('startedTrainingsSwiper');
    let startedExerciseHTML = ''
    let startedExercise = JSON.parse(localStorage.getItem('startedExercise')) || [];

    if (startedExercise.length === 0) {
        trainingsSwiper.innerHTML = '<p style="padding: 4%">Du hast noch keine Trainings angefangen</p>'
        return;
    }
    for (let i = 0; i < startedExercise.length; i++) {
        startedExerciseHTML += `
        <div class="swiper-slide swiperSlideTraining">
        <div class="row">
            <img src="../Images/Training Muskelgruppen/Muskelgruppen-Funktion-und-Training-–-${exercises[startedExercise[i]].title}.jpg"
                 alt=""/>
            <div class="column">
                <h4>${exercises[startedExercise[i]].title}</h4>
                <p>Trainiere mit ${exercises[startedExercise[i]].exercises.length} Übungen deine ${exercises[startedExercise[i]].title}</p>
                <div class="button" onclick="exercisesDetails(${startedExercise[i]})">
                        <p>Starte dein Training</p>
                </div>
            </div>
        </div>
    </div>
    `
    }
    trainingsSwiper.innerHTML = startedExerciseHTML
}