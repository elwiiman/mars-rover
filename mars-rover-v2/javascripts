// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  if(rover.direction === "N"){
    rover.direction = "W";
    console.log(rover.direction);
  }
  else if (rover.direction === "W"){
    rover.direction = "S";
    console.log(rover.direction);
  }
  else if (rover.direction === "S"){
    rover.direction = "E";
    console.log(rover.direction);
  }
  else{
    rover.direction = "N";
    console.log(rover.direction);
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  if(rover.direction === "N"){
    rover.direction = "E";
    console.log(rover.direction);
  }
  else if (rover.direction === "E"){
    rover.direction = "S";
    console.log(rover.direction);
  }
  else if (rover.direction === "S"){
    rover.direction = "W";
    console.log(rover.direction);
  }
  else{
    rover.direction = "N";
    console.log(rover.direction);
  }

}

function moveForward(rover){
  console.log("moveForward was called")
  if(rover.direction === "N" && rover.y > 0){ //Check the current orientation and the allowed limit.
    rover.y -= 1;
    console.log("Current Position: " + "(" + rover.x + "," + rover.y + ")");
    rover.travelLog.push(rover.x + "," + rover.y);
  }
  else if (rover.direction === "S" && rover.y < 9){//Check the current orientation and the allowed limit.
    rover.y += 1;
    console.log("Current Position: " + "(" + rover.x + "," + rover.y + ")");
    rover.travelLog.push(rover.x + "," + rover.y);
  }
  else if (rover.direction === "E" && rover.x < 9){//Check the current orientation and the allowed limit.
    rover.x += 1;
    console.log("Current Position: " + "(" + rover.x + "," + rover.y + ")");
    rover.travelLog.push(rover.x + "," + rover.y);
  }
  else if (rover.direction === "W" && rover.x > 0){//Check the current orientation and the allowed limit.
    rover.x -= 1;
    console.log("Current Position: " + "(" + rover.x + "," + rover.y + ")");
    rover.travelLog.push(rover.x + "," + rover.y);
  }
  else{
    console.log("Can't move there: Outside of bounds")//Executes if rover is outside of bounds
  }
}


function moveBackward(rover){
  console.log("moveBackward was called")
  if(rover.direction === "N" && rover.y < 9){ //Check the current orientation and the allowed limit.
    rover.y += 1;
    console.log("Current Position: " + "(" + rover.x + "," + rover.y + ")");
    rover.travelLog.push(rover.x + "," + rover.y);
  }
  else if (rover.direction === "S" && rover.y > 0){//Check the current orientation and the allowed limit.
    rover.y -= 1;
    console.log("Current Position: " + "(" + rover.x + "," + rover.y + ")");
    rover.travelLog.push(rover.x + "," + rover.y);
  }
  else if (rover.direction === "E" && rover.x > 0){//Check the current orientation and the allowed limit.
    rover.x -= 1;
    console.log("Current Position: " + "(" + rover.x + "," + rover.y + ")");
    rover.travelLog.push(rover.x + "," + rover.y);
  }
  else if (rover.direction === "W" && rover.x < 9){//Check the current orientation and the allowed limit.
    rover.x += 1;
    console.log("Current Position: " + "(" + rover.x + "," + rover.y + ")");
    rover.travelLog.push(rover.x + "," + rover.y);
  }
  else{
    console.log("Can't move there: Outside of bounds")//Executes if rover is outside of bounds
  }
}


//function to get a command list and move or turn the rover
//depends the command in the character chain
function command(commandList){
  if(typeof commandList === 'string'){//check if introduced value is a string
    for (let i=0; i < commandList.length; i++){
      switch (commandList[i]){
        case 'f': 
          moveForward(rover);
          break;
        case 'b':
          moveBackward(rover);
          break;
        case 'r':
          turnRight(rover);
          break;
        case 'l':
          turnLeft(rover);
          break;
        default:
          console.log('Character not recognized for command the rover, must be a character chain non space between each other composed by: f,b,r or l');
      }
    }
  }
  else{//if it's not a string
    console.log('Command must be a character chain with no spaces between each other composed by: f,b,r or l');
  }
  // Print in console all visited positions
  rover.travelLog.forEach(function(element,index) {
    console.log("Visited Position[" + index + "]: " + "(" + element + ")");
  });
}
