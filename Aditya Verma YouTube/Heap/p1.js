/* 
representation of heap is same as SLack "|_|" of size k;
!Identification of Heap :
* if bothe => keyWord "k" && "smallest / Largest" are present then it is Heap problem;
TWO TYPES OF HEAP : minHeap & maxHeap,
if(k + smallest => max Heap) => max elem is at Top of HEap
if(k + Largest  => min Heap) => min elem is at Top of HEap

! In Heap probm we have to do Sorting which takes nlog(n) by merge sort;
but by heap of size k we can do it in nlog(k);


 * Que: Kth smallest elem ?
     arr = 7 10 4  3 20 15 ; k = 3(Find 3rd smallest elem)
*Approach-1 (SORTING-Merge):
applySort= 3  4 7 10 15 20 ; 3rd index elem is = >7 

*Approach-2 (HEAPR-max):(max value is always on TOP)
arr = 7 10 4  3 20 15 ; k = 3
heap = [];
if(size of heap became > k then pop the top)
7 = > [7]      size=1
10 = > [7 10]   size=2
4 = > [4 7 10]  size=3
3 = > [3 4 7 10]size=4;  pop 10 => [3 4 7 ]
20 = > [3 4 7 20]size=4; pop 20 => [3 4 7 ]
20 = > [3 4 7 15]size=4; pop 15 => [3 4 7 ]
*at end of array who ever is on top of heap is our ans => 7
complexity => nlog(k)
*/