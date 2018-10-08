// Rover Object Goes Here
// ======================
//1º
var robot1 = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog:[]
};

//2º
function turnRight(rover){
  if (rover.direction === 'N'){
      rover.direction = 'E';
  } if(rover.direction === 'E'){
    rover.direction = 'S';
  } if(rover.direction === 'S'){
    rover.direction = 'W';
  } else {
    rover.direction = 'N';
  }
  console.log("TurnRightt was called!")
}

function turnLeft(rover){
  if(rover.direction ==='N'){
    rover.direction = 'W';
  } if(rover.direction === 'W'){
    rover.direction = 'S';
  } if(rover.direction === 'S'){
    rover.direction = 'E';
  } else {
    rover.direction = 'N';
  }
  console.log("TurnLeft was called!")
  
}

//3º
function goForward (direction){
  switch (direction){
    case "N":
      if( rover.y > 0) { 
        rover.y -= 1;
      }
      else{
        console.log("Limite minimo de y");
      }
      break;
    case "W":
      if( rover.x > 0) { 
        rover.x -= 1;
      }
      else{
        console.log("Limite minimo de x");
      }
      break;
    case "S":
      if( rover.y < 10) { 
      rover.y += 1;
      }
      else{
        console.log("Limite maximo de y");
      }
      break;
    case "E":
      if( rover.x < 10) { 
      rover.x += 1;
      }
      else{
        console.log("Limite maximo de x");
      }
      break;
  }
}

//4º
function listOfCommands(command) {
  console.log("stars at x:" + rover.x + " y:" + rover.y + " direction: " + rover.direction);

    for (var i=0; i<command.length; i++){
      var letter = command.charAt(i);
    if (letter === "f" || letter === "b" || letter === "r" || letter === "l"){
      if (letter === "f"){
        goForward(rover.direction);
      }
      if (letter === "b"){
        goBackward(rover.direction);
      }
      if (letter === "r"){
        moveRover(rover.direction,"r");
      }
      if (letter === "l"){
        moveRover(rover.direction,"l");
      }
      rover.travelLog.push("x:" + rover.x + " y:" + rover.y + " direction: " + rover.direction);
    }
    else{
      console.log("Not a valid character");
    }
    }
    console.log("This is de the hole route:");
    console.log(rover.travelLog);
}
listOfCommands("lrfqgfblr");

//5º
function goBackward(direction){
  switch (direction){
    case "N":
      if( rover.y < 10) { 
        rover.y += 1;
      }
      else{
        console.log("Limite maximo de y");
      }      
      break;
    case "W":
      if( rover.x < 10) { 
      rover.x += 1;
      }
      else{
        console.log("Limite maximo de x");
      }
      break;
    case "S":
      if( rover.y > 0) {
      rover.y -= 1;
      }
      else{
        console.log("Limite maximo de y");
      }
      break;
    case "E":
      if( rover.x > 0) {
      rover.x -= 1;
      }
      else{
        console.log("Limite maximo de x");
      }
      break;
  }
}




// ======================


function turnLeft(rover){
  console.log("turnLeft was called!");
}

function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
}
