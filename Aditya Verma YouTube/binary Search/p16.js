// !Search & find INDEX of elem  in a  bitomic array

let arr = [ 1, 3 ,8 , 12, 5 , 2];
let key = 5 ;

/* from 0th to before peakIndex it is ascending order array
from peakINdeX till last index it is descending order array;
apply binary search on both array, 
for ascending order BINARY SEARcH
for descending order BINARY SEARcH
 */
let peakIndex = peakINdeX(arr);
console.log(peakIndex);

let asc = Binary_search_asc(arr,key , 0, peakIndex);
let desc = Binary_search_desc(arr,key , peakIndex , arr.length - 1);

console.log(asc , desc);
function Binary_search_asc(arr,key , start, end){
    while(start <= end){
        let mid = Math.floor(start + ((end - start)/2));

        if(arr[mid] === key){
            return mid;
        }
        else if(arr[mid] < key){
            start = mid + 1;
        }
        else if (arr[mid] > key){
            end = mid - 1;
        }
    }
    return -1;
}
function Binary_search_desc(arr,key , start, end){
    while(start <= end){
        let mid = Math.floor(start + ((end - start)/2));

        if(arr[mid] === key){
            return mid;
        }
        else if(arr[mid] < key){
            end = mid - 1;
        }
        else if (arr[mid] > key){
            start = mid + 1;
        }
    }
    return -1;
}
function peakINdeX(arr){
        let start = 0;
        let end = arr.length -1;
    
        while (start <= end) {
            let mid = Math.floor(start + ((end - start)/2));
    
            // * excluding 1st & last index;
            if(mid > 0 && mid < arr.length - 1){
                // console.log(mid)
                if((arr[mid] > arr[mid - 1]) && (arr[mid] > arr[mid + 1])){
                    return mid
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
                    return 0
                }
                else{return 1
                }
            }
            // * if last index;
            else if(mid === arr.length -1){
                if(arr[arr.length - 1] > arr[arr.length - 2]){
                    return arr.length - 1
                }
                else{
                    return arr.length -2
                }
            }
        }
}

