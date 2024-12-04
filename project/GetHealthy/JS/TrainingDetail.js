let index = parseInt(sessionStorage['loadExercise'] || '')
let exerciseBox = document.getElementById('exerciseBox')
let exerciseHTML = ''
let counter = 0;

if (sessionStorage['profil'] === 'true') {
    document.getElementById('returnLink').href = './Profil.html';
}

loadExercise()

function loadExercise() {
    document.getElementById('title').innerHTML = `GetHealthy - Trainingsplan ${exercises[index].title}`
    let exerciseList = '';
    for (let i = 0; i < exercises[index].exercises.length; i++) {
        exerciseList +=
            `
            <li>${exercises[index].exercises[i].repetitions} ${exercises[index].exercises[i].name}</li>
            `
    }
    exerciseHTML =
        `
        <h2>${exercises[index].title}</h2>
                <div class="row">
                        <img src="../Images/Training%20Muskelgruppen/Muskelgruppen-Funktion-und-Training-–-${exercises[index].title}.jpg" alt="">
                        <div class="column">
                                <ul>
                                    ${exerciseList}
                                </ul>

                                <div class="button" onclick="startExercises()">
                                        <p>Starte dein Training</p>
                                </div>
                        </div>
                </div>
        `
    exerciseBox.innerHTML = exerciseHTML
}

function startExercises() {
    if (counter < exercises[index].exercises.length) {
        exerciseBox.innerHTML = ''

        exerciseHTML =
            `
        <div id="startExerciseBox">
        <h2>${exercises[index].exercises[counter].name}</h2>
                
         <div class="column">
             <img src="../${exercises[index].exercises[counter].imgPath[0]}" alt="${exercises[index].exercises[counter].name}_Image">
             <p>${exercises[index].exercises[counter].repetitions}</p>
             <p>${exercises[index].exercises[counter].description}</p>
         `

        if (counter < exercises[index].exercises.length - 1) {
            exerciseHTML +=
                `
                <div class="button" onclick="startExercises()">
                    <p>Nächste Übung</p>
                </div>
                `
        } else {
            exerciseHTML +=
                `
                <div class="button" onclick="endExercise()">
                    <p>Beende dein Training</p>
                </div>
                `
        }
        exerciseHTML += '</div></div>'

        exerciseBox.innerHTML = exerciseHTML
        counter++;
    }
}

function endExercise() {
    exerciseHTML =
        `
        <h2>${exercises[index].title}</h2>
                <div class="row">
                        <img src="../Images/Training%20Muskelgruppen/Muskelgruppen-Funktion-und-Training-–-${exercises[index].title}.jpg" alt="">
                        <div class="column">
                           <p>Du hast es geschafft</p>
                           <p>Ende deines Trainings</p>
                        </div>
                </div>
        `
    exerciseBox.innerHTML = exerciseHTML

    let startedExercise = JSON.parse(localStorage.getItem('startedExercise')) || [];

    if (!startedExercise.includes(index)) {
        startedExercise.push(index);
        localStorage.setItem('startedExercise', JSON.stringify(startedExercise));
    }
}