function add(a, b){
    let sum = a + b;

    return (sum)
}

function subs(a, b){
    let sub = a - b;
    return(sub)
}

function multi(a , b){
    let mult = a *b;
    return (mult)
}

function divi(a,b){
    let div = (a/b);
    div = div.toFixed(2);
    return (div)
}

export {add , subs , multi , divi}