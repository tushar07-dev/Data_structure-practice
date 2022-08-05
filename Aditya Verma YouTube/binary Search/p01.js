let arr = [ 1,2,3,4,5,6,7,8,9,10];
let target = 6;
// Find Index of Target (o/p :1 )

let start = 0;
let end = arr.length -1;


while( start <= end ){
//    let  mid = Math.floor((start + end)/2);

// OR more optimise it prevent overFlow of mid value

let  mid =  Math.floor(start + ((end - start)/2));

    console.log("Mid" , mid);

    if(target == arr[mid] ){
        console.log("Ans" , mid);
        return mid;
    }
// element is less than mid
else if ( target < arr[mid] ){
    end = mid - 1;
}

// element is greater than mid;
else {
    start = mid + 1;
}
}
console.log("Ans" , -1);
return -1;
