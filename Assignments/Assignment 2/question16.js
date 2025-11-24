function placeOrder(callback){
    setTimeout(()=>{
        console.log("Order placed")
        callback();
    },4000);
} 
function cookFood(callback){
    setTimeout(()=>{
        console.log("Food cooking")
        callback();
    },4000);
}
function deliverFood(){
    setTimeout(()=>{
        console.log("Food delivered")
    },4000);
}
placeOrder(()=>cookFood(deliverFood))