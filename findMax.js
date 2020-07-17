//Way-1
var business = 450;
var minister = 650;
var sochib = 550;

if(business > minister){
    if(business > sochib){
        console.log("business is Bigger");
    }
    else{
        console.log("sochib is Bigger");
    }
}

else{
    if(minister > sochib){
        console.log("minister is Bigger");
    }
    else{
        console.log("sochib is Bigger");
    }
}




//Way-2
var business = 450;
var minister = 650;
var sochib = 550;

var max = Math.max(business, minister, sochib)
console.log(max);
