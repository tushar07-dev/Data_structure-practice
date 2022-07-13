// Searchinig in an nearly sorted array

let arr = [ 5, 10, 30 , 20 , 40  , 60, 50];
let start = 0;
let end = arr.length-1;
let n = arr.length;
let target = 60;

// ! Nearly Sorted => element should be present on ith index would be present on 
// ! i - 1 index ||  ith index  || i+ 1 index;

let ans = nearly_sorted(arr , target , 0 , end);
console.log(ans)
function nearly_sorted(arr , target , start , end){

while (start <= end ){
    let mid = Math.floor( start + ((end - start)/2));
// ! mid -1 >= start helps while pointer is at edge element to prevent undefined
    if(target == arr[mid]){return mid}
    if( mid -1 >= start && target == arr[mid -1]){return mid -1}
    if( mid +1 <= end && target == arr[mid +1]){return mid +1}

    else if(target <arr[mid]){
        end =  mid - 2;
    }

    else if(target > arr[mid]){
        start = mid + 2;
    }
}
return -1;

}