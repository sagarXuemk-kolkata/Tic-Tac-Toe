let boxes = document.querySelectorAll(".box"); 
let resetBtn = document.querySelector("#reset-button"); 
let newGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let message = document.querySelector("#msg");


let turnoO = true; // track playerX or player

// winning array data 
const winPatterns = [
    [0, 1, 2], 
    [0, 3, 6], 
    [0, 4, 8],
    [1, 4, 7], 
    [2, 5, 8], 
    [2, 4, 6], 
    [3, 4, 5], 
    [6, 7, 8]
]

// reset the game 
const resetGame = () => {
    // console.log("Button was clicked");
    turnoO = true;
    enableBtns();
    // hide the message container
    msgcontainer.classList.add("hide");
}

// add eventleationer to permorn some task
boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        // console.log("Box was click");
        if(turnoO) {
            box.innerText = "O";
            turnoO=false;
        } else {
            box.innerText = "X";
            turnoO=true;
        }
        // to disable the button
        box.disabled = true;

        // check any player win the match or not
        checkWinner();
    })
})

const showWinner = (winner) => {
    message.innerText = `Congratulation, Winner is: ${winner}`;
    // remove the hide class
    msgcontainer.classList.remove("hide");
    // disable all the buttens
    disableBtns();
}

// disable all the button after win the game
const disableBtns = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

// enable all the button when new game start
const enableBtns = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const checkWinner = () => {
    for(let pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText, 
        //     boxes[pattern[1]].innerText, 
        //     boxes[pattern[2]].innerText
        // );

        // access each box
        let pos1Val = boxes[pattern[0]].innerText; 
        let pos2Val = boxes[pattern[1]].innerText; 
        let pos3Val = boxes[pattern[2]].innerText; 

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val == pos2Val && pos2Val == pos3Val) {
                // show winner function
                showWinner(pos1Val);
            }
        }
    }
}

// reset Game
newGameBtn.addEventListener("click", resetGame);

// resetButton
// don't use '()' because when button was click at that time this function execute
// if we want function execute immedeatly then use '();
resetBtn.addEventListener("click", resetGame);