// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var pattern = [];
var mistakes = 0;


//generates a random array of 8 intergers from 1-5
function randomPattern(){
  var x = 0;
  var max = 6;
  var min = 1;
  while (x < 8) {
    pattern.push(Math.floor(Math.random() * (max - min) + min));
    x ++;
  }
  console.log(pattern);
}

function startGame(){
    //initialize game variables
    mistakes = 0;
    pattern = [];
    clueHoldTime = 1000;
    progress = 0;
    gamePlaying = true;
    randomPattern();
  
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

const freqMap = {
  1: 220,
  2: 246,
  3: 277,
  4: 293,
  5: 329
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)


function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    clueHoldTime -= 23;
  }
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // add game logic here
  
    if(pattern[guessCounter] == btn){
      //correct
      if(guessCounter == progress){
        if(progress == pattern.length - 1){
          //gameover, won
          winGame();
        }else{
          //correct, next turn
          progress++;
          playClueSequence();
        }
      }else{
        //next guess
        guessCounter++;
      }
    }else{
      if (mistakes == 2){
        //gameover, lost
        loseGame();
      }else{
        mistakes ++;
        alert("Uh Oh! You made a mistake! You have " + (3-mistakes) + " chances left.");
        playClueSequence();
        console.log("mistake number: " + mistakes);
      }
    }
}