function calculator(num1 , num2 , operator){
    if(operator == "+"){
        return num1 + num2;
    }
    else if(operator == "-"){
        return num1 - num2;
    }
    else if(operator == "*"){
        return num1 * num2;
    }
    else if(operator == "/"){
         if (num2 == 0) {
            return "Cannot divide by zero";
        }
        return num1 / num2;
    }
    else{
        return "invalid operator";
    }

}
console.log(calculator(10, 5, "+"));
console.log(calculator(8, 2, "-"));
console.log(calculator(3, 4, "*"));
console.log(calculator(12, 3, "/"));
console.log(calculator(5, 0, "/"));