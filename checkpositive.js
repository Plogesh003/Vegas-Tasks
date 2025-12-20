function checknumber(num){
    if(num >0){
        return "Positive";
    }
    else if(num <0){
        return "Negative";
    }
    else{
        return "Zero";
    }
}
console.log(checknumber(-3));
console.log(checknumber(8));