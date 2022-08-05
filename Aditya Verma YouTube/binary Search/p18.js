// !# Allocate numb of min # of pages
// sorted or unsorted array
let arr = [10, 20, 30,40];
let k = 2;

// ! PRoblem not solved (NOT COMPLETED)
/*
index of 0 => represents the BOOK 0
index of 1 => represents the BOOK 1
index of 2 => represents the BOOK 2 .... So on;

arr[0] => represents the bookPage = 10
arr[1] => represents the bookPage = 20
arr[2] => represents the bookPage = 30

k = numb of students;

now you have to distribute books in students
!conditions :
i) one book at a time can give to one student only
ii) atleast one book should give to it each;
ii) books should alot in continuous manner 
s1 = 10,      =10  || 10 20 =30 || 10 20 30 =60pages
s2 = 20 30 40 =90  || 30 40 =70|| 40        =40pages
*reduce maximum numb of pages one studet is geting 
ans = 60
*/

/*
! Approach:
a stud can read 0pages or max allbOOkPages i.e. 100;(0 to 100);
we have to allote min 1 book to each stud so we give max pages to one ;
now our range became (40 - 100)[ max_elem , sum_total_elem]
* for explainig consider range from 0 to 100
 B.S start = 0 , end = 100;  [0 10 20 30 40 50 60 70 80 90 100]
mid (max numb of pages tht stud cn read) = 50
for 50 max page count;
s1 = 10 20 = max 30 pages < 50pgs
s2 = 30  = max 30 pages < 50pgs
s3 = 40  = max 40 pages < 50pgs ;
*to satisfy max5 we need extra stud i.e. k+1 ;

* so we have to increase max pages
start = mid(50) ; end = 100;
mid (max numb of pages tht stud cn read) = 75;
for 75 max page count;
s1 = 10 20 30 = max 60pages <75pgs
s2 = 40 = max 40 pages < 75pgs
*within same k we got the max pages can handle;


* so we are decrease max pages
start = mid(50) ; end = 75;
mid (max numb of pages tht stud cn read) = 62;
for 62 max page count;
s1 = 10 20 30 = max 60pages <62pgs
s2 = 40 = max 40 pages < 62pgs
*within same k we got the max pages can handle;

* so we are decrease max pages
start = mid(50) ; end = 62;
mid (max numb of pages tht stud cn read) = 56;
for 56max page count;
s1 = 10 20  = max 30pages <56pgs
s2 = 30  = max 30 pages < 56pgs
s3 = 40  = max 40 pages < 56pgs
*to satisfy max5 we need extra stud i.e. k+1 ;

* so we are decrease max pages
start = mid(56) ; end = 62;
mid (max numb of pages tht stud cn read) = 59;
for 59max page count;
s1 = 10 20 = max 30 pages <59pgs
s2 = 30  = max 30 pages < 59pgs
s3 = 40  = max 40 pages < 59pgs
*to satisfy max5 we need extra stud i.e. k+1 ;

* so we are decrease max pages
start = mid(59) ; end = 62;
mid (max numb of pages tht stud cn read) = 60;
for 60max page count;
s1 = 10 20 30= max 60 pages <60pgs
s2 = 40  = max 40 pages < 60pgs
*within same k we got the max pages can handle;

* so we are decrease max pages
start = mid(60) ; end = 62;
mid (max numb of pages tht stud cn read) = 61;
for 60max page count;
s1 = 10 20 30= max 60 pages <60pgs
s2 = 40  = max 40 pages < 60pgs
*within same k we got the max pages can handle;

*/
let ans =  maxPage(arr , k);
console.log(ans);

function maxPage(arr , k){
    // * max in array ;
    let n = arr.length -1;
    // let start = Math.max(...arr);
    let start = 0;
    let end = arr.reduce(function (x, y) {
        return x + y;
    }, 0);
    let result = -1; 

    console.log(start, end);

    // *If stud are more than books not able to give book to each student
    if(n < k){
        return -1;
    }
    while (start <= end) {
        let mid = Math.floor(start + (end - start) /2);
        console.log(`start=${start} end=${end} mid=${mid}`);
        if(isValid(arr , n , k , mid) === true) {
            result = mid;
            end = mid - 1;
        }
        else{
            start = mid + 1;
        }
    }
    return result;
} 

// *this function is use ; after alloting books if we have to allote books more than k given student then return false 
// *else k == given student true;

function isValid(arr , n , k , max){
    let student = 1;
    let sum = 0; 

    for(let i=0; i<n ;i++){
        sum = sum + arr[i];
        if(sum > max){
            student++;
            sum = arr[i];
        }
        console.log(`student=${student} sum=${sum} max=${max} `);
        if(student > k){
            return false;
        }
    }
    return true;
}