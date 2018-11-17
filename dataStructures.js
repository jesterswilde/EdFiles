/*
    A stack is the FILO (First In Last Out) data structure. 
    The easiest way to think of it is a stack of cards. 
    You have 3 things you can do:
        put a card on (push)
        get a card off the top (pop)
        look at the top card, without removing it (peek)
    You can also get the length. 
    You cannot access individual elements, other than the top one.

    Pushing, Popping and Peeking should be constant time (doesn't matter how many elements are in, it should be the same amount of steps)
*/

const Stack  = ()=>{

}

/*
    Queue is similar to Stack, but it's FIFO (First In First Out)
    You can:
        enqueue, add an element to the queue
        dequeue, remove an element from the queue
        peek, look at the next element to be removed
    YOu can also get the length.
    Queue's are just like queues or lines of people. The first person to get into line, is the first one to leave. 
    All operations should be in constant time
*/

const Queue = ()=>{

}



/*
    A linked list is a series of nodes, that store values, and point at the next object in the list.
    There are 2 main types, linked and double linked. Double linked lists, each node only points forward
    node -> node -> node
    double linked lists point both ways
    node <-> node <-> node
    Linked lists have a handful of features:
        You can add a value to a linked to the head InsertAtHead or to the tail InsertAtTail. Both return the node created (constant time).
        Has the method contains, which takes a value and returns true or false if the value is in the list (this is linear time).
        You can get the length of the list
        You can get the head or the tail from the GetHead or GetTail property
        You can empty a list with Empty
        You can remove a node from the list by passing the node into the Remove function
        Each node has a value property, which stores the value
        Each node has a next and previous method that returns the next or previous node in the list. If there is no next node, return null
        Extra points, each node can have a InsertInFront and InsertBehind which will add a node, with the value, in front of or behind that node, into the list.
*/



const DoubleLinkedList = ()=>{

};

/*
 Graphs are non-directional collection of nodes with edges that point to other nodes.
 This structure has many implementations and many uses but we are going to do only a small subset for ease.
 Each graph node should contain a value
 using addEdge(node) will add a new edge between both nodes (each node will point at the other one)
 using removeEdge(node) will remove the edge between both nodes
 using findValue(value) will return the value, and a list of nodes it traversed to get to that value. Will return null if that value cannot be found
*/

const GraphNode = ()=>{
    
};

/*
    Trees are a hierarchical node structure. Each node can have child nodes. 
    The defining feature of a tree is that it has one root node, and branches off from there. It's a recursive structure.
        * <- root
     /        \
  *   *     *   *
 / \ / \   / \ / \

 Decent overview of terms: https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm Though this is for a binary search tree which is a specific type of tree. We are making a generic form one
 However, some trees havea function, like being sorted. Others do not. If they don't have a function as a whole, they are really just a collection of nodes that have a direction. 
 That is the one we will make. 

 Each TreeNode has a data property that stores the value it was given
 Each node can have child nodes
 Each node points to it's parent node. If it's the root node, this returns null
 Each TreeNode has a contains method, that will search the tree and return true if that value is in the current node, or any of it's children
 Each Tree has a getNode method that will return the first node that contains the given value. Returns null if there is no value. 
 Each node can clear it's children with the clear method
 Each node can add a child
 Each node can remove a child by passing it the node to remove

 Consider reading into binary search tree for more ideas on how this general tree structure can be useful
*/

const TreeNode = ()=>{

}

/*
 Now we move onto the more complex ones. 
 Hash map and JavaScript objects {} are very similar. 
 Hash maps allow you to add a value by key set(key, value)
 Hash maps allow you to retrive value by key get(key) will return null if there is nothing there
 Hash maps can delete by key with delete(key)

 often memory is stored as a continuous set of spaces in memory [ |  |  |  |  ]
 Then values are inserted into this, but the memory has to be allocated ahead of time.
 In JavaScript his all happens automatically, so you never notice that the array or object resizes itself numerous times as you push 1000 elements into an empty array
 Your backing array should have a fixed size that you know, and as it gets to 3/4 full, it should resize to double.
 If it drops to 1/4 full, it should halve itself. 
 Use an array, not an object, for the storage of values. 

 Hash maps can insert, find, and remove in constant time. Which is impressive. 
 Arrays can do the same thing, assuming you are trying to find by index.
 So, to accomplish this feat, you will take the key, and convert it into a number. For ease, I have provided this function
 Another thing to watch out for is that some keys will hash to the same value. This is called a collision. It's fine, but it needs to be handled. 
*/

const HashMap = ()=>{

}

//don't worry too much about understanding this. 
const hashString = (key)=> {
    var hash = 0;
    if (key.length == 0) {
        return hash;
    }
    for (var i = 0; i < key.length; i++) {
        var char = key.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash;
    }
    return hash;
}

const MinHeap = ()=>{

}
