var gameData = {
  cheese:0,
}

function moreCheese() {
  gameData.cheese += 1,
  document.getElementById("cheeseAmount").innerHTML = gameData.cheese + " Cheese!"
}
