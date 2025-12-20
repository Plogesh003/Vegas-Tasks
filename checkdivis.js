function checknumber(num){
    if(num %3==0 && num %5===0){
        return "Divisible by 3 and 5";
    }
    else{
        return "Not Divisible by 3 and 5";
    }
}
console.log(checknumber(15));