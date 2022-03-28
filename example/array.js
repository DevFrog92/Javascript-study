console.log(Object.getOwnPropertyDescriptors([1,2,3]))

const arr = [];

console.time('Array performance test')

for(let i = 0; i< 10000000; i++){
  arr[i] = i
}

console.timeEnd('Array performance test')

const obj = {}

console.time('Object performance test')

for(let i = 0; i< 10000000; i++){
  obj[i] = i
}

console.timeEnd('Object performance test')

const arrFrom = Array.from({length: 10}, (_,i) => i)
console.log('arrFrom', arrFrom)


const arrTest1 = []

console.time('Array push test')
for(let i = 0; i < 1000000; i++) {
  arrTest1.push(i)
}
console.timeEnd('Array push test')

const arrTest2 = []

console.time('Array push test2')
for(let i = 0; i < 1000000; i++) {
  arrTest2[arrTest2.length] = i
}
console.timeEnd('Array push test2')

// const Stack = (function(){
//   function Stack(array = []){
//     if(!Array.isArray(array)){
//       throw new Error(`${array} is not an array!`)
//     }

//     this.array = array
//   }

//   Stack.prototype = {
//     constructor: Stack,
//     push(value) {
//       return this.array.push(value)
//     },
//     pop(){
//       return this.array.pop()
//     },
//     entries(){
//       return [...this.array]
//     }
//   }

//   return Stack
// }())

// const stack = new Stack([1,2])
// console.log(stack.entries())
// stack.push(3)
// console.log(stack.entries())
// stack.pop()
// console.log(stack.entries())

class Stack {
  #array
  constructor(array = []){
    if(!Array.isArray(array)){
      throw new Error(`${array} is not an array!`)
    }

    this.#array = array
  }

  push(value) {
    return this.#array.push(value)
  }

  pop() {
    return this.#array.pop()
  }

  entries(){
    return [...this.#array]
  }
}

const stack = new Stack([1,2])
console.log(stack.entries())
stack.push(3)
console.log(stack.entries())
stack.pop()
console.log(stack.entries())


class Queue {
  #array

  constructor(array = []){
    if(!Array.isArray(array)){
      throw new Error(`${array} is not an array!`)
    }

    this.#array = array
  }

  push(value) {
    return this.#array.push(value)
  }

  dequeue(){
    return this.#array.shift()
  }

  entries(){
    return [...this.#array]
  }
}

const queue = new Queue([1,2])
console.log(queue.entries())
queue.push(3)
console.log(queue.entries())
queue.dequeue()
console.log(queue.entries())

const arrSplice = [1,2,3]
console.log(arrSplice.splice(1,0,12,13,15))
console.log(arrSplice)