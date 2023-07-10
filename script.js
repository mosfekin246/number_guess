let inputValue = ""
let arr = []
let correctAnswer = Math.round(Math.random(0,1)*10)
document.querySelector('#input').addEventListener('change',getInput)
document.querySelector('#number').addEventListener("submit", numbers)
document.querySelector('#reset').addEventListener("click", gameStatus)

function getInput(){
    inputValue = input.value
}

function numbers(e){
    e.preventDefault()
    if(input.value == ""){
        document.querySelector('#input').disabled = true;
    }
    else{
        input.value = ""
        arr.push(inputValue)
        checkRound()
    }
}
function checkRound(){
    if(arr.length<3){
        compare()
    }
    else{
        reset()
    }
}
function compare(){
    if(correctAnswer>inputValue){
        window.alert(`Hint: The number is greater \nchances left: ${3-arr.length}`)
    }
    else if(correctAnswer<inputValue){
        window.alert(`Hint: The number is smaller \nchances left: ${3-arr.length}`)
    }
    else{
        window.alert(`Congratulations!!!`)
        arr = []
    }
}

function reset(){
    window.alert(`lose!!! The number was ${correctAnswer}`)
    document.querySelector('#input').disabled = true;
    arr = []
    // showAlert()
}

function gameStatus(){
    if(arr.length == 0){
        document.querySelector('#input').disabled = true;
        inputValue = ""
        input.value = ""
        showAlert()
    }
    else{
        continueGame()
    }
}

function showAlert(){
    restart = prompt(`Do you want to start new game? \na. yes \nb. no`)
    if(restart == 'b'){
        quitGame()
    }
    else if(restart == 'a'){
        newgame()
    }
    else{
        window.alert("Wrong option choosen.......")
        showAlert()
    }
}
function newgame(){
    arr = []
    correctAnswer = Math.round(Math.random(0,1)*1000)+1
    document.querySelector('#input').disabled = false
    getInput()
}

//ratul
function continueGame(){
    resume = prompt(`Do you want to continue? \na. yes \nb. no`)
    if(resume == 'a'){
        getInput()
    }
    else if(resume == 'b'){
        quitGame()
    }
    else{
        window.alert("Wrong option choosen.......")
        continueGame()
    }

}
function quitGame(){
    console.log("in quit")
    document.querySelector('#input').disabled = true;
    arr = []
}


//reset no erpor yes dile kaj kore nah
