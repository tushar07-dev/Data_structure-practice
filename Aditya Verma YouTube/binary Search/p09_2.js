//   ceil of an element
// ! Ceil of Target =   Smallest elem greater than Target;

let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let target = 10;
let start = 0;
let end = arr.length -1;


let ans =  smallest_floor(arr, target , start , end) 
console.log( "Ans Elme=" , ans)

function smallest_floor(arr , target , start , end){
    while (start <= end){
        let mid = Math.floor(start +((end - start )/2));
        console.log("Mid" , mid);

        if(arr[mid] == target ) {return arr[mid]}
        if(arr[mid] > target ){
            res = arr[mid];
            end = mid - 1;
        }
        else if(arr[mid] < target ){
            start = mid + 1
        }
    }
    return res
}