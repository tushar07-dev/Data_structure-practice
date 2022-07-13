let arr = [ 9,6,4,3,2,0];
// let arr = [ 1,2,3,4,5,6,7,8,9,10];

let target = 6;
// Find Index of Target (o/p :1 );
let start = 0;
let end = arr.length -1;


// ! We have provide an invisible test case ;
// ! we know Array is sorted but dont know array is Forward / Reverse sorted

// 1st we will find array is reverse or Forward sorted;

if(arr[0] < arr[1]){
    console.log("Acending Order");
    console.log(Acending(  arr, target ))
}
else{
    console.log("Decending Order");
    console.log(Decending(  arr, target ))

}

function  Acending(  arr, target ){
    while( start <= end ){
        //    let  mid = Math.floor((start + end)/2);
        
        // OR more optimise it prevent overFlow of mid value
        
        let  mid =  Math.floor(start + ((end - start)/2));
        
            console.log("Mid" , mid);
        
            if(target == arr[mid] ){
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
        return -1;
}
function Decending(  arr, target ){
    while( start <= end ){

        //    let  mid = Math.floor((start + end)/2);
    
    // OR more optimise it prevent overFlow of mid value
    
    let  mid =  Math.floor(start + ((end - start)/2));
    
    console.log("Mid" , mid);
    
    if(target == arr[mid] ){
        return mid;
    }
    // element is less than mid
    else if ( target < arr[mid] ){
    start = mid + 1;
    }
    
    // element is greater than mid;
    else {
        end = mid - 1;
    }
    }
    return -1;
    
}