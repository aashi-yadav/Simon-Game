let gameSeq=[];
let userSeq=[];
let started=false;
let level=0; 
let highestScore=0;
let h2=document.querySelector("h2")
let btnAll=document.querySelectorAll(".btn")
let btns=["yellow","red","green","purple"]
document.addEventListener("keypress",function (){
if(started==false){
    console.log("game is started");
    started=true;
    levelUp();
}
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },300)

}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },300)

}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(randBtn)
    
}

function checkAns(idx){
    if(level>highestScore){
        highestScore=level;
        // document.createElement("P");
        // p.innerText=`Highest Score: ${highestScore}`;

    }
    
    if(userSeq[idx]===gameSeq[idx]){
        if (userSeq.length==gameSeq.length){
        setTimeout(levelUp(),1000);
        }
        // console.log("same value")
    }else{
        h2.innerHTML=`Game Over! Your score was <b> ${level}</b> 
        <br> Highest Score: ${highestScore} 
        <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="pink";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}
function btnPress(){
    // console.log(this)
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq);
    checkAns(userSeq.length-1);
}
for(btn of btnAll){
    btn.addEventListener("click",btnPress)
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}













/* chat gpt way try later******************/
// let gameSeq = [];
// let userSeq = [];
// let started = false;
// let level = 0;



// document.addEventListener("keypress", function () {
//   if (!started) {
//     console.log("Game is starting");
//     started = true;
//     nextSequence();
//   }
// });

// function nextSequence() {
//   userSeq = [];
//   level++;
//   console.log("Level: " + level);

//   // Generate a random number between 0 and 3 (representing four possible choices)
//   const randomNumber = Math.floor(Math.random() * 4);
//   const choices = ["red", "blue", "green", "yellow"];
//   const randomChoice = choices[randomNumber];

//   // Add the randomChoice to the gameSeq array
//   gameSeq.push(randomChoice);

//   // Play the sequence to the user (e.g., by flashing colors)
//   // Implement the logic to show the sequence to the user (for example, flashing colored elements)
//   // For demonstration purposes, let's just log the gameSeq
//   console.log("Game Sequence: " + gameSeq);
// }

// function compareSeq(gameSeq,userSeq){
//     if(userSeq.length==gameSeq.length){
//         for(let i=0;i<gameSeq.length;i++){
//             for(el of userSeq){
//                 if(ele==el){
//                     return true;
//                     nextSequence();
//                 }else{
//                     return false;
//                     console.log("game is over")
//                 }
//             }
//         }
//     }
// }
