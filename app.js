let userScore = 0;
let compscore = 0;
const userScore_WIN = document.getElementById("user-score");
const compScore_WIN = document.getElementById("comp-score");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("div-rock");
const paper_div = document.getElementById("div-paper");
const scissor_div = document.getElementById("div-scissor");
const userchose = document.querySelector(".U>h3");
const compchose = document.querySelector(".C>h3");

function getComputerChoice(){
    const choices = ['Rock', 'Paper' ,'Scissor'];
    const randomNumber = (Math.floor(Math.random() *3));
    return choices[randomNumber];
}

function display(user , Computer){
    userchose.innerHTML = "You Chose<br>" + user;
    compchose.innerHTML = "Comp Chose<br>" + Computer;
}

function win(user , Computer){
    userScore++;
    userScore_WIN.innerHTML = userScore;
    compScore_WIN.innerHTML = compscore;
    result_p.innerHTML = user + " beats " + Computer + ". You win! ";
}
function lose(user , Computer){
    compscore++;
    compScore_WIN.innerHTML = compscore;
    result_p.innerHTML = user + " Lost to " + Computer + ". You Lost! ";
}

function draw(){

    result_p.innerHTML = "Its a Draw!";
}

function game(userChoice){
    const ComputerChoice = getComputerChoice();

    display(userChoice, ComputerChoice);

    switch(userChoice + ComputerChoice){
        case "PaperRock":
        case "RockScissor":
        case "ScissorPaper":
                win(userChoice, ComputerChoice);
                break;

        case "RockPaper":
        case "PaperScissor":
        case "ScissorRock":
                lose(userChoice, ComputerChoice);
                break;

        case "RockRock":
        case "PaperPaper":
        case "ScissorScissor":
                draw(userChoice, ComputerChoice);
                break;
    }
}


function main(){
    rock_div.addEventListener('click', function (){
    game("Rock");
    })
    paper_div.addEventListener('click', function (){
    game("Paper");
    })
    scissor_div.addEventListener('click', function (){
    game("Scissor");
    })
}

main();

