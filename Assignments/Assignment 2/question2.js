const number=94;
const age = 17;

if(number>=0 && number<=100){
    if(number>=90){
        console.log("A");
    }else if(number>=80){
        console.log("B");
    }else if(number>=70){
        console.log("C");
    }else{
        console.log("F");
    }
}

(age>=18) ? console.log("Adult") : console.log("Minor");