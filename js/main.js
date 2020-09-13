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
var upJuiceFactoryCost = 10000;
var upJuiceFactoryRate = 10000;

//Juice Sea Station Upgrade Variables
var upJuiceSeaStationCount = 0;
var upJuiceSeaStationCost = 100000;
var upJuiceSeaStationRate = 100000;

//Juice Space Station Upgrade Variables
var upJuiceSpaceStationCount = 0;
var upJuiceSpaceStationCost = 1000000;
var upJuiceSpaceStationRate = 1000000;

//Juice Particle Accelerator Upgrade Variables
var upJuiceParticleAcceleratorCount = 0;
var upJuiceParticleAcceleratorCost = 1000000;
var upJuiceParticleAcceleratorRate = 1000000;


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

function buyJuiceSeaStation() {
  if(mangojuices >= upJuiceSeaStationCost) {
    upJuiceSeaStationCount++;
    mangojuices = mangojuices - upJuiceSeaStationCost;

    document.getElementById('JuiceSeaStationCount').innerHTML = upJuiceSeaStationCount;
    updateMangoJuiceDisplay()
  }
}

function buyJuiceSpaceStation() {
  if(mangojuices >= upJuiceSpaceStationCost) {
    upJuiceSpaceStationCount++;
    mangojuices = mangojuices - upJuiceSpaceStationCost;

    document.getElementById('JuiceSpaceStationCount').innerHTML = upJuiceSpaceStationCount;
    updateMangoJuiceDisplay()
  }
}

function buyJuiceParticleAccelerator() {
  if(mangojuices >= upJuiceParticleAcceleratorCost) {
    upJuiceParticleAcceleratorCount++;
    mangojuices = mangojuices - upJuiceParticleAcceleratorCost;

    document.getElementById('JuiceParticleAcceleratorCount').innerHTML = upJuiceParticleAcceleratorCount;
    updateMangoJuiceDisplay()
  }
}


// This is the main loop. This is where a lot of the action happens //
window.setInterval(mainLoop, 1000);

function mainLoop(){
  mangojuices = mangojuices + (upJuicePressCount * upJuicePressRate) + (upJuiceMachineCount * upJuiceMachineRate) + (upJuiceBotCount * upJuiceBotRate) + (upJuiceDroneCount * upJuiceDroneRate) + (upJuiceFactoryCount * upJuiceFactoryRate) + (upJuiceSeaStationCount * upJuiceSeaStationRate) + (upJuiceSpaceStationCount * upJuiceSpaceStationRate) + (upJuiceParticleAcceleratorCount * upJuiceParticleAcceleratorRate);
  updateMangoJuiceDisplay()
}
