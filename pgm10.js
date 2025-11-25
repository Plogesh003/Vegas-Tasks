function checktemperature(temp){
    if(temp<20){
        return "Cold";
    }
    else if(temp<20 && temp>30){
        return "Warm";
    }
    else{
        return "Hot";
    }
}
console.log((15));
console.log((25));
console.log((33));