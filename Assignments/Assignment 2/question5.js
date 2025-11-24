let numbers=[20,30,50,70,30];

var sum=0;
var largest=numbers[0];

for(let i=0 ;i<numbers.length;i++){
    sum = sum+numbers[i];

    if(numbers[i]>largest){
        largest=numbers[i];
    }    
}
console.log(sum);
console.log(largest);