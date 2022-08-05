// ! We know if sorted array is given then go for B.S;

// But in few problem there is concept in BS in which we can find ans of unsorted array too;
//  it is B.S. on answer concept;

// *  1]PROBLEM STATEMENT 
// un SOrted array ;
//! find index_of_peak_element ;
// peak element is greater than his left & right elements
let arr = [5 , 10 , 20 , 15];
// peak elem is 20;
let arr1 = [ 10 , 20 , 15 , 2 , 23 , 90 , 67];
// peak elem is 20 , and 90;
let arr2 = [25, 20 , 7 , 15 , 50, 60];
//* for index 0 & lastIndex(n-1);
// if 0th elem is greater than right elem it is peak elem =25;
//  if (n-1)elem is greater than his left elem it is peak elem = 60


// *  2] CRITERIA


let Peak_Elemts_ans = console.log(PeakElem(arr))


function PeakElem(arr){
    let low  = 0 ;
    let high = arr.length - 1 ;

    while (low <= high ){
        let mid = Math.floor(low + ((high - low)/2));

        // * excluding 1st and last elements in array ;
        if(mid > 0 && mid < arr.length - 1){
            // console.log(mid)
            if((arr[mid] > arr[mid - 1]) && (arr[mid] > arr[mid + 1])){
                return mid
            }
            else if (arr[mid - 1] > arr[mid]){
                high = mid - 1;
            }
            else {
                low  = mid + 1;
            }
        }
        //* at 0th index in array;
        else if(mid === 0){
            if(arr[0] > arr[1]){
                return 0;
            }
            else{
                return 1
            }
        }
        // * at last index in array;
        else if(mid === arr.length -1){
            if(arr[arr.length - 1] > arr[arr.length - 2]){
                return arr.length-1; 
            }
            else{
                return arr.length-2
            }
        }
    }
}