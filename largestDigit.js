function largestDigit(n){
    let max = 0;

    while (n>0) {
        let digit = n % 10;
        if (digit > max) {
            max = digit;
        }
        n = Math.floor(n / 10);
    }

    console.log(max);
}
largestDigit(5832);
