function smallest(a ,b ,c){
    if(a<=b && a<=c){
        return a;
    }
    else if(b<=a && b<=c){
        return b;
    }
    else{
        return c;
    }

}
console.log(smallest(3,7,2));
console.log(smallest(-1,-5,0));
console.log(smallest(9,9,9));