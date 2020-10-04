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
var upJuiceParticleAcceleratorCost = 10000000;
var upJuiceParticleAcceleratorRate = 10000000;
var upJuiceParticleAcceleratorBaseCost = 10000000;

//Array to store variables to make it easier to clear outer

var item_count = [
  mangojuices,
  upJuicePressCount,
  upJuiceMachineCount,
  upJuiceBotCount,
  upJuiceDroneCount,
  upJuiceFactoryCount,
  upJuiceSeaStationCount,
  upJuiceSpaceStationCount,
  upJuiceParticleAcceleratorCount
];

// Function which sets each variable's value to 0 //
function clearValues(){
  mangojuices = 0;
  upJuicePressCount = 0;
  upJuiceMachineCount = 0;
  upJuiceBotCount = 0;
  upJuiceDroneCount = 0;
  upJuiceFactoryCount = 0;
  upJuiceSeaStationCount = 0;
  upJuiceSpaceStationCount = 0;
  upJuiceParticleAcceleratorCount  = 0;
}

// This function updates the mango juices made so you don't have to copy / paste the same code over and over again //
function updateMangoJuiceDisplay(){
  document.getElementById('mangojuiceCount').innerHTML = "Mango Juice Money: $" + mangojuices.toLocaleString(); //.toLocaleString will add commas to large numbers
}

// This function will manually add mango juices.
function make(){
  mangojuices++; // Same as 'mangojuices = mangojuices + 1' or 'mangojuices +=1'
  //Replaced updateMangoJuiceDisplay(); with updateDisplay();
  updateDisplay();
}

// If I could turn back time. This is where we set up the counter.

var mins = 2; // Set the number of minutes
var total_seconds = mins * 60; // Calculates the number of total seconds

function countdown(){ // Countdown function is initiated when the page is laoded
  setTimeout('Decrement()', 60);
}

// Function to specifically disable a button so I can call it whenever I want regardless of the condition

function Decrement(){ // The Decrement Function will decrement the time by seconds and minutes
  var display_seconds = total_seconds % 60;
  var prepend_zero = "";

  if (document.getElementById){
    minutes = document.getElementById("minutes");
    seconds = document.getElementById("seconds");
    console.log(display_seconds);

      if (display_seconds <59) { //If there's less than a minute, the function will only return the seconds

        if (display_seconds <10) {
          prepend_zero = "0";
        }
        seconds.innerHTML = prepend_zero + display_seconds;
      }
      else { //Otherwise the function will return both minutes and seconds if there is more than a minute
        minutes.innerHTML = getminutes();
        seconds.innerHTML = display_seconds;
      }

      if (total_seconds < 0){
        alert("Time's Up!");
        minutes.innerHTML = 0;
        seconds.innerHTML = "00";
        sellJuice.setAttribute('disabled','disabled');
        sellJuice.classList.add("disabled"); //Removes 'disabled' CSS class to the element which will also disable the hover effect
        item_count.forEach(clearValues);
        /*Sets mango juices to 0 so if a person hasn't purchased anything,so they can't purchase an item
        upJuicePressCount=0;
        upJuiceMachineCount=0;
        upJuiceBotCount=0;
        upJuiceDroneCount=0;
        upJuiceFactoryCount=0;
        upJuiceSeaStationCount=0;
        upJuiceSpaceStationCount=0;
        upJuiceParticleAcceleratorCount=0;
        sellJuice.setAttribute('disabled', 'disabled'); // The 'Sell Mango Juice' button is disabled
        sellJuice.classList.add("disabled"); //Adds 'disabled' CSS class to the element so the hover is disabled. */

    // Disable button functions with Asif; this didn't work because the disableDisplayItem function didn't work.//
        /*disableDisplayItem(sellJuice);
        disableDisplayItem(buyJPress);
        disableDisplayItem(buyJMachine);
        disableDisplayItem(buyJBot);
        disableDisplayItem(buyJDrone);
        disableDisplayItem(buyJFactory);
        disableDisplayItem(buyJSeastation);
        disableDisplayItem(buyJSpacestation);
        disableDisplayItem(buyJParticleaccelerator);*/
      }
      else{
        total_seconds--;
        setTimeout('Decrement()', 1000);
      }
  }
}

function getminutes(){
  mins = Math.floor(total_seconds / 60);
  return mins;
}

function getseconds(){
  return total_seconds - Math.round(mins*60);
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

// Function to disable buttons until the resource amount has been reached

function displayItemAvailability (itemCost, buttonId){
  var button = document.getElementById(buttonId);

  if(itemCost > mangojuices) {
    button.disabled = true;
    button.classList.add("disabled"); //Adds 'disabled' CSS class to the element.
  } else {
    button.disabled = false;
    button.classList.remove("disabled"); //Removes 'disabled' CSS class to the element.
  }
}

// Function to display item availability with the item information

function updateStoreAvailability() {
  //Check Juice Press
  displayItemAvailability(upJuicePressCost, "buyJPress");
  displayItemAvailability(upJuiceMachineCost, "buyJMachine");
  displayItemAvailability(upJuiceBotCost, "buyJBot");
  displayItemAvailability(upJuiceDroneCost, "buyJDrone");
  displayItemAvailability(upJuiceFactoryCost, "buyJFactory");
  displayItemAvailability(upJuiceSeaStationCost, "buyJSeastation");
  displayItemAvailability(upJuiceSpaceStationCost, "buyJSpacestation");
  displayItemAvailability(upJuiceParticleAcceleratorCost, "buyJParticleaccelerator");

}

// Function to update the display

function updateDisplay() {
  updateMangoJuiceDisplay();
  updateStoreAvailability();
}

// This is the main loop. This is where a lot of the action happens //
window.setInterval(mainLoop, 1000);

function mainLoop(){
  mangojuices = mangojuices + (upJuicePressCount * upJuicePressRate) + (upJuiceMachineCount * upJuiceMachineRate) + (upJuiceBotCount * upJuiceBotRate) + (upJuiceDroneCount * upJuiceDroneRate) + (upJuiceFactoryCount * upJuiceFactoryRate) + (upJuiceSeaStationCount * upJuiceSeaStationRate) + (upJuiceSpaceStationCount * upJuiceSpaceStationRate) + (upJuiceParticleAcceleratorCount * upJuiceParticleAcceleratorRate);
  updateDisplay();
}
