const marks = prompt("Enter Your Marks: ");
userGrade(marks);
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
        }else{
            finalGrade = "Is Invalid.";
        }
       document.getElementById("response").innerHTML = `Grade: <i> ${finalGrade}</i>`;
} 
