var ship = document.getElementById("ship");
var button = document.getElementById("button");
var show = document.getElementById("F")
var fuel = 40;
function less() {
  fuel = fuel - 5;
}



button.onclick = function(){
  
  if(ship.className == "launched"){
    //if ship already launched start landing sequence 
    ship.className = "";
    button.innerHTML = "launch";
    less()
    
  }else{
    //else launch the ship 
    ship.className = "launched";
    button.innerHTML = "land";

  }
  show.innerHTML = "fuel:" + fuel;
};


