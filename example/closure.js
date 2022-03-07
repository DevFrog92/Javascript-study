// bar is not closure

// function foo() {
//   const x = 1;

//   function bar() {
//     const z = 10;

//     debugger;

//     console.log(z)
//   }

//   return bar
// }

// const bar = foo();
// bar();

// bar is closure

// function foo() {
//   const x = 1;

//   function bar() {
//     debugger;

//     console.log(x)
//   }

//   return bar
// }

// const bar = foo();
// bar();

// information hiding

const increase = (function() {
  let num = 0;

  return function() {
    return ++num
  }
}())

console.log(increase());
console.log(increase());
console.log(increase());