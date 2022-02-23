const circle = {
  radius: 5,
  getDiameter: function() {
    console.log('get diameter', this)
    return 2 * this.radius
  }
}

console.log(circle.getDiameter())

function convertArgsToArray() {
  console.log(arguments)

  const arr = Array.prototype.slice.call(arguments)

  console.log(arr)
  return arr
}

convertArgsToArray(1,2,3)