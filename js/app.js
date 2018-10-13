// Rover Object Goes Here
// ======================
//1º
var robot1 = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog:[]
};

//2º TurnsLeft/Right

function turnRight(rover){
  switch (rover.direction) {
    case 'N':
      rover.direction= 'E';
      break;
    case 'E':
    rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    default: rover.direction ='N';
  }
  console.log("TurnRight was called!")
}

function turnLeft(rover){
  switch (rover.direction) {
    case 'N':
      rover.direction= 'W';
      break;
    case 'W':
    rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    default: rover.direction ='N';
  }
  console.log("TurnLeft was called!")
}

//3º goForward

function goForward (rover){
  console.log("F rover "+rover);
  switch (rover.direction){
    case "N":
      if( rover.y > 0) {
        rover.y--;
      }
      else{
        console.log("Limite minimo de y");
      }
      break;
    case "W":
      if( rover.x > 0) {
        rover.x--;
      }
      else{
        console.log("Limite minimo de x");
      }
      break;
    case "S":
      if( rover.y < 10) {
      rover.y++;
      }
      else{
        console.log("Limite maximo de y");
      }
      break;
    case "E":
      if( rover.x < 10) {
      rover.x ++;
      }
      else{
        console.log("Limite maximo de x");
      }
      break;
  }
  log(rover);
}

function goBackward(rover){
  switch (rover.direction){
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
  log(rover);
}


//4º listOfCommands
function commands(texto, rover){
  for (var i = 0; i < texto.length; i++) {
    if(texto[i] === "f"){
      goForward(rover);
    } else if (texto[i] === "r") {
      turnRight(rover);
    } else if(texto[i] === "l"){
      turnLeft(rover);
    } else if (texto[i] === "b") {
      goBackward(rover);
    } else {
      console.log("Comando Inválido");
    }
  }
}


function listOfCommands(command,rover) {
  console.log("stars at x:" + rover.x + " y:" + rover.y + " direction: " + rover.direction);

    for (var i=0; i<command.length; i++){
      var letter = command.charAt(i);
    if (letter === "f" || letter === "b" || letter === "r" || letter === "l"){
      if (letter === "f"){
        goForward(rover);
      }
      if (letter === "b"){
        goBackward(rover);
      }
      if (letter === "r"){
        turnRight(rover,"r");
      }
      if (letter === "l"){
        turnLeft(rover,"l");
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
listOfCommands("lrfqgfblr", robot1);

//5º travelLog
function log(rover){
  console.log("rover is: "+rover);
	rover.travelLog.push(rover.x, rover.y);
}



// ======================


turnLeft(robot1);

turnRight(robot1);

goForward(robot1);
