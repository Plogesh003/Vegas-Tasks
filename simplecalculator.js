function calculate(num1,num2,opeartor){
    if(opeartor === "+"){
        return num1+num2;
    }
    else if(opeartor ==="-"){
        return num1-num2;
    }
    else if(opeartor ==="*"){
        return num1*num2;
    }
    else if(opeartor ==="/"){
        return num1/num2;
    }
    else{
        return "Invalid Operator";
    }
}
console.log(calculate(10,9,"+"));