
//! find an element in rotated sorted
// Approach : Number of times array is rotated is equal to index of Minimum element
//that min elem we called Pivot;
//  arr[mid-1] > arr[mid] < arr[mid+1];
//! Our required mid is less than his both neibour.
// Next:  (mid + 1) % n ; //! if at (last element + 1)%n => first element ;
// Prev:  (mid + n - 1) % n; //! if at (1st elem + n - 1)%n => last element ;

// ! Direction : we always get 2arrays one is sorted 1 is unsorted we want sorted
//find minimum;
let arr =  [11,  12,  15, 2,   8];
let n = arr.length-1;
let min = rotate(arr,  n);
console.log("index of Min element == No. of Rotation" , min)
// Number of rotation == index of Min element

function rotate(arr,  n){
    let start = 0;
    let end = arr.length -1;

    while( start <= end ){
        let mid  = Math.floor(start + (end - start)/2);
        
        let next =  ( mid + 1)% n;
        let prev = (mid + n - 1)% n;
        
        console.log("n", n , "prev" , prev ,  "Mid" ,mid  , "nxt" ,next )

        if( arr[mid] <= arr[next] && arr[mid] <= arr[prev] ){
            //1] if it is less than both return mid;
            return mid;
        }

        // 2] if not go for unsorted array ;
        else if( arr[mid] <= arr[end]  ){
            end  = mid - 1;
            console.log("End" ,end)
        }

       else if(arr[mid] >= arr[start]) {
        start = mid + 1;
        console.log("Start" ,start)
       }
    }
    return 0;
}