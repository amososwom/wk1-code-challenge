//when you run speedDetector.html youll be prompted for speed in km INTO THE input then youll receive A responce bassed om your input
let marks = prompt("Enter Your Speed in KM: ");
// the fucntion below is called after the response from the prompt is completed and the output is passes through variable marks
speedDetector(marks)

// this is the function that will run to calculate tand return respone
function speedDetector(speedInput){
    //i have declard som empty values for tis variable to ommit the null or undefiend values
    let response = "";
    let demerits = "";
    let preresponse = "";
    let htmlresponse = document.getElementById("app") ; // this is the id of the div where i want to show my response

    if(speedInput < 0 || speedInput === null || speedInput === undefined || speedInput === '') // this if cheks for any null / empty or negative values
    {
        response = "Invalid Speed."; // this is a return value for the funcxtion 
        htmlresponse.innerHTML = response; // this respones are printed/displayed to my html id="response"

    }else if(speedInput >= 0 &&  speedInput <= 70){ // this block will run and output okay when the speed is greater than 0 or below 70 km as its limmit to print okay

        response = "OK"; // this is a return value for the funcxtion 
        htmlresponse.innerHTML = `<i> ${response}</i>`; // this respones are printed/displayed to my html id="response"

    }else{
        const perPoint = 5; // 5 km = 1 demerits 
         let diff = speedInput - 70; // we are getting a diffrence  between speed  and limit

         //(~~) acts like Math.floor and at this point we are removing the points rounding to an integer after a dividion of the diff and pePoint
         demerits = ~~(diff / perPoint); 
         
         preresponse = (demerits > 12) ? "License suspended: " : "Points: "; /// this tenery checks for the demerits if greater than 12 to eirther of the response

         htmlresponse.innerHTML  = `${preresponse} <i> ${demerits}</i>`;  // this respones are printed/displayed to my html id="response"

         response = preresponse + demerits;  // this is a return value for the funcxtion     
    }
return response; // this funton has this response as a return based on the condition it has gone from the top
}
