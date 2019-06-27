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
  if(rover.direction === "N"){
    rover.y -= 1;
    console.log("Current Position: " + "(" + rover.x + "," + rover.y + ")");
    rover.travelLog.push(rover.x + "," + rover.y);
  }
  else if (rover.direction === "S"){
    rover.y += 1;
    console.log("Current Position: " + "(" + rover.x + "," + rover.y + ")");
    rover.travelLog.push(rover.x + "," + rover.y);
  }
  else if (rover.direction === "E"){
    rover.x += 1;
    console.log("Current Position: " + "(" + rover.x + "," + rover.y + ")");
    rover.travelLog.push(rover.x + "," + rover.y);
  }
  else{
    rover.x -= 1;
    console.log("Current Position: " + "(" + rover.x + "," + rover.y + ")");
    rover.travelLog.push(rover.x + "," + rover.y);
  }
  

}

function command(commandList){
  for (let i=0; i <= commandList.length; i++){
    switch (commandList[i]){
    case 'f': 
      moveForward(rover);
      break;
    case 'r':
      turnRight(rover);
      break;
    case 'l':
      turnLeft(rover);
      break;
    }
  }
  rover.travelLog.forEach(function(element,index) {
    console.log("Visited Position[" + index + "]: " + "(" + element + ")");
  });
}