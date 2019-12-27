'use strict';

const readline = require('readline-sync');

var userInput;
var command;
var args;
var validCommand = false;
var xyF;
var xyFValid;
var running = true;
var hdg = ["north", "east", "south", "west"];

function place(input) {
    var x = input[0];
    var y = input[1];
    var F = input[2];
    if (x == "0" || x == "1" || x == "2" || x == "3" || x == "4") {
        if (y == "0" || y == "1" || y == "2" || y == "3" || y == "4") {
            switch (F) {
                case "north":
                    F = "1";
                    break;
                case "east":
                    F = "2";
                    break;
                case "south":
                    F = "3";
                    break;
                case "west":
                    F = "4";
                    break;
                default:
                    console.log("The HEADING entered is invalid, please try again.");
                    xyFValid = [0, false];
                    return xyFValid;
            };
            console.log("Robot placed at (X=" + args[0] + "), (Y=" + args[1] + ") facing " + args[2] + ".");
        xyF = x + y + F;
        xyFValid = [xyF, true];
        return xyFValid;
    } else {
        console.log("The POSITION entered is invalid, please try again.");
        xyFValid = [0, false];
        return xyFValid;
        }   
    } else {
        console.log("The POSITION entered is invalid, please try again.");
        xyFValid = [0, false];
        return xyFValid;
    };
};

function move(pos) {
    var x = pos.charAt(0);
    var y = pos.charAt(1);
    var F = pos.charAt(2);
    var ox = x;
    var oy = y;
    switch (F) {
        case "1":
            y = Number(y);
            y = y + 1;
            break;
        case "2":
            x = Number(x);
            x = x + 1;
            break;
        case "3":
            y = Number(y);
            y = y - 1;
            break;
        case "4":
            x = Number(x);
            x = x - 1;
            break;
    }
    if (x >= 5 || x <= -1 || y >= 5 || y <= -1) {
        console.log("The MOVE is invalid.");
        return pos;
    }
    console.log("Moved from (X=" + ox + "), (Y=" + oy + ") to (X=" + x + "), (Y=" + y + ").");
    x = x.toString();
    y = y.toString();
    xyF = x + y + F;
    return xyF;
};

function left(pos) {
    var x = pos.charAt(0);
    var y = pos.charAt(1);
    var F = pos.charAt(2);
    switch (F) {
        case "1":
            F = "4";
            break;
        case "2":
            F = "1";
            break;
        case "3":
            F = "2";
            break;
        case "4":
            F = "3";
            break;
    }
    xyF = x + y + F;
    var newHdg = Number(xyF.charAt(2));
    newHdg = newHdg - 1;
    console.log("The Robot is now facing " + hdg[newHdg]);
    return xyF;
}

function right(pos) {
    var x = pos.charAt(0);
    var y = pos.charAt(1);
    var F = pos.charAt(2);
    switch (F) {
        case "1":
            F = "2";
            break;
        case "2":
            F = "3";
            break;
        case "3":
            F = "4";
            break;
        case "4":
            F = "1";
            break;
    }
    xyF = x + y + F;
    var newHdg = Number(xyF.charAt(2));
    newHdg = newHdg - 1;
    console.log("The Robot is now facing " + hdg[newHdg]);
    return xyF;
}

console.log('Robot now active!\nPlease use the PLACE command to define the initial position of the Robot.');

do {
    if (command != null) {
        if (command != "place") {
            console.log("ERROR: You must use the PLACE command first.");
        }
    }
    userInput = readline.question("user@Robot:~$ ");
    args = userInput.toLowerCase().split(" ");
    command = args.shift();
    if (command != "place") {
        validCommand = false;
    } else {
        xyFValid = place(args);
        xyF = xyFValid[0];
        validCommand = xyFValid[1];
    }
} while (validCommand == false);


while (running == true) {
userInput = readline.question("user@Robot:~$ ");
args = userInput.toLowerCase().split(" ");
command = args.shift();
    switch (command) {
        case "place":
            xyFValid = place(args);
            xyF = xyFValid[0];
            break;
        case "move":
            xyF = move(xyF);
            break;
        case "left":
            xyF = left(xyF);
            break;
        case "right":
            xyF = right(xyF);
            break;
        case "report":
            var newHdg = Number(xyF.charAt(2));
            newHdg = newHdg - 1;
            console.log("The Robot is at (X=" + xyF.charAt(0) + "), (Y=" + xyF.charAt(1) + ") facing " + hdg[newHdg]);
            break;
        case "end":
            return 0;
            break;
        default:
            console.log("Unknown command. Please enter a valid command!");
            break;
    }
}

