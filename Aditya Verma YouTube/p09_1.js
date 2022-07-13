//   floar/ceil of an element
// ! floor of Target =   Greatest elem smaller than  Target;

let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let target = 17;
let start = 0;
let end = arr.length -1;
// all elements which can be flor value of Target are res =1,3,5 candidates;
// we want greatest so 5

let ans =  greatest_floor(arr, target , start , end) 
console.log( "Ans" , ans)

function greatest_floor(arr, target , start , end){

   while(start <= end ){
    let mid = Math.floor(start + ((end - start)/2));
    console.log("Mid" , mid);

    if(arr[mid] == target) {return arr[mid]}
    if(arr[mid] < target ) {
        // storing possible canditaates ;
        res = arr[mid];
        start = mid + 1;
     }
     else if(arr[mid] > target){
        end = mid -1;
     }
}
return res;
}
