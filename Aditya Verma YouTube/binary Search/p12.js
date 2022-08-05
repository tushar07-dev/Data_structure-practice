//* Infinite Sorted array
let arr = [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,3,3,4,4,5,5,5,9,9,10,10,10,10,];
let target = 1;

//* it is mixure of problem num 4 & 11
let IndexStartEnd = findStartEndIndex(arr, target );
console.log(IndexStartEnd);

let ans = First_Occurance(arr,IndexStartEnd,target)
console.log("First_Occurance at index ",ans);

function findStartEndIndex(arr, target ){
    let start = 0;
    let end = 1;

    while( target > arr[end] && target > arr[start]  ){
        start = end;
        end = end * 2;
        // console.log(arr[start] , arr[end] , start , end , target);
    }
    return [start, end];
}

function First_Occurance(arr,IndexStartEnd,target){
    let start = IndexStartEnd[0];
    let end = IndexStartEnd[1];
    let result = -1;

    while(start <= end){
        let mid = Math.floor(start  + ((end - start)/2));
        // console.log("Mid", mid);

        if(target == arr[mid] ) {
            result = mid  ;
            end = mid - 1;
        }
        else if(( target > arr[mid] )) {
            start = mid + 1;
        }
        else if( target < arr[mid] ){
            end = mid -1;
        }
    }
    // console.log( result );
    return result;
}