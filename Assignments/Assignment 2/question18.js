function startExam(callback){
    setTimeout(()=>{
        console.log("Exam started");
        callback();
    },4000)
}
function evaluateExam(callback){
    setTimeout(()=>{
        console.log("Evaluating answers");
        callback();
    },4000)
} 
function declareResult(){
    setTimeout(()=>{
        console.log("Result declared");
    },4000)
}
startExam(()=>evaluateExam(declareResult));