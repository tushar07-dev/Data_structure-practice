//* suppose you have given the infinite array whose End value is unknown;

let arr = [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18];
//suppose you dont have end End value; so,
// for B.S we need start & End value;

let target = 18;
let start = 0;
// suppose end is at 1st index;
let end = 1;

let startEnd = findStartEndIndex(arr, target , start , end)
console.log(startEnd);
 start = startEnd[0];
 end = startEnd[1];
// now apply B.S between these;
// let ans = Binary_search(arr,start,end ,target)
// console.log(ans)

function findStartEndIndex(arr, target , start , end){
    // compare start index value withgiven target value;
    while(arr[end] < target ) {
        // if target is greater;
        // start = end; & end = end *2;
        start = end;
        end = end * 2;  
        // console.log(arr[start] ,arr[end], target);
    }
    // at end of while we wil get start & end index inWhich target element lies;
    return [start , end];
}

function Binary_search(arr,start,end ,target){
    console.log(arr,start,end ,target);
    
    while(start <= end ){
        let mid =  Math.floor(start + ((end - start) / 2));
        console.log("Mid" , mid);

        if(arr[mid] == target) return mid;
        else if(arr[mid] < target) start = mid;
        else if(arr[mid] > target) end = mid;
    }
}




