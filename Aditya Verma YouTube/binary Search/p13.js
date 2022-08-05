// *min difference elem in sorted array ;
//! find elem whose difference is less than others;
// *Test Case:
//  [ 4  ,  6 , 10 ];   key = 7;
// [ 4-7 , 6-7 , 10-7 ]
// [  3 ,   1  ,  3   ] ; min = 1; => ans = 6
// ! OR 
// *Test Case:
// let arr = [ 1 , 3 , 8, 10, 13] ; key = 12;
// [ 1-12 , 3-12 , 8-12, 10-12, 13-12 ]
// [  11 ,   9  ,   4  ,   2 ,   1 ] ; min = 1; => ans = 12

// ! Approach : 
/* If key is present, in the array then that position will be the smaller difference i.e key - key = 0
    if Key not present,then the index where key would be present is be x,
    then min difference will be from  x-1 or x+1 index 
*/

/*Solution for test 1 : 
    key = 7, is not presetnt
    element less than 7 = 6; greater than 7 = 10;
    ans => (7-6)=1 (7-10)=3 ,  ans is 6
    */
/*Solution for test 2 : 
    key = 12, is not presetnt
    element less than 12 = 10; greater than 12 = 13;
    ans => (12-6)=1 (12-13)= 1 ,  ans is 13
*/

// *SOLUTION *//
// let arr = [ 4  ,  6 , 10 ];  
// let key = 7;

let arr = [ 1 , 3 , 8, 10, 13];
let key = 12;


// find nearest left&right or equal to elem to Key;
// ! ALWAYS returns
// if Key is present => return mid;
// if key s absent => you get [start , end]; => find min difference between them

let ans = console.log(nearly_small(arr, key));

function nearly_small(arr, key){
    let start = 0;
    let end = arr.length -1;

    while(start <= end){
        let mid = Math.floor(start + ((end - start)/2));

        if(arr[mid] === key){
            return arr[mid];
        }
        else if( key < arr[mid] ){
            end = mid - 1;
        }
        else if ( key > arr[mid] ){
            start = mid + 1;
        }
    }
    let a = Math.abs(arr[start] - key);
    let b = Math.abs(arr[end] - key);

    if(a<b) return arr[start];
    return arr[end] ;
}