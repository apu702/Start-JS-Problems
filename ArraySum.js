
var numbers = [45, 81, 63, 98, 56, 35, 23];
var sum = 0;

for(var i=0; i<numbers.length; i++){
    var element = numbers[i];
    sum = sum + element;
}
console.log("totals of Numbers :", sum);


//Another way Using Function

function getArraySum(numbers){
    var sum = 0;

    for(var i=0; i<numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

var numbers = [45, 81, 63, 98, 56, 35, 23];
var result = getArraySum(numbers)
console.log("totals of Numbers :", result);

var total = getArraySum([20, 30,40,56,78,66])
console.log("totals of Numbers :", total);