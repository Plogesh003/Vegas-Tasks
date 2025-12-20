function checkChar(letter) {

    let ch = letter.toLowerCase();

    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
        return "Vowel";
    }
    else {
        return "Consonant";
    }
}
console.log(checkChar("a"));  
console.log(checkChar("E"));  
console.log(checkChar("z"));  
