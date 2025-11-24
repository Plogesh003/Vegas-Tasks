function getgrade(marks){
    if(marks>=90){
        return "A";
    }
    else if(marks>=75){
        return "B";
    }
    else if(marks>=50){
        return "C";

    }
    else{
        return "Fail";
    }
}
console.log(getgrade(90));
console.log(getgrade(75));
console.log(getgrade(50));
console.log(getgrade(30));