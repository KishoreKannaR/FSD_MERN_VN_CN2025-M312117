function totalspent(expenses){
    var sum=0;
    for(let i=0;i<expenses.length;i++){
        sum=sum+expenses[i];
    }
    console.log(`Total money spent ${sum}`);
}
const expenses = [2000, 1500, 3500, 4000];
totalspent(expenses);