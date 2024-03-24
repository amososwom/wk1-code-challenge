
function show(value){
    console.log(value);
}

// 

//output = tax

//output = NHIFDeductions

//output = NSSFDeductions

//output = Gross salary

//output = Net Salary
/*

gross salary = 75000
nssf = (75000 * 0.06) = 4500
nhif = 1400 //(1400 * 0.15) = 210 * 

75000 - (nssf + nhif)
let taxableIncome = 75000 - (nssf + nhif)5900 //69100
let payee = tax(taxableIncome).paye
let net salary = tax(taxableIncome).netsalary

NSSFDeductions = 4500
NHIFDeduction s = 1400
payee (i.e. Tax) = 51186.65 // tax.paye
gross salary = 75000
net salary = 17913.35 // tax.netsalary
*/

function kratax(basicSalary, benefits){
    let nssf = 0;
    let nhif = 0;

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
     
         // nssf = (benefit > 0 ) ? benefit : basicSalary * 0.06;
     
         if(benefits > 0){
             nssf = benefits;
         }else{
             nssf = basicSalary * 0.06;
         }
     
         nhif = nhifDeduction;
         taxableIncome = basicSalary - (nssf + nhif);
             return{
                 nssf,
                 nhif,
                 taxableIncome, 
             }
    }    

    function tax(taxableIncome){
    let paye = 0;
    let grossTax = 0;
    let rated = 0; 
    let personalRelief = 0;

    if(taxableIncome > 0 && taxableIncome <= 24000){
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
    
    let myTaxableIncome  = benefitsfunction(basicSalary,benefits);
    let taxed = tax(myTaxableIncome.taxableIncome);

    return {
        NSSFDeductions:  Number(myTaxableIncome.nssf),
        NHIFDeductions:  myTaxableIncome.nhif,
        payee:  taxed.paye,
        grosssalary:  basicSalary,
        netsalary:  taxed.netsalary
    }
}



show(kratax(5000))