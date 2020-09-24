var mangojuices=0;

//Increase store prices with each click
var costMultiplier = 1.15;

//Juice Press Upgrade Variables
var upJuicePressCount = 0;
var upJuicePressCost = 10;
var upJuicePressRate = 1;
var upJuicePressBaseCost = 10;

//Juice Machine Upgrade Variables
var upJuiceMachineCount = 0;
var upJuiceMachineCost = 20;
var upJuiceMachineRate = 20;
var upJuiceMachineBaseCost = 20;

//Juice Bot Upgrade Variables
var upJuiceBotCount = 0;
var upJuiceBotCost = 100;
var upJuiceBotRate = 100;
var upJuiceBotBaseCost = 100;

//Juice Drone Upgrade Variables
var upJuiceDroneCount = 0;
var upJuiceDroneCost = 1000;
var upJuiceDroneRate = 1000;
var upJuiceDroneBaseCost = 1000;

//Juice Factory Upgrade Variables
var upJuiceFactoryCount = 0;
var upJuiceFactoryCost = 10000;
var upJuiceFactoryRate = 10000;
var upJuiceFactoryBaseCost = 10000;

//Juice Sea Station Upgrade Variables
var upJuiceSeaStationCount = 0;
var upJuiceSeaStationCost = 100000;
var upJuiceSeaStationRate = 100000;
var upJuiceSeaStationBaseCost = 100000;

//Juice Space Station Upgrade Variables
var upJuiceSpaceStationCount = 0;
var upJuiceSpaceStationCost = 1000000;
var upJuiceSpaceStationRate = 1000000;
var upJuiceSpaceStationBaseCost = 1000000;

//Juice Particle Accelerator Upgrade Variables
var upJuiceParticleAcceleratorCount = 0;
var upJuiceParticleAcceleratorCost = 1000000;
var upJuiceParticleAcceleratorRate = 1000000;
var upJuiceParticleAcceleratorBaseCost = 1000000;


// This function updates the mango juices made so you don't have to copy / paste the same code over and over again //
function updateMangoJuiceDisplay(){
  document.getElementById('mangojuiceCount').innerHTML = "Mango Juice Money: $" + mangojuices.toLocaleString(); //.toLocaleString will add commas to large numbers
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

    upJuicePressCost = updateItemCost(upJuicePressBaseCost, upJuicePressCount);

    document.getElementById('JuicePressCount').innerHTML = upJuicePressCount.toLocaleString();
    document.getElementById('upJuicePressCost').innerHTML = upJuicePressCost.toLocaleString();
    updateMangoJuiceDisplay();
  }
}

function buyJuiceMachine() {
  if(mangojuices >= upJuiceMachineCost) {
    upJuiceMachineCount++;
    mangojuices = mangojuices - upJuiceMachineCost;

    upJuiceMachineCost = updateItemCost(upJuiceMachineBaseCost, upJuiceMachineCount);

    document.getElementById('JuiceMachineCount').innerHTML = upJuiceMachineCount.toLocaleString();
    document.getElementById('upJuiceMachineCost').innerHTML = upJuiceMachineCost.toLocaleString();
    updateMangoJuiceDisplay();
  }
}

function buyJuiceBot() {
  if(mangojuices >= upJuiceBotCost) {
    upJuiceBotCount++;
    mangojuices = mangojuices - upJuiceBotCost;

    upJuiceBotCost = updateItemCost(upJuiceBotBaseCost, upJuiceBotCount);

    document.getElementById('JuiceBotCount').innerHTML = upJuiceBotCount.toLocaleString();
    document.getElementById('upJuiceBotCost').innerHTML = upJuiceBotCost.toLocaleString();
    updateMangoJuiceDisplay();
  }
}

function buyJuiceDrone() {
  if(mangojuices >= upJuiceDroneCost) {
    upJuiceDroneCount++;
    mangojuices = mangojuices - upJuiceDroneCost;

    upJuiceDroneCost = updateItemCost(upJuiceDroneBaseCost, upJuiceDroneCount);

    document.getElementById('JuiceDroneCount').innerHTML = upJuiceDroneCount.toLocaleString();
    document.getElementById('upJuiceDroneCost').innerHTML = upJuiceDroneCost.toLocaleString();
    updateMangoJuiceDisplay();
  }
}

function buyJuiceFactory() {
  if(mangojuices >= upJuiceFactoryCost) {
    upJuiceFactoryCount++;
    mangojuices = mangojuices - upJuiceFactoryCost;

    upJuiceFactoryCost = updateItemCost(upJuiceFactoryBaseCost, upJuiceFactoryCount);


    document.getElementById('JuiceFactoryCount').innerHTML = upJuiceFactoryCount;
    document.getElementById('upJuiceFactoryCost').innerHTML = upJuiceFactoryCost.toLocaleString();

    updateMangoJuiceDisplay();
  }
}

function buyJuiceSeaStation() {
  if(mangojuices >= upJuiceSeaStationCost) {
    upJuiceSeaStationCount++;
    mangojuices = mangojuices - upJuiceSeaStationCost;

    upJuiceSeaStationCost = updateItemCost(upJuiceSeaStationBaseCost, upJuiceSeaStationCount);

    document.getElementById('JuiceSeaStationCount').innerHTML = upJuiceSeaStationCount.toLocaleString();
    document.getElementById('upJuiceSeaStationCost').innerHTML = upJuiceSeaStationCost.toLocaleString();
    updateMangoJuiceDisplay();
  }
}

function buyJuiceSpaceStation() {
  if(mangojuices >= upJuiceSpaceStationCost) {
    upJuiceSpaceStationCount++;
    mangojuices = mangojuices - upJuiceSpaceStationCost;

    upJuiceSpaceStationCost = updateItemCost(upJuiceSpaceStationBaseCost, upJuiceSpaceStationCount);

    document.getElementById('JuiceSpaceStationCount').innerHTML = upJuiceSpaceStationCount.toLocaleString();
    document.getElementById('upJuiceSpaceStationCost').innerHTML = upJuiceSpaceStationCost.toLocaleString();
    updateMangoJuiceDisplay();
  }
}

function buyJuiceParticleAccelerator() {
  if(mangojuices >= upJuiceParticleAcceleratorCost) {
    upJuiceParticleAcceleratorCount++;
    mangojuices = mangojuices - upJuiceParticleAcceleratorCost;

    upJuiceParticleAcceleratorCost = updateItemCost(upJuiceParticleAcceleratorBaseCost, upJuiceParticleAcceleratorCount);

    document.getElementById('JuiceParticleAcceleratorCount').innerHTML = upJuiceParticleAcceleratorCount.toLocaleString();
    document.getElementById('upJuiceParticleAcceleratorCost').innerHTML = upJuiceParticleAcceleratorCost.toLocaleString();
    updateMangoJuiceDisplay();
  }
}

// Function that calculates the new price of an item based on the base cost and number owned that you pass to the Function

function updateItemCost (baseCost, numberOwned){
  return Math.round(baseCost * Math.pow(costMultiplier, numberOwned))
}

// This is the main loop. This is where a lot of the action happens //
window.setInterval(mainLoop, 1000);

function mainLoop(){
  mangojuices = mangojuices + (upJuicePressCount * upJuicePressRate) + (upJuiceMachineCount * upJuiceMachineRate) + (upJuiceBotCount * upJuiceBotRate) + (upJuiceDroneCount * upJuiceDroneRate) + (upJuiceFactoryCount * upJuiceFactoryRate) + (upJuiceSeaStationCount * upJuiceSeaStationRate) + (upJuiceSpaceStationCount * upJuiceSpaceStationRate) + (upJuiceParticleAcceleratorCount * upJuiceParticleAcceleratorRate);
  updateMangoJuiceDisplay()
}
