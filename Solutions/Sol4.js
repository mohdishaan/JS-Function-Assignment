function calculateTax(income){
    if (income < 10000){
        console.log("10% Tax is applicable & Tax amount is: ");
        tax_amount = (10/100)*income;
        return tax_amount;
    }    
    else if(income<30000){
        console.log("15% Tax is applicable & Tax amount is: ");
        tax_amount = (15/100)*income;
        return tax_amount;
    }
    else if(income<100000){
        console.log("20% Tax is applicable & Tax amount is: ");
        tax_amount = (20/100)*income;
        return tax_amount;
    }
    else{
        console.log("25% Tax is applicable & Tax amount is: ");
        tax_amount = (25/100)*income;
        return tax_amount;
    }
}

let income_val1 = 15789;
console.log(calculateTax(income_val1));
console.log();


let income_val2 = 120023;
console.log(calculateTax(income_val2));
console.log();


let income_val3 = 50000;
console.log(calculateTax(income_val3));
console.log();


let income_val4 = 7000;
console.log(calculateTax(income_val4));
console.log();


let income_val5 = 78561;
console.log(calculateTax(income_val5));
console.log();
