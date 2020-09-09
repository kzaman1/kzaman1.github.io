var mangojuices=0;

//Juice Press Upgrade Variables
var upJuicePressCount = 0;
var upJuicePressCost = 10;
var upJuicePressRate = 1;

//Juice Machine Upgrade Variables
var upJuiceMachineCount = 0;
var upJuiceMachineCost = 20;
var upJuiceMachineRate = 1000;

// This function updates the mango juices made so you don't have to copy / paste the same code over and over again //
function updateMangoJuiceDisplay(){
  document.getElementById('mangojuiceCount').innerHTML = "Mango Juices Made: " + mangojuices.toLocaleString(); //.toLocaleString will add commas to large numbers
}

// This function will manually add mango juices.
function make(){
  mangojuices++; // Same as 'mangojuices = mangojuices + 1' or 'mangojuices +=1'
  updateMangoJuiceDisplay();
}

function buyJuicePress() {
  if(mangojuices >= upJuicePressCost) {
    upJuicePressCount++;
    mangojuices = mangojuices - upJuicePressCost;

    document.getElementById('JuicePressCount').innerHTML = upJuicePressCount;
    updateMangoJuiceDisplay();
  }
}

function buyJuiceMachine() {
  if(mangojuices >= upJuiceMachineCost) {
    upJuiceMachineCount++;
    mangojuices = mangojuices - upJuiceMachineCost;

    document.getElementById('JuiceMachineCount').innerHTML = upJuiceMachineCount;
    updateMangoJuiceDisplay()
  }
}

window.setInterval(mainLoop, 1000);

// This is the main loop. This is where a lot of the action happens //
function mainLoop(){
  mangojuices = mangojuices + (upJuicePressCount * upJuicePressRate) + (upJuiceMachineCount * upJuiceMachineRate);
  updateMangoJuiceDisplay()
}
