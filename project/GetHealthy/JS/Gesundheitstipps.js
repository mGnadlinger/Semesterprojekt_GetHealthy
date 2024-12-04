let allTipps = document.getElementById('allTipps');
let allTippsHTML = "";

let currentTipps = 1;
let reloadPage = true;

showTipps(0)

function saveTipps(index) {
    let savedTipps = JSON.parse(localStorage.getItem('savedTipps')) || [];
    savedTipps.push(index);
    localStorage.setItem('savedTipps', JSON.stringify(savedTipps));

    let currentTipp = document.getElementById(`pin${index}`)
    currentTipp.style.backgroundImage = 'url(../Images/PagesPictures/icon_stecknadel_black.png)'
    currentTipp.removeAttribute('onclick')
    currentTipp.setAttribute('onclick', `deleteTipps(${index})`)
}

function deleteTipps(index) {
    let savedTipps = JSON.parse(localStorage.getItem('savedTipps')) || [];
    let indexToRemove = savedTipps.findIndex(item => item === index);
    savedTipps.splice(indexToRemove, 1)
    localStorage.setItem('savedTipps', JSON.stringify(savedTipps));

    let currentTipp = document.getElementById(`pin${index}`)
    currentTipp.style.backgroundImage = 'url(../Images/PagesPictures/icon_stecknadel.png)'
    currentTipp.removeAttribute('onclick')
    currentTipp.setAttribute('onclick', `saveTipps(${index})`)
}

function previousTipps() {
    currentTipps--;
    if (currentTipps >= 0) {
        showTipps(currentTipps)
    }
    if (currentTipps < 0) {
        currentTipps = 0;
    }
}

function nextTipps() {
    currentTipps++;
    if (currentTipps <= 3) {
        showTipps(currentTipps)
    }
    if (currentTipps > 3) {
        currentTipps = 3;
    }
}

function showTipps(tippsToShow) {
    currentTipps = tippsToShow;
    allTippsHTML = '';

    for (let i = 0; i < 9; i++) {
        allTippsHTML +=
            `
        <div class="tippBox">
                <div class="pin" id="pin${i + 1 * tippsToShow * 9}" onclick="saveTipps(${i + 1 * tippsToShow * 9})"></div>
                <div class="column">
                        <h3>${i + 1 + (tippsToShow * 9)}. ${tipps[i + (tippsToShow * 9)].title}</h3>
                        <p>${tipps[i + (tippsToShow * 9)].description}</p>
                </div>
        </div>
        `
    }
    let circlePageNav = document.getElementsByClassName('circlePageNav');
    for (let i = 0; i < circlePageNav.length; i++) {
        circlePageNav[i].style.backgroundColor = '#95877A';
    }

    document.getElementById(`circlePageNav${currentTipps}`).style.backgroundColor = "#186049"
    allTipps.innerHTML = allTippsHTML

    if (!reloadPage) {
        let startPoint = document.getElementById("startPoint");
        startPoint.scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    }
    reloadPage = false;

    let savedTipps = JSON.parse(localStorage.getItem('savedTipps')) || [];

    for (let i = 0; i < savedTipps.length; i++) {
        let currentTipp = document.getElementById(`pin${savedTipps[i]}`)

        if (currentTipp != null) {
            currentTipp.style.backgroundImage = 'url(../Images/PagesPictures/icon_stecknadel_black.png)'
            currentTipp.removeAttribute('onclick')
            currentTipp.setAttribute('onclick', `deleteTipps(${savedTipps[i]})`)
        }
    }
}

showTipp()
function showTipp() {
    if (sessionStorage['loadTipp'] === `true`) {
        let index = sessionStorage['showTipp']
        let rightTippsToShow = Math.floor(index / 9);
        showTipps(rightTippsToShow)

        let pointToScroll = document.getElementById(`pin${index}`);
        pointToScroll.scrollIntoView({
            block: "center",
            behavior: "smooth"
        });
        sessionStorage['loadTipp'] = `false`
    }
}

function showOneTipp(index) {

    let rightTippsToShow = Math.floor(index / 9);
    showTipps(rightTippsToShow)

    let pointToScroll = document.getElementById(`pin${index}`);
    pointToScroll.scrollIntoView({
        block: "center",
        behavior: "smooth"
    });
    sessionStorage['loadTipp'] = `false`
}