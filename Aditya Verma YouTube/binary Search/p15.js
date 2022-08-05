// !bitomic array => Find max elem

// what is Bitonic array => monotomically increasing , then monitomaclly decreasing array;
//* next element will never equal to arr[i],arr[i] < arr[i+1];

let arr = [1 , 3 ,8 , 12, 4 , 2];
//  12 is peak element in this 8 & 4 are less than 12;
let ans = console.log(`${bitomicArray(arr)} is Peak value in this bitonic array` );

function bitomicArray(arr) {
    let start = 0;
    let end = arr.length -1;

    while (start <= end) {
        let mid = Math.floor(start + ((end - start)/2));

        // * excluding 1st & last index;
        if(mid > 0 && mid < arr.length - 1){
            // console.log(mid)
            if((arr[mid] > arr[mid - 1]) && (arr[mid] > arr[mid + 1])){
                return arr[mid]
            }
            else if(arr[mid - 1] < arr[mid]){
                start = mid + 1;
            }
            else{
                end = mid - 1;
            }
        }
        // * at 0th index;
        else if(mid === 0){
            if( arr[0] > arr[1]){
                return arr[0]
            }
            else{return arr[1]}
        }
        // * if last index;
        else if(mid === arr.length -1){
            if(arr[arr.length - 1] > arr[arr.length - 2]){
                return arr[arr.length - 1]
            }
            else{return arr[arr.length -2]}
        }
    }
}