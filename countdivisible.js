function countdivisible(N){
    let count =0;

    for(let num=1; num<=N; num++){
        if(num %3 === 0){
            count=count+1;
        }
    }

console.log(count);
}

countdivisible(3);
