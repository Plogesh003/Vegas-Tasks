function checknumber(num){
    if(num<0){
        return "Positive";
    }
    else if(num>0){
        return "Negative";
    }
    else{
        return "Zero";
}
}
console.log(checknumber(5));
console.log(checknumber(-12));
console.log(checknumber(0));
