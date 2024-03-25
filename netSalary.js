// for this to run youll open on your browser neetSalary.html and youll be immedietl be prompted for two inputs then youl receive respose calculated
const basicSalary = prompt("Provide Your Basic Salary..");
const benefits = prompt("Provide Your Benefits..");

kratax(basicSalary, benefits);

// this function will run when a user provides his or her values
function kratax(basicSalary, benefits){
    let nssf = 0;
    let nhif = 0;
    let app = document.getElementById("app") ; // this is the id of the div where i want to show my response


    // this funtion outputs the nssf , nhif and taxableincome when called
    function benefitsfunction(basicSalary, benefits = 0){
        let  nhifDeduction = 0
     
         if (basicSalary > 0  && basicSalary <= 5999){
           nhifDeduction  = 150
           
         }else if (basicSalary >= 6000 && basicSalary <= 7999){
           nhifDeduction =300
     
         }else if(basicSalary >= 8000 && basicSalary <= 11999){
           nhifDeduction =400
     
         }else if(basicSalary >= 12000 && basicSalary <= 14999){
           nhifDeduction =500
         }
         else if(basicSalary >= 15000 && basicSalary <= 19999){
           nhifDeduction =600
     
         }
         else if(basicSalary >= 20000 && basicSalary <= 24999){
           nhifDeduction =750
     
         }
         else if(basicSalary >= 25000 && basicSalary <= 29999){
           nhifDeduction =850
     
         }
         else if(basicSalary >= 30000 && basicSalary <= 34999){
           nhifDeduction =900
     
         }
         else if(basicSalary >= 35000 && basicSalary <= 39999){
           nhifDeduction =950
     
         }else if(basicSalary >= 40000 && basicSalary <= 44999){
           nhifDeduction =1000
     
         }
         else if(basicSalary >= 50000 && basicSalary <= 59999){
           nhifDeduction =1200
     
         }
         else if(basicSalary >= 60000 && basicSalary <= 69999){
           nhifDeduction =1300
     
         }
         else if(basicSalary >= 70000 && basicSalary <= 79999){
           nhifDeduction =1400
     
         }
         else if(basicSalary >= 80000 && basicSalary <= 89999){
           nhifDeduction =1500
     
         }
         else if(basicSalary >= 90000 && basicSalary <= 99999){
           nhifDeduction =1600
     
         }
         else if (basicSalary >= 100000){
           nhifDeduction =1700
         }
     // this code checks if there is a value for benefits that is greater than 0 then returns benefits as nssf else will calculate the nssf
         nssf = (benefits > 0 ) ? benefits : basicSalary * 0.06; 
         nhif = nhifDeduction; //nhif is difined from the if statments
         taxableIncome = basicSalary - (nssf + nhif);
             return{
                 nssf,
                 nhif,
                 taxableIncome, 
             }
    }    
// the below function is used to calculate theh taxabaleincome after eveluated fro bene fits
    function tax(taxableIncome){
    let paye = 0;
    let grossTax = 0;
    let rated = 0; 
    let personalRelief = 0;

    if(taxableIncome > 0 && taxableIncome <= 24000){ //taxe are calculated depending on where taxableincome will fall
        grossTax = (taxableIncome*0.10);
    }else if (taxableIncome >= 24001 && taxableIncome <= 32333){
        rated = (taxableIncome - 24000) * 0.25;
        grossTax = 2400 + rated
    }else if (taxableIncome >= 32334 && taxableIncome <= 500000){
        rated = (taxableIncome - 32333) * 0.30;
        grossTax = 2400 + 2083.25 + rated
    }else if (taxableIncome >= 500001 && taxableIncome <= 800000){
        rated = (taxableIncome - 500000) * 0.325;
        grossTax = 2400 + 2083.25 + 140300.1 + rated  
    }else if(taxableIncome > 800000){
        rated = (taxableIncome - 800000) * 0.35;
        grossTax = 2400 + 2083.25 + 140300.1 + 97500 + rated
    }
    paye =  ~~(grossTax - personalRelief);
    netsalary = (taxableIncome - paye);
    return { paye, netsalary } 
    }
    
    let myTaxableIncome  = benefitsfunction(basicSalary,benefits); //this block will hold the response benefitsfunction
    let taxed = tax(myTaxableIncome.taxableIncome); //this block will hold the response tax

    //this block will output to the htmlpage
    app.innerHTML = `
    <span>NSSFDeductions: <i>${myTaxableIncome.nssf}</i></span>
    <span>NHIFDeductions: <i>${myTaxableIncome.nhif}</i></span>
    <span>Tax: <i>${taxed.paye}</i></span>
    <span>Gross Salary: <i>${basicSalary}</i></span>
    <span>Net Salary: <i>${taxed.netsalary}</i></span>`;

    //this block will return a fully combination of the code.
    return {
        NSSFDeductions:  myTaxableIncome.nssf,
        NHIFDeductions:  myTaxableIncome.nhif,
        tax:  taxed.paye,
        grosssalary:  basicSalary,
        netsalary:  taxed.netsalary
    }
}
