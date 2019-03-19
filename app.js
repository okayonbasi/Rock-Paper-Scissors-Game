let userScore=0;
let computerScore=0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber  = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
    
}

function  win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord(computerChoice)} ${smallCompWord}. You Win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() =>
        document.getElementById(userChoice).classList.remove('green-glow')
    ,1000);

}
function  lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} loses ${convertToWord(computerChoice)} ${smallCompWord}. You Win!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(()=>
        document.getElementById(userChoice).classList.remove('red-glow')
    ,1000);
}
function  draw(userChoice, computerChoice) {
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} equals ${convertToWord(computerChoice)} ${smallCompWord}. You Win!`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() =>
        document.getElementById(userChoice).classList.remove('gray-glow')
    ,1000);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "ss":
        case "rr":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {

    rock_div.addEventListener('click', () =>
        game("r")
    )

    paper_div.addEventListener('click',  () =>
        game("p")
    )

    scissors_div.addEventListener('click',()=>
        game("s")
    )
}

main();