    //const promptInput = prompt("Please enter");
//const myprompt =  require("prompt-sync")({ sigint: true });
const grade = prompt("Enter Your Grade: ");
userGrade(grade);

//var holds the user input
// A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.
//function(userInput)
//verify if 0-100
//if
//return userGrade
function userGrade(userInput){
    let finalGrade = "E";
        if(userInput >= 0 && userInput < 40){ //from zero to 39
            finalGrade = "E";
        }else if(userInput >= 40 && userInput < 49){ //from 40 to 38
            finalGrade = "D";
        }else if(userInput >= 49 && userInput <= 59){
            finalGrade = "C";
        }else if(userInput >= 60 && userInput <= 79){
            finalGrade = "B";
        }else if(userInput > 79 && userInput <= 100){
        finalGrade = "A";
        }
       document.getElementById("response").innerHTML = finalGrade;
} 
