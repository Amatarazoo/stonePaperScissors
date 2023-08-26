// console.log("Hello World");

function playRound(playSelection,computerSelection){
    if(playSelection.toLowerCase() == computerSelection.toLowerCase()){
        console.log('Both choices are same');
    }else if(playSelection.toLowerCase()== "rock" && computerSelection.toLowerCase() == "scissors"){
        console.log('You Win! '+playSelection+' beats ' +computerSelection+'.');
    }else if(playSelection.toLowerCase()== "scissors" && computerSelection.toLowerCase() == "paper"){
        console.log('You Win! '+playSelection+' beats ' +computerSelection+'.');
    }else if(playSelection.toLowerCase()== "paper" && computerSelection.toLowerCase() == "stone"){
        console.log('You Win! '+playSelection+' beats ' +computerSelection+'.');
    }else {
        console.log('You Lose! '+computerSelection+' beats '+playSelection+'.');
    }
}
const playSelection= "rock";
const computerSelection = getComputerChoice();
function getComputerChoice(){
    let arr=['Rock','Scissors','Paper'];
    choice=arr[Math.floor(Math.random()*arr.length)];
    return choice;
}
 console.log(playRound(playSelection,computerSelection));