class Person {
  constructor(name) {
    this.name = name
    console.log("in person", this)
  }

  // prototype method
  sayHi() {
    console.log(`Hi, My name is ${this.name}`)
  }

  // static method
  static sayHello() {
    console.log(`Hello`)
  }
}

const me = new Person('yong')

console.log(me.name)
me.sayHi()

// error occur: because sayHello is Person class static method
// so instance me can't access to sayHello
// me.sayHello()

Person.sayHello()


// error occur for TDZ of class

const check = new CheckHoisting('yong')
console.log(check.params)

class CheckHoisting {
  constructor(params) {
    this.params = params
  }
}