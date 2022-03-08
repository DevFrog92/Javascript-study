// bar is not closure

function foo() {
  const x = 1;

  function bar() {
    const z = 10;

    debugger;

    console.log(z)
  }

  return bar
}

const bar = foo();
bar();

// bar is closure

function foo() {
  const x = 1;

  function bar() {
    debugger;

    console.log(x)
  }

  return bar
}

const bar2 = foo();
bar();

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


const funcs = []

for(let i = 0; i < 3; i++){
  funcs[i] = (function(id){
    return function() {
      return id
    }
  }(i))
}

for(var i = 0; i < 3; i++){
  funcs[i] = function() {
      return i
    }
}

for(let j = 0; j< funcs.length; j++) {
  console.log(funcs[j]())
}