// !Search in row vice to coloum vice sorted 2D-array
// * it is sorted RowWise as well as COLUMNwise
let arr = [[10,20,30,40],
           [15,25,35,45],
           [27,29,37,48],
           [32,33,39,50]];

let key = 29;

/*APPROACH (m*m 2d-Array)
start traversing from mid =  '40' i.e. i=0; j=m-1
if(key(29) === arr[i][j](29) => return index(i,j))

if(mid(40) > key i.e. all elem present in that coln are greater than key(29));
// * arr[i][j] = 40; so colmn move  left hand side (j--)
// * arr[i][j] = 30; so colmn move  left hand side (j--)
// *  arr[i][j]= 20;
if(mid(20) < key i.e. we should move down in row i.e. i++;
// * arr[i][j] = 20; so row move  dowm hand side (i++)
// * arr[i][j] = 25; so row move  dowm hand side (i++)
// * arr[i][j] = 29; so row move  dowm hand side (i++);
//  if Not present return [-1,-1]
  TIME COMPLEXITY : O(n+m);

//  ! 2D-array bound conditions ,  i>=0 and i<n & j>=0 and j<m
*/
let ans = TwoDArrFind(arr , key);
console.log(ans);


function TwoDArrFind(arr , key){
    let n = arr.length-1;
    let m = arr[0].length -1;
    let i =0; 
    let j = m-1;

    while(i>=0 && i<n && j>=0 && j<m){
        if(arr[i][j] === key){
            return [i,j];
        }
        else if(arr[i][j] > key){
            j--;
        }
        else if(arr[i][j] < key){
            i++;
        }
    }
    return [-1,-1];
}