let marks = prompt("Enter Your Speed: ");
show(speedDetector(marks))

function show(value){
    console.log(value);
}

function speedDetector(speedInput){
    let response = "";
    let demerits = "";
    let preresponse = "";
    let htmlresponse = document.getElementById("response") ;

    if(speedInput < 0 || speedInput === null || speedInput === undefined || speedInput === '')
    {
        response = "Invalid Speed.";
        htmlresponse.innerHTML = response;

    }else if(speedInput >= 0 &&  speedInput <= 70){

        response = "OK";
        htmlresponse.innerHTML = `<i> ${response}</i>`;

    }else{
        let perPoint = 5;
         let diff = speedInput - 70;

         //(~~) acts like Math.floor and at this point we are removing the points rounding to an integer
         demerits = ~~(diff / perPoint); 
         
         preresponse = (demerits > 12) ? "License suspended: " : "Points: ";

         htmlresponse.innerHTML  = `${preresponse} <i> ${demerits}</i>`;

         response = preresponse + demerits;    
    }
return response;
}
