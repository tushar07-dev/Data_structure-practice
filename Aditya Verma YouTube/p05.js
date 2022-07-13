let arr = [2 ,4,10 , 10, 10, 10, 10 ,21, 22 ];
let target = 10;

//  count of elem in a sorted array

//Approach : Find 1st elem & Last elem ;
// Count OF element = Last - first + 1 ;

let first = First_Occurance(arr, target);
let Last =  Last_Occurance(arr, target);

console.log(first , Last );

let Count_Of_elem = Last - first + 1;
console.log(Count_Of_elem);

function First_Occurance(arr, target){
    let start = 0;
    let end = arr.length -1;
    let result ;
    console.log("First_Occurance");
    
        while( start <= end ){
    
            // more optimise it prevent overFlow of mid value
            
            let  mid =  Math.floor(start + ((end - start)/2));
                console.log("Mid" , mid);
            
                if(target == arr[mid] ){
                    console.log("Ans" , mid);
    // Keeping Search Continue in 1st part of array  by end = mid - 1;
                    result = mid  ;
                    end = mid - 1;
                }
            // element is less than mid
            else if ( target < arr[mid] ){
                end = mid - 1;
            }
            
            // element is greater than mid;
            else {
                start = mid + 1;
                }
            }
            return result;
    }
    
    
function Last_Occurance(arr, target){
    let start = 0;
    let end = arr.length -1;
    let result ;
        console.log("Last_Occurance");
    
        while( start <= end ){
    
            // more optimise it prevent overFlow of mid value
            
            let  mid =  Math.floor(start + ((end - start)/2));
                console.log("Mid" , mid);
            
                if(target == arr[mid] ){
                    console.log("Ans" , mid);
            // Keeping Search Continue in 2st part of array  by end = mid - 1;
                    result = mid;
                    start =  mid + 1 ;
                }
            // element is less than mid
            else if ( target < arr[mid] ){
                end = mid - 1;
            }
            
            // element is greater than mid;
            else {
                start = mid + 1;
            }
            }
            return result;
    }
    

   