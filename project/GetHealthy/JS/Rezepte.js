let allRecipes = document.getElementById('allRecipes');
let allRecipesHTML = "";

let currentRecipe = 1;
let reloadPage = true;

function recipeDetail(index) {
    sessionStorage['loadRecipe'] = `${index}`
    location.href = './RezeptDetail.html'
}

function saveRecipe(index) {
    let savedRecipe = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    savedRecipe.push(index);
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipe));

    let currentRecipe = document.getElementById(`pin${index}`)
    currentRecipe.style.backgroundImage = 'url(../Images/PagesPictures/icon_stecknadel_black.png)'
    currentRecipe.removeAttribute('onclick')
    currentRecipe.setAttribute('onclick', `deleteRecipe(${index})`)
}

function deleteRecipe(index) {
    let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    let indexToRemove = savedRecipes.findIndex(item => item === index);
    savedRecipes.splice(indexToRemove, 1)
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));

    let currentTipp = document.getElementById(`pin${index}`)
    currentTipp.style.backgroundImage = 'url(../Images/PagesPictures/icon_stecknadel.png)'
    currentTipp.removeAttribute('onclick')
    currentTipp.setAttribute('onclick', `saveRecipe(${index})`)
}

function previousRecipes() {
    currentRecipe--;
    if (currentRecipe >= 0) {
        loadAllRecipes(currentRecipe)
    }
    if (currentRecipe < 0) {
        currentRecipe = 0;
    }
}

function nextRecipes() {
    currentRecipe++;
    if (currentRecipe <= 3) {
        loadAllRecipes(currentRecipe)
    }
    if (currentRecipe > 3) {
        currentRecipe = 3;
    }
}

loadAllRecipes(0)

function loadAllRecipes(recipeToShow) {
    currentRecipe = recipeToShow;
    allRecipesHTML = ""

    for (let i = 0; i < 10; i++) {
        let starsPics = "";

        for (let j = 0; j < 5; j++) {
            if (recipes[i + (recipeToShow * 10)].rate > j) {
                starsPics +=
                    `<img src="../Images/PagesPictures/icon_star_black.png" alt="">`
            } else {
                starsPics +=
                    `<img src="../Images/PagesPictures/icon_star.png" alt="">`
            }
        }

        if (i % 2 === 0) {
            allRecipesHTML += '<div class="row">'
        }

        allRecipesHTML +=
            `
            <div class="foodBox">
                
                    <div class="pin" id="pin${i + (recipeToShow * 10)}" onclick="saveRecipe(${i + (recipeToShow * 10)})"></div>
                    <h3>${recipes[i].name}</h3>
                
                <img src="../${recipes[i + (recipeToShow * 10)].imgPath}" alt="" class="foodPicture" onclick="recipeDetail(${i + (recipeToShow * 10)})">

                <div class="foodBoxText">
                    <div class="stars">
                        ${starsPics}
                    </div>
                <p>Gesamtzeit: ${(recipes[i + (recipeToShow * 10)].preparationTime + recipes[i + (recipeToShow * 10)].cookingTime)}min<br>
                        Portionen: ${recipes[i + (recipeToShow * 10)].servings} Portionen </p>
                </div>
            </div>  
            `

        if (i % 2 === 1) {
            allRecipesHTML += '</div>'
        }
    }

    let circlePageNav = document.getElementsByClassName('circlePageNav');
    for (let i = 0; i < circlePageNav.length; i++) {
        circlePageNav[i].style.backgroundColor = '#95877A';
    }

    document.getElementById(`circlePageNav${currentRecipe}`).style.backgroundColor = "#186049"
    allRecipes.innerHTML = allRecipesHTML;

    if (!reloadPage) {
        let startPoint = document.getElementById("startPoint");
        startPoint.scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    }
    reloadPage = false;

    let savedRecipe = JSON.parse(localStorage.getItem('savedRecipes')) || [];

    for (let i = 0; i < savedRecipe.length; i++) {
        let currentRecipe = document.getElementById(`pin${savedRecipe[i]}`)
        if (currentRecipe) {
            currentRecipe.style.backgroundImage = 'url(../Images/PagesPictures/icon_stecknadel_black.png)'
            currentRecipe.removeAttribute('onclick')
            currentRecipe.setAttribute('onclick', `deleteRecipe(${savedRecipe[i]})`)
        }
    }
}