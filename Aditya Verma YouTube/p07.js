let arr =  [11,
      12,  15, 18, 2, 5, 6,  8];
let target = 5;
let n = arr.length-1;

// ! Find Elem in Rotation sorted array, 
//approcah: 
// i) find min index previous problem
// arrray divided into 2 parts (0 to min-1) & (min, size-1);
//ii) Apply binary search to both array and return target element OR -1;

let min_index = Find_min_index(arr , n );
console.log("Min Index =" , min_index );

//ii)
let bs1 = Binary_search(arr, target , 0 , min_index - 1);
let bs2 = Binary_search(arr , target , min_index , n)

// console.log("Bs1" , bs1 ,"Bs2", bs2);

if(bs1 === -1 && bs2 === -1){
    console.log("Not Found" ,-1)
}
else if(bs1 !== -1 ){
    console.log("Found at=" ,bs1)
}
else if(bs2 !== -1){
    console.log("Found at=" ,bs2)
}

function Find_min_index(arr, n){
    let start = 0;
    let end = arr.length -1;

    while( start <= end){
        let mid = Math.floor(start + ( end - start )/ 2);
        let next =  (mid + 1)% n;
        let prev = (mid + n - 1)%n;

        // console.log("n", n , "prev" , prev ,  "Mid" ,mid  , "nxt" ,next );

        if(arr[mid] <= arr[next] && arr[mid] <= arr[prev]){
            return mid;
        }
        else if( arr[mid] <= arr[end]){
                end = mid -1;
        }

        else if( arr[mid] >= arr[start] ){
            start = mid + 1 ;
        }
    }
}

function Binary_search(arr, target , start , end){
     while (start <= end){
        let mid = Math.floor(start + (end - start)/2);
        // console.log("Mid",mid);

        if( target == arr[mid]){
            return mid;
        }
        else if( target < arr[mid]){
            end = mid - 1;
        }
        else if( target > arr[mid]){
            start = mid + 1
        }
     }
     return -1
}