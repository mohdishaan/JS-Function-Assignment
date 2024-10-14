function factorial(n){
    if (n>0){
        return n* factorial(n-1);
    }
    else{
        return 1;
    }
}

let x= 5;
console.log("factorial of",x,"is",factorial(x));

let y=4;
console.log("factorial of",y,"is",factorial(y));

let z=8;
console.log("factorial of",z,"is",factorial(z));

let a=11;
console.log("factorial of",a,"is",factorial(a));

let b=9;
console.log("factorial of",b,"is",factorial(b));



