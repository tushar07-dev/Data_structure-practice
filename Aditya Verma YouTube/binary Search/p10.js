//Sorted alphabetic order;
//  Next alphabetic element
//  Similar to Ceil problems;
// INPUT;
let arr = [ "a" , "c" , "f" , "h"];
let key = "a";
// OUTPUT:(Next Element); => "h";

// !            GET CHARACYER CODE ASCII Value          ! //
let  target = key.charCodeAt(0);
arr = arr.join("");
// console.log(typeof(arr) , arr)
let new_arr = getCharCodes(arr)
console.log(new_arr , target)

function getCharCodes(s){
    let charCodeArr = [];
    
    for(let i = 0; i < s.length; i++){
        let code = s.charCodeAt(i);
        charCodeArr.push(code);
    }
    
    return charCodeArr;
}

//   ceil of an element
// ! Ceil of Target =   Smallest elem greater than Target;

let start = 0;
let end = arr.length -1;


let ans =  smallest_floor(new_arr, target , start , end) 
console.log( "Ans" , ans)
let text = String.fromCharCode(ans);
console.log("Next Elm is=" , text);


function smallest_floor(arr , target , start , end){
    while (start <= end){
        let mid = Math.floor(start +((end - start )/2));
        console.log("Mid" , mid);

        if(arr[mid] == target ) {start = mid + 1}
        if(arr[mid] > target ){
            res = arr[mid];
            end = mid - 1;
        }
        else if(arr[mid] < target ){
            start = mid + 1
        }
    }
    return res;
}