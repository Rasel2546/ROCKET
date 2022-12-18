const ship = document.getElementById("ship");
const button = document.getElementById("button");
let fuel = 200
const fuelScreen = document.getElementById("F")
const changeColor = function () {
  button.style.backgroundColor = "red";
  clearInterval(changeColor);
};


fuelScreen.innerHTML = "Fuel: " + fuel

const remain = function () {
  if (ship.className == "launched") {
    if (fuel < 0) {
      ship.className = "";
      button.innerHTML = "launch";
      fuelScreen.innerHTML = "Out of fuel";

      clearInterval(remain);
    } else {
      fuelScreen.innerHTML = "Fuel: " + fuel
      fuel -= 1
    }
  }
}
const Timer = setInterval(remain, 50)

button.onclick = function () {

  if (ship.className == "launched") {
    //if ship already launched start landing sequence 
    ship.className = "";
    button.innerHTML = "Launch";
    button.className = ""
  } else {
    //else launch the ship 
    ship.className = "launched";
    button.innerHTML = "land";
    button.className = "launched"

  }
};

let refillB = document.getElementById("refill")
let refillScreen = document.getElementById("S")
refillB.onclick = function () {
  if (ship.className = "land") {
    fuel = 200
    fuelScreen.innerHTML = "Fuel: " + fuel
    setInterval(changeColor, 2000)
  } else {
    fuelScreen.innerHTML = `Fuel: ${fuel} \n Please land first`


  }
}


