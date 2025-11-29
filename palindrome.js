function isPalindrome(n){
    let original = n;
    let rev = 0;

    while (n>0) {
        let digit = n % 10;
        rev = rev * 10 + digit;
        n = Math.floor(n/10);
    }

    if (original === rev) {
        console.log("Palindrome");
    } else {
        console.log("Not Palindrome");
    }
}
isPalindrome(121);
