// node element:
class Node {
    constructor(element){
        this.element = element;
        this.next = null ;   //*initially there is nothing inside next so assign null
    }
}

// LinkList class:
class LinkList{
    // constructor
    // ṃethod
}
// ! 1]
const node = new Node(5); 
console.log(node)


// function Elem(name, score){
//     this.name = name;
//     this.score = score;
// }

// const elem = new Elem("Tushar" , 75);
// const node = new Node(elem);

// console.log(node);
//* Node { element: Elem { name: 'Tushar', score: 75 }, data: null }

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0
    }
    //! Basic  functionality :
    // methods
    // !add 
    add(element){
        //pass the information and store it into node
        // step1 : Create new Node
        var node = new Node(element);
        // step2 : Checking is linklist is Empty => this.head =node
        if(!this.head){
            this.head = node    
        } 
        // if contain some value then => Go to end of linkLiast & add value
         else{
            var current = this.head;
     // * At end of Link Lint there is no Next elem(null);
    //  while loop will work till it finds end of linkList i.e. null(false);
            while( current.next === true){
                // 2nd last value of next before null is assign to current variable 
                current =  current.next
            }
            // Last value next to current(2nd Last) is assigned to NOde
            current.next = node;
        }
        // we have increment the value now we have to  increase the size (Length of LinkList)
        this.size++;
    }



    //* print:
    printList(){
            var current = this.head;
            var index = 0;
            while( current ){
                console.log("Element:" ,current.element ,"Index:" , index++);
                current = current.next;
            }
        }
        //! Size----------------------------
        sizeOfList(){
            return this.size;
        }

            //! insert-----------------------------
// * if index is greater than size then index is invalide (negative) && is size of linkList ==0  imvalid;
    insertAt(element, index){
        // step1 : inValid conditions
        if(index > this.size || index < 0 && this.size ){
            return false;
        }
        // step2 : create New Node 
        var node = new Node(element);
        var current = this.head;
        var prev = null;
        // stp3: if you want to share at 0th index;
        if(index === 0){
            console.log("1" , index)
            node.next = current;
            this.head = node;
        }
        // if not 0th indx then;
        else{
            while(i<index){
                prev == current;
                current = current.next;
                i++;
            // insert to the INDEX
            prev.next = node;
            // & then move to the next inseted node
            prev = prev.next;   
            // add the rest of  current to the inserted node
            prev.next =  current;
            // increze size;
            this.size++;
            }
    }

    }

    //! remove-----------------------------
    remoceElement(element) {
        var current = this.head;
        var prev = null; 

        while(current){
            if(current.element === element){
                // null;
                if(prev ===null) {
                    this.head = current.next;
                }
                else {
                    prev.next = current.next;
                }
                this.size--
                console.log(`removed ELem=` , element);
                return true;    
            }
            prev = current;
            current = current.next;
        }
    }
    //! isEmpty-----------------------------
    isEmpty(){
        return this.size == 0 ? true : false;
    }

//! ADD_-----------
var list  =  new LinkedList();
console.log(list);

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
console.log(list);


 //! insert-----------------------------
 console.log(list.insertAt(5,0))

// ! PRINT : ----------------
list.printList();

//! Size----------------------------

console.log(list.sizeOfList());

//! remove-----------------------------
list.remoceElement(5)