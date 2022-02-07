//No reset, start button
const choose = document.querySelectorAll(".choose-rps")
const user = document.querySelector("#user")
const comp = document.querySelector("#comp")

const whoWin = document.querySelector("#whoWins")
//idk what name i should chosen

let userScore = 0
let compScore = 0

function botRPS(){
    let arr = Math.floor(Math.random()*3)
    return choose[arr].id
}
choose.forEach(ele => {
    ele.addEventListener("click",  ()=>{
        let userChoosen = ele.id
        let compChoosen = botRPS()
        
        if(userChoosen === "rock" && compChoosen === "paper"){
            whoWin.textContent = "Rocks get cover by paper. You lose"
            compScore++
            comp.innerHTML = compScore
        }else if(userChoosen === "rock" && compChoosen === "scissors"){
            whoWin.textContent = "Rocks smash scissors. You win!"
            userScore++
            user.innerHTML = userScore
        }else if(userChoosen === "paper" && compChoosen === "rock"){
            whoWin.textContent = "Paper cover the Rock. You win!"
            userScore++
            user.innerHTML = userScore
        }else if(userChoosen === "paper" && compChoosen === "scissors"){
            whoWin.textContent = "Paper got chop chop by scissors. You lose"
            compScore++
            comp.innerHTML = compScore
        }else if(userChoosen === "scissors" && compChoosen === "paper"){
            whoWin.textContent = "Rocks get cover by paper. You lose"
            userScore++
            user.innerHTML = userScore
        }else if(userChoosen === "scissors" && compChoosen === "rock"){
            whoWin.textContent = "scissors got smash by rock. damn you lose"
            compScore++
            comp.innerHTML = compScore
        }else if(userChoosen === compChoosen){
            whoWin.textContent = "Ho! No one is wining😑"
        }
    })
})