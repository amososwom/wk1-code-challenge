//when you run studentGrade.html youll be prompted for marks input then youll receive a grade bassed om your input
const marks = prompt("Enter Your Marks: ");
// the function below calls the function to check the grades
userGrade(marks);
//this function below is the one that will run to ouput the grades
function userGrade(marks){
    // by default i have declarded the final grade to be E
    let finalGrade = "E";

        if(marks >= 0 && marks < 40){ //from zero to 40 grade E
            finalGrade = "E";
        }else if(marks >= 40 && marks < 49){ //from 40 to 49 grade D
            finalGrade = "D";
        }else if(marks >= 49 && marks <= 59){//from 49 to 59 grade C
            finalGrade = "C";
        }else if(marks >= 60 && marks <= 79){//from 60 to 79 grade B
            finalGrade = "B";
        }else if(marks > 79 && marks <= 100){//from 79 to 100 grade A
        finalGrade = "A";
        }else{ // ELSE statments conclude for a value not ranging from the if statments hence return invalid
            finalGrade = "Is Invalid.";
        }
       document.getElementById("response").innerHTML = `Grade: <i> ${finalGrade}</i>`; // this code of line will print on the html page
} 
