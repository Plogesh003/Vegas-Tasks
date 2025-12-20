function checkgrade(marks) {
    if (marks >= 90) {
        return "A";
    } 
    else if (marks >= 75) {
        return "B";
    } 
    else if (marks >= 60) {
        return "C";
    } 
    else {
        return "Fail";
    }
}

console.log(checkgrade(82));
console.log(checkgrade(30));
console.log(checkgrade(98));
