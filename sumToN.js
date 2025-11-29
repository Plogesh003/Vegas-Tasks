function sumToN(N) {
    let sum = 0;
    let i = 1;

    while (i <= N) {
        sum = sum + i;
        i++;
    }

    console.log(sum);
}

sumToN(10);
