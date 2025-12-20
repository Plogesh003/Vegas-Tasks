function checkvote(age){
    if(age>18){
        return "Eligible for vote";
    }
    else{
        return "Not Eligible";
    }
}
console.log(checkvote(19));
console.log(checkvote(16));