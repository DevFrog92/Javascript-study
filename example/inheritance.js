function Circle(radius) {
  this.radius = radius;
  this.getArea = function(){
    return Math.PI * this.radius ** 2;
  };
}

const circle1 = new Circle(1)
const circle2 = new Circle(2)

console.log(circle1.getArea())
console.log(circle2.getArea())
console.log("constructor function", circle1.getArea === circle2.getArea)

function Circle_proto(radius) {
  this.radius = radius
}

Circle_proto.prototype.getArea = function() {
  return Math.PI * this.radius ** 2;
}

const circle3 = new Circle_proto(1)
const circle4 = new Circle_proto(2)

console.log(circle3.getArea())
console.log(circle4.getArea())
// circle3과 circle4의 getArea 함수는 Circle_proto 생성자 함수의 프로퍼티이다.
// 밑의 결과는 true가 나온다.
console.log("constructor function by prototype", circle3.getArea === circle4.getArea)