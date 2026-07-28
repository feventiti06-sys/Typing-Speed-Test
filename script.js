const textToType = document.getElementById("text-to-type").innerText;
const userInput = document.getElementById("user-input");
const timeDisplay = document.getElementById("time");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");

let startTime;
let timer;
let finished = false;

userInput.addEventListener("input", () => {
  if(finished) return;

  const typed = userInput.value;
  
  
  if(!startTime) startTime = new Date();
  
  
  let correctChars = 0;
  for(let i=0;i<typed.length;i++){
    if(typed[i] === textToType[i]) correctChars++;
  }
  const accuracy = Math.floor((correctChars / textToType.length) * 100);
  accuracyDisplay.innerText = accuracy;

  
  const wordsTyped = typed.split(" ").length;
  const elapsed = (new Date() - startTime)/1000; // in seconds
  timeDisplay.innerText = Math.floor(elapsed);
  const wpm = Math.floor((wordsTyped / elapsed) * 60);
  wpmDisplay.innerText = wpm;


  if(typed === textToType){
    finished = true;
    clearInterval(timer);
    alert(Finished! WPM: ${wpm}, Accuracy: ${accuracy}%);
  }
});

function resetTest(){
  userInput.value = "";
  startTime = null;
  finished = false;
  timeDisplay.innerText = "0";
  wpmDisplay.innerText = "0";
  accuracyDisplay.innerText = "0";
}