// wait for the DOM to finish loading before running the game.
// get the button element and add event listeners to them.

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener('click', function(){
            if(this.getAttribute('data-type') === 'submit'){
                alert('You clicked the submit!')
            }else{
                let gameType = this.getAttribute('data-type');
                alert(`You've selected the ${gameType} game`)
            }
        })
    }
})

function runGame(){

}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}

function displayDivisionQuestion(){

}