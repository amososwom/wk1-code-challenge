

//should return ok if the speed is less than or eaqual to 70 return ok
// retun number of demerit point per speed input > 70
// IF THE number demerit point > 12 to print  “License suspended”.

function show(value){
    console.log(value);
}

//function accept a speed input
function speedDetector(speedInput){
    let response = "";
    let demerits;

    if(speedInput < 0)
    {
        response = "null";
    }else if(speedInput >= 0 &&  speedInput <= 70){
        response = "OK";
    }else{
        let perPoint = 5;
         let diff = speedInput - 70;
         demerits = Math.floor(diff / perPoint); 
         response = "Points: " + demerits;

         if(demerits > 12){
             response = "License suspended " + demerits;
         }
    }
return response;
}
show(speedDetector(77))