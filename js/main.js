var mangojuices=0;

//Juice Press Upgrade Variables
var upJuicePressCount = 0;
var upJuicePressCost = 10;
var upJuicePressRate = 1;

//Juice Machine Upgrade Variables
var upJuiceMachineCount = 0;
var upJuiceMachineCost = 20;
var upJuiceMachineRate = 10;

//Juice Bot Upgrade Variables
var upJuiceBotCount = 0;
var upJuiceBotCost = 100;
var upJuiceBotRate = 100;

//Juice Drone Upgrade Variables
var upJuiceDroneCount = 0;
var upJuiceDroneCost = 1000;
var upJuiceDroneRate = 1000;

//Juice Factory Upgrade Variables
var upJuiceFactoryCount = 0;
var upJuiceFactoryCost = 1000;
var upJuiceFactoryRate = 1000;

// This function updates the mango juices made so you don't have to copy / paste the same code over and over again //
function updateMangoJuiceDisplay(){
  document.getElementById('mangojuiceCount').innerHTML = "Mango Juices Made: " + mangojuices.toLocaleString(); //.toLocaleString will add commas to large numbers
}

// This function will manually add mango juices.
function make(){
  mangojuices++; // Same as 'mangojuices = mangojuices + 1' or 'mangojuices +=1'
  updateMangoJuiceDisplay();
}

// Upgrade Functions

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

function buyJuiceBot() {
  if(mangojuices >= upJuiceBotCost) {
    upJuiceBotCount++;
    mangojuices = mangojuices - upJuiceBotCost;

    document.getElementById('JuiceBotCount').innerHTML = upJuiceBotCount;
    updateMangoJuiceDisplay()
  }
}

function buyJuiceDrone() {
  if(mangojuices >= upJuiceDroneCost) {
    upJuiceDroneCount++;
    mangojuices = mangojuices - upJuiceDroneCost;

    document.getElementById('JuiceDroneCount').innerHTML = upJuiceDroneCount;
    updateMangoJuiceDisplay()
  }
}

function buyJuiceFactory() {
  if(mangojuices >= upJuiceFactoryCost) {
    upJuiceFactoryCount++;
    mangojuices = mangojuices - upJuiceFactoryCost;

    document.getElementById('JuiceFactoryCount').innerHTML = upJuiceFactoryCount;
    updateMangoJuiceDisplay()
  }
}


// This is the main loop. This is where a lot of the action happens //
window.setInterval(mainLoop, 1000);

function mainLoop(){
  mangojuices = mangojuices + (upJuicePressCount * upJuicePressRate) + (upJuiceMachineCount * upJuiceMachineRate) + (upJuiceBotCount * upJuiceBotRate) + (upJuiceDroneCount * upJuiceDroneRate) + (upJuiceFactoryCount * upJuiceFactoryCount);
  updateMangoJuiceDisplay()
}
