function counting() {
  let count = 0

  return function () {
    return count++
  }
}

const counting_func = counting()

// count가 1씩 증가한다.
// outer에 연결된 환경 레코드를 찾아간다.
console.log(counting_func())
console.log(counting_func())
console.log(counting_func())
console.log(counting_func())