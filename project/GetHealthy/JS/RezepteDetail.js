let index = sessionStorage['loadRecipe'] || '';
let recipeBox = document.getElementById('recipe')

if (sessionStorage['profil'] === 'true') {
    document.getElementById('returnLink').href = './Profil.html';
}

loadOneRecipe()

function loadOneRecipe() {
    document.getElementById('title').innerHTML = `GetHealthy - ${recipes[index].name}`
    recipeHTML =

        `<h2>${recipes[index].name}</h2>
            <img src="../${recipes[index].imgPath}" alt="">

            <div class="row">
                <p> <b> Vorbereitung </b> <br> ${recipes[index].preparationTime}min</p>
                <p> <b>Zubereitung </b> <br> ${recipes[index].cookingTime}min</p>
                <p> <b>Gesamt </b> <br> ${(recipes[index].preparationTime) + (recipes[index].cookingTime)}min</p>
            </div>
            <hr>
                <div class="column">
                    <p> <b>Portionen <br> </b></p>
                    <div class="row" id="portionen"><input id="servings" type="number" min="1" value="${recipes[index].servings}" oninput="changeAmount()"><p>Portionen</p></div>
                
            </div>
        <hr>

        <h4>Benötigte Kochutensilien: </h4> 
        <ul>`
    for (let i = 0; i < recipes[index].utensils.length; i++) {
        recipeHTML += `<li>${recipes[index].utensils[i]}</li>`
    }

    recipeHTML += `</ul>
        <h4>Zutaten: </h4>
        <ul id="ingredients">`

    for (let i = 0; i < recipes[index].ingredients.length; i++) {
        recipeHTML += `<li>${recipes[index].ingredients[i].min ? recipes[index].ingredients[i].min : ''} ${recipes[index].ingredients[i].max ? ' - ' + recipes[index].ingredients[i].max : ''} ${recipes[index].ingredients[i].desc}</li>`;
    }

    recipeHTML +=
        `</ul>
        <hr>

        <h4>Anleitung: </h4><p>`

    for (let i = 0; i < recipes[index].instructions.length; i++) {
        recipeHTML += `${recipes[index].instructions[i]} `
    }

    recipeHTML += '</p>'

    recipeBox.innerHTML = recipeHTML
}

function changeAmount() {
    let value = document.getElementById('servings').value;
    let ingredientsList = document.getElementById('ingredients');

    let ingredientsHTML = ""

    for (let i = 0; i < recipes[index].ingredients.length; i++) {
        ingredientsHTML += `<li>${recipes[index].ingredients[i].min ? ((recipes[index].ingredients[i].min) * value) : ''} ${recipes[index].ingredients[i].max ? ' - ' + ((recipes[index].ingredients[i].max)) * value : ''} ${recipes[index].ingredients[i].desc}</li>`;
    }
    ingredientsList.innerHTML = ingredientsHTML
}

recipeSuggestions()

function recipeSuggestions() {
    let suggestionsBox = document.getElementById('recipeSuggestions');
    let recipeToShow = [];
    let recipeSuggestionHTML = '<div class="row">';

    while (recipeToShow.length < 3) {
        let randomNumber = Math.floor(Math.random() * 36);
        if (!recipeToShow.includes(randomNumber)) {
            recipeToShow.push(randomNumber);
        }
    }

    for (let i = 0; i < recipeToShow.length; i++) {
        recipeSuggestionHTML +=
            `
            <div class="recipeSuggestionsBox" onclick="showRecipe(${recipeToShow[i]})">
                <h4>${recipes[recipeToShow[i]].name}</h4>
                <img src="../${recipes[recipeToShow[i]].imgPath}" alt="">
            </div>
            `
    }
    recipeSuggestionHTML += '</div>'
    suggestionsBox.innerHTML = recipeSuggestionHTML
}

function showRecipe(index) {
    sessionStorage['loadRecipe'] = `${index}`
    location.href = './RezeptDetail.html'
}