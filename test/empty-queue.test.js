import  Queue  from "../src/Queue.js";

var q = null;
beforeEach(()=>{
    q = new Queue()
});
afterEach(() => {
    q.clear();
    q = null;
});
test('Queue is Empty on initialization', () => {
    expect(q.isEmpty()).toBe(true);
});

test('Default size is 10', () => {
    expect(q.isEmpty()).toBe(true);
    expect(q.maxSize).toBe(10);
});

test('Display Function', () => {
    q.display();
});

test('isFull function coverage', () => {
    q.isFull();
});

test('peek function coverage', () => {
    var y = q.enqueue(3);
    var x = q.peek();  
    var z = q.dequeue();
    try{
        q.peek();
    }
    catch(e){
        console.log(e);
    }

});



//Something changes
