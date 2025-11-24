const number = 15;
    //odd or even
    if(number%2===0){
        console.log("The number is Even");
    }else{
        console.log("The number is Odd");
    }
    // positive,negative or 0
    if(number>0){
        console.log("The number is Positive");
    }else if(number<0){
        console.log("The number is Negative");
    }else{
        console.log("The number is 0");
    }
    //divisiblity by 3 and 5
    if(number%3===0 && number%5===0){
        console.log("The number is divisible by both 3 and 5");
    }else{
        console.log("The number is not divisible by both 3 and 5");
    }