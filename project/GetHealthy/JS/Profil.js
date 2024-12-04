let accountPicture = ''

if (sessionStorage['loggedIn'] === 'true') {
    loggedIn()
} else {
    login()
}

function login() {
    sessionStorage['loggedIn'] = `false`
    document.getElementById('content').innerHTML = '<div id="loginBox"><div id="login"></div></div>'
    document.getElementById('login').innerHTML =
        `
        <h4>Login</h4>
        <label for="usernameAccount"> Benutzername:
            <input type="text" id="usernameAccount">
        </label>
        <br>
        <label for="passwordAccount"> Passwort:
            <input type="password" id="passwordAccount">
        </label>

<div id="message"><p> </p></div>

<br>
        <p onclick="createNewAccount()" id="loginSwitch">Erstelle einen neuen Account</p>

        <div class="button" onclick="submitLogin()">
            <p>Login</p>
        </div>

        `
    document.getElementById('passwordAccount').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            submitLogin()
        }
    });
}

function createNewAccount() {

    document.getElementById('login').innerHTML =
        `
        <h4>Persönliche Daten</h4>
        
        <label for="firstname"> Vorname:
            <input type="text" id="firstname">
        </label>
        <br>
        <label for="lastname"> Nachname:
            <input type="text" id="lastname">   
        </label>
        <br>
        <label for="age"> Alter:
            <input type="number" id="age">
        </label>
        <br>
        <label for="height"> Größe: (in cm)
            <input type="number" min="80" max="240" id="height">
        </label>
        <br>
        <label for="weight"> Gewicht: (in kg)
            <input type="number" min="30" max="250" id="weight">
        </label>
        <br>
        <label for="goalWeight"> Dein Zielgewicht: (in kg)
            <input type="number" min="30" max="250" id="goalWeight">
        </label>
        
        <h4>Erstelle deinen Account</h4>
        
        <label for="row"> Profilbild:</label>
            <div class="row" id="accountPictureRow">
                <div class="accountPictureBox" onclick="saveAccountPic(this, 'bird')"><img src="../Images/Account/accountPic_bird.jpg" alt="Bird"></div>
                <div class="accountPictureBox" onclick="saveAccountPic(this, 'dog')"><img src="../Images/Account/accountPic_dog.jpg" alt="Dog"></div>
                <div class="accountPictureBox" onclick="saveAccountPic(this, 'lion')"><img src="../Images/Account/accountPic_lion.jpg" alt="Lion"></div> 
                
                <div class="accountPictureBox" onclick="saveAccountPic(this, 'smalldog')"><img src="../Images/Account/accountPic_smalldog.jpg" alt="Dog"></div>
                <div class="accountPictureBox" onclick="saveAccountPic(this, 'smalltiger')"><img src="../Images/Account/accountPic_smalltiger.jpg" alt="Tiger"></div>
                <div class="accountPictureBox" onclick="saveAccountPic(this, 'tiger')"><img src="../Images/Account/accountPic_tiger.jpg" alt="Tiger"></div>
            </div>
        
        <br>
        <br>

        <label for="username"> Benutzername:
            <input type="text" id="username">
        </label>
        <br>
        <label for="password"> Passwort:
            <input type="password" id="password">
        </label>
        <br>
        <label for="password2"> Wiederhole dein Passwort:
            <input type="password" id="password2">
        </label>
        
        <div id="message"><p> </p></div>
        
        <br>
        <p onclick="login()" id="loginSwitch">Du hast bereits einen Account</p>
        
        <div class="button" onclick="createAccount()">
            <p>Erstelle deinen Account</p>
        </div>      
        `
    document.getElementById('password2').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            createAccount()
        }
    });
}

function submitLogin() {
    let isValid = false;
    let username = document.getElementById('usernameAccount').value;
    let password = document.getElementById('passwordAccount').value;

    if (username === '' || password === '') {
        document.getElementById('message').innerHTML = '<p>Geben Sie bitte gültige Werte ein</p>'
    } else {
        let accountData = JSON.parse(localStorage.getItem('accountData')) || [];

        for (let i = 0; i < accountData.length; i++) {
            if (accountData[i].password === password && accountData[i].username === username) {
                isValid = true;
                sessionStorage['loggedInPerson'] = `${i}`
            }
        }

        if (isValid) {
            loggedIn();
        } else if (!isValid) {
            document.getElementById('message').innerHTML = '<p>Benutzername oder Passwort sind nicht korrekt</p>'
        }
    }

}

function saveAccountPic(element, picName) {
    let accPics = document.getElementsByClassName('accountPictureBox');
    for (let i = 0; i < accPics.length; i++) {
        accPics[i].style.border = 'solid 2px #E4D5C7';
    }
    element.style.border = 'solid 2px #186049';
    accountPicture = picName;
}

function createAccount() {
    let firstName = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let goalWeight = document.getElementById('goalWeight').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;


    if (firstName === '' || lastname === '' || age === '' || height === '' || weight === '' || username === '' || password === '' || password2 === '') {
        document.getElementById('message').innerHTML = '<p>Geben Sie bitte überall gültige Werte ein</p>'
    } else if (password !== password2) {
        document.getElementById('message').innerHTML = '<p>Passwörter stimmen nicht überein</p>'
    } else {

        let account = {
            'firstname': firstName,
            'lastname': lastname,
            'age': age,
            'height': height,
            'weight': weight,
            'goalWeight': goalWeight,
            'accountPicture': accountPicture,
            'username': username,
            'password': password
        }
        let accountData = JSON.parse(localStorage.getItem('accountData')) || [];
        accountData.push(account);
        localStorage.setItem('accountData', JSON.stringify(accountData));

        login()
    }
}

function calculateBMI(height, weight) {
    let heightInMeter = height / 100;
    let bmi = weight / Math.pow(heightInMeter, 2);
    return (Math.floor(bmi * 10)) / 10;
}


function loggedIn() {
    sessionStorage['loggedIn'] = `true`
    let loggedInPerson = parseInt(sessionStorage['loggedInPerson']);

    let accountData = JSON.parse(localStorage.getItem('accountData')) || [];
    document.getElementById('content').innerHTML =
        `

        <div id="logout" onclick="login()"><p>Logout</p></div>
        <div id="profil">
    <div id="profilPicture">
        <img src="../Images/Account/accountPic_${accountData[loggedInPerson].accountPicture}.jpg" alt="">
    </div>

    <div class="column">
        <h3>${accountData[loggedInPerson].firstname} ${accountData[loggedInPerson].lastname}</h3>
        <p>Alter: ${accountData[loggedInPerson].age} Jahre <br>
            Größe: ${accountData[loggedInPerson].height}cm <br>
            Gewicht: ${accountData[loggedInPerson].weight}kg <br>
            BMI: ${calculateBMI(accountData[loggedInPerson].height, accountData[loggedInPerson].weight)}</p>
        </div>

    <div class="column">
        <h3>Deine Ziele</h3>
        <p>Zielgewicht: ${accountData[loggedInPerson].goalWeight}kg</p>
    </div>

</div>

<h2>Deine Pins</h2>

<div id="pins">
    <h3>Rezepte</h3>

    <div id="errorMessageRecipe"></div>

    <div class="swiper savedRecipeSwiper">
        <div class="swiper-wrapper" id="savedRecipeSwiper">

        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-pagination"></div>

    </div>
    <h3>Tipps</h3>
    
    <div id="errorMessageTipps"></div>
    
    <div class="swiper savedTippsSwiper">
        <div class="swiper-wrapper" id="savedTippsSwiper"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-pagination"></div>
        </div>
    </div>

    <h2>Deine Wochenziele</h2>
    <div id="weekPlan">
        <p>Du hast noch keinen Wochenplan erstellt.</p>
        <div class="button" onclick="createWeekPlan()">
            <p>Erstelle hier einen Wochenplan</p>
        </div>
    </div>


<h2>Deine Trainings</h2>

<div class="swiper profilSwiper">
    <div class="swiper-wrapper" id="startedTrainingsSwiper">
        
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-pagination"></div>

</div>
        `
    loadStartedExercises();
    loadSavedTipps();
    loadSavedRecipe();

    initSwiper();
    initializeSwiper();
}

function createWeekPlan() {

    let weekPlan = document.getElementById('weekPlan');
    let weekPlanInputHTML = '';
    localStorage.setItem('weekPlanExists', 'false');
    let options =

        `
        <option value="empty"></option>
        <option value="Armmuskulatur">Armmuskulatur</option>
        <option value="Beinmuskulatur">Beinmuskulatur</option>
        <option value="Brustmuskulatur">Brustmuskulatur</option>
        <option value="Rückenmuskulatur">Rückenmuskulatur</option>
        <option value="Rumpfmuskulatur">Rumpfmuskulatur</option>
        <option value="Schultermuskulatur">Schultermuskulatur</option>
        <option value="Ruhetag">Ruhetag</option>
        `

    weekPlanInputHTML +=
        `
        <div id="weekPlanContent">
        <h4>Wähle für jeden Tag dein Training</h4>
<div class="row">
<label for="monday">Wähle dein Training für Montag:</label>
    <select name="trainingMonday" id="monday">
        ${options}
    </select>
    </div>

<div class="row">
<label for="tuesday">Wähle dein Training für Dienstag:</label>
    <select name="trainingTuesday" id="tuesday">
        ${options}
    </select>
    </div>

<div class="row">
<label for="wednesday">Wähle dein Training für Mittwoch:</label>
    <select name="trainingWednesday" id="wednesday">
        ${options}
    </select>
    </div>

<div class="row">
<label for="thursday">Wähle dein Training für Donnerstag:</label>
    <select name="trainingThursday" id="thursday">
        ${options}
    </select>
    </div>

<div class="row">
<label for="friday">Wähle dein Training für Freitag:</label>
    <select name="trainingFriday" id="friday">
        ${options}
    </select>
    </div>

<div class="row">
<label for="saturday">Wähle dein Training für Samstag:</label>
    <select name="trainingSaturday" id="saturday">
        ${options}
    </select>
    </div>

<div class="row">
<label for="sunday">Wähle dein Training für Sonntag:</label>
    <select name="trainingSunday" id="sunday">
        ${options}
    </select>
    </div>
    <br>
    <br>
    
    <div id="weekPlanMessage"></div>
    <div class="button" onclick="submitWeekPlan()">
            <p>Speichere deinen Wochenplan</p>
        </div>
        </div>
        `
    if (weekPlan !== null) {
        weekPlan.innerHTML = weekPlanInputHTML
    }
}

function submitWeekPlan() {
    let monday = document.getElementById('monday').value;
    let tuesday = document.getElementById('tuesday').value;
    let wednesday = document.getElementById('wednesday').value;
    let thursday = document.getElementById('thursday').value;
    let friday = document.getElementById('friday').value;
    let saturday = document.getElementById('saturday').value;
    let sunday = document.getElementById('sunday').value;

    if (monday !== 'empty' && tuesday !== 'empty' && wednesday !== 'empty' && thursday !== 'empty' && friday !== 'empty' && saturday !== 'empty' && sunday !== 'empty') {
        let weekTraining = [
            [monday, 'notDone'],
            [tuesday, 'notDone'],
            [wednesday, 'notDone'],
            [thursday, 'notDone'],
            [friday, 'notDone'],
            [saturday, 'notDone'],
            [sunday, 'notDone']
        ]
        localStorage.setItem('weekPlan', JSON.stringify(weekTraining));
        localStorage.setItem('weekPlanExists', 'true');


        loadWeekPlan()
    } else {
        document.getElementById('weekPlanMessage').innerHTML = `<p>Wähle bei jedem Feld einen Wert aus</p>`
    }
}

let x = JSON.parse(localStorage['weekPlan'])
if (x !== null) {
    loadWeekPlan()
}

function loadWeekPlan() {
    let weekTraining = JSON.parse(localStorage['weekPlan']);

    let weekPlan = document.getElementById('weekPlan');
    let weekPlanInputHTML = '';
    if (localStorage['weekPlanExists'] === 'true') {
        weekPlanInputHTML +=
            `
            <div id="weekPlanContent">
            <div class="row">
                <h4>Montag:</h4>
                <div class="anotherrow">
                <p>${weekTraining[0][0]}</p>
                <div id="mondayCheckBox" class="weekPlanCheckBox" onclick="completeDay(0,'monday')"></div>
                </div>
            </div>
            
            <div class="row">
                <h4>Dienstag:</h4>
                <div class="anotherrow">
                <p>${weekTraining[1][0]}</p>
                <div id="tuesdayCheckBox" class="weekPlanCheckBox" onclick="completeDay(1,'tuesday')"></div>
                </div>
            </div>
            
            <div class="row">
                <h4>Mittwoch:</h4>
                <div class="anotherrow">
                <p>${weekTraining[2][0]}</p>
                <div id="wednesdayCheckBox" class="weekPlanCheckBox" onclick="completeDay(2,'wednesday')"></div>
                </div>
            </div>
            
            <div class="row">
                <h4>Donnerstag:</h4>
                <div class="anotherrow">
                <p>${weekTraining[3][0]}</p>
                <div id="thursdayCheckBox" class="weekPlanCheckBox" onclick="completeDay(3,'thursday')"></div>
                </div>
            </div>
            
            <div class="row">
                <h4>Freitag:</h4>
                <div class="anotherrow">
                <p>${weekTraining[4][0]}</p>
                <div id="fridayCheckBox" class="weekPlanCheckBox" onclick="completeDay(4,'friday')"></div>
                </div>
            </div>
            
            <div class="row">
                <h4>Samstag:</h4>
                <div class="anotherrow">
                <p>${weekTraining[5][0]}</p>
                <div id="saturdayCheckBox" class="weekPlanCheckBox" onclick="completeDay(5,'saturday')"></div>
                </div>
            </div>
            
            <div class="row">
                <h4>Sonntag:</h4>
                <div class="anotherrow">
                <p>${weekTraining[6][0]}</p>
                <div id="sundayCheckBox" class="weekPlanCheckBox" onclick="completeDay(6,'sunday')"></div>
                </div>
            </div>
            
            <div class="button" onclick="createWeekPlan()">
            <p>Erstelle einen neuen Wochenplan</p>
        </div>
        </div>
            `
        if (weekPlan !== null) {
            weekPlan.innerHTML = weekPlanInputHTML
        }

        for (let i = 0; i < weekTraining.length; i++) {
            if (weekTraining[i][1] === 'done') {
                let checkBox = document.getElementsByClassName('weekPlanCheckBox')
                checkBox[i].style.backgroundImage = 'url(../Images/icons8-häkchen-64.png)';
            }
        }

        checkWeekPlan()
    } else {
        createWeekPlan()
    }
}

function completeDay(index, weekday) {
    let weekTraining = JSON.parse(localStorage['weekPlan']);
    weekTraining[index][1] = 'done';
    localStorage.setItem('weekPlan', JSON.stringify(weekTraining));
    document.getElementById(`${weekday}CheckBox`).style.backgroundImage = 'url(../Images/icons8-häkchen-64.png)'
    document.getElementById(`${weekday}CheckBox`).removeAttribute('onclick')
    document.getElementById(`${weekday}CheckBox`).setAttribute('onclick', `uncompleteDay(${index},'${weekday}')`)

    checkWeekPlan();
}

function uncompleteDay(index, weekday) {
    let weekTraining = JSON.parse(localStorage['weekPlan']);
    weekTraining[index][1] = 'undone';
    localStorage.setItem('weekPlan', JSON.stringify(weekTraining));
    document.getElementById(`${weekday}CheckBox`).style.backgroundImage = 'none'
    document.getElementById(`${weekday}CheckBox`).removeAttribute('onclick')
    document.getElementById(`${weekday}CheckBox`).setAttribute('onclick', `completeDay(${index},'${weekday}')`)
}

function checkWeekPlan() {
    let checkCounter = 0;
    let weekTraining = JSON.parse(localStorage['weekPlan']);
    for (let i = 0; i < weekTraining.length; i++) {
        if (weekTraining[i][1] === 'done') {
            checkCounter++;
        }
    }
    if (checkCounter === 7) {
        let weekPlan = document.getElementById('weekPlan');
        weekPlan.innerHTML = `<h3>Gratuliere! Du hast dein Wochenziel erreicht!</h3>
                                <div class="button" onclick="createWeekPlan()">
                                <p>Erstelle einen neuen Wochenplan`;

    }
}

loadSavedRecipe()

function loadSavedRecipe() {
    let swiperSlideRecipe = document.getElementById('savedRecipeSwiper')

    if (sessionStorage['loggedIn'] === 'true') {

        let savedRecipe = JSON.parse(localStorage.getItem('savedRecipes')) || [];
        let recipeHTML = ''

        if (savedRecipe.length === 0) {
            document.getElementById('errorMessageRecipe').innerHTML = '<p style="text-align: center">Du hast noch keine angepinnten Rezepte</p>'
            return
        }
        for (let i = 0; i < savedRecipe.length; i++) {
            recipeHTML += `
            <div class="swiper-slide swiperSlideRecipe" >
                <div class="pinedRecipeBox" onclick="showRecipe(${savedRecipe[i]})">
                    <h4>${recipes[savedRecipe[i]].name}</h4>
                    <img src="../${recipes[savedRecipe[i]].imgPath}" alt="">
                </div>
            </div>
            `
            swiperSlideRecipe.innerHTML = recipeHTML
        }
    }
}

function showRecipe(index) {
    sessionStorage['loadRecipe'] = `${index}`
    sessionStorage['profil'] = `true`
    location.href = './RezeptDetail.html'
}

loadSavedTipps();

function loadSavedTipps() {
    let swiperSlideTipps = document.getElementById('savedTippsSwiper')

    if (sessionStorage['loggedIn'] === 'true') {

        let savedTipps = JSON.parse(localStorage.getItem('savedTipps')) || [];
        let tippsHTML = ''


        if (savedTipps.length === 0) {
            document.getElementById('errorMessageTipps').innerHTML = '<p style="text-align: center">Du hast noch keine angepinnten Rezepte</p>'
            return
        }
        for (let i = 0; i < savedTipps.length; i++) {
            tippsHTML += `
            <div class="swiper-slide swiperSlideTipps">
                <div class="pinedTippBox">
                    <h4>${tipps[savedTipps[i]].title}</h4>
                    <div class="button" onclick="showTipp(${savedTipps[i]})">
                            <p>Lese weiter</p>
                    </div>
                </div>
            </div>
            `
            swiperSlideTipps.innerHTML = tippsHTML
        }
    }
}

function showTipp(index) {
    sessionStorage['loadTipp'] = `true`
    sessionStorage['showTipp'] = `${index}`
    location.href = 'Gesundheitstipps.html'
}

loadStartedExercises();

function loadStartedExercises() {
    let trainingsSwiper = document.getElementById('startedTrainingsSwiper');

    if (sessionStorage['loggedIn'] === 'true') {

        let startedExerciseHTML = '';
        let startedExercise = JSON.parse(localStorage.getItem('startedExercise')) || [];

        if (startedExercise.length === 0) {
            trainingsSwiper.innerHTML = '<p>Du hast noch keine Trainings angefangen</p>';
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
                        <div class="button" onclick="showExercisesDetails(${startedExercise[i]})">
                            <p>Starte dein Training</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        }

        trainingsSwiper.innerHTML = startedExerciseHTML;
    }
}

function showExercisesDetails(index) {
    sessionStorage['loadExercise'] = `${index}`
    sessionStorage['profil'] = `true`
    location.href = './TrainingDetail.html'
}

function initSwiper() {
    //Slideshows

    var swiper = new Swiper(".profilSwiper", {
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
}

function initializeSwiper() {
    let slidesPerSwiper;

    if (window.innerWidth <= 767) {
        slidesPerSwiper = 2;
    } else {
        slidesPerSwiper = 3;
    }

    var swiper2 = new Swiper(".savedRecipeSwiper", {
        slidesPerView: slidesPerSwiper,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    var swiper3 = new Swiper(".savedTippsSwiper", {
        slidesPerView: slidesPerSwiper,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
}

initializeSwiper();
window.addEventListener('resize', () => {
    initializeSwiper();
});