# You dont' know JS 01
> TIL from You dont' know javascript

- Chapter01: Type
  - What is `type` mean in javascript?
    - 타입은 어떤 값을 다른 값과 분별할 수 있는 고유한 내부 특성의 집합
    - javascript type
      - primitives
        - `undefined`
        - `null`
        - `number`
        - `string`
        - `boolean`
        - `symbol`
      - reference
        - `object`
  - What is `coercion`?
  - `typeof` function is return the type of value and always the type of return value is string..
  - How we know the `null` type by `typeof`?
    ```javascript
    cosnt v = null;
    (!v && typeof v === "object");
    ```
  - Function and array are the subtype of Object. And a function is a callable object.
  - The `safety guard` or `typeof`
    ```javascript
      typeof b; //undefined
    ```
  - `polypill`: 기능을 지원하지 않는 웹 브라우저 상의 기능을 구현하는 코드
  - `dependency injection` 설계 패턴


- Chapter02: Value
  - array
    - 배열 값에 delete 연산자를 사용하면 슬롯을 제거할 수는 있지만, `<empty slot item>`이 생겨 length 프로퍼티 값은 바뀌지 않는다. <br />
    <br />
    ```javascript
    const arr = [1, 2, 3]
    console.log(arr, `length: ${arr.length}`) // [ 1, 2, 3 ] length: 3
    delete arr[0]
    console.log(arr, `length: ${arr.length}`) // [ <1 empty item>, 2, 3 ] length: 3
    delete arr[1]
    console.log(arr, `length: ${arr.length}`) // [ <2 empty items>, 3 ] length: 3
    delete arr[2]
    console.log(arr, `length: ${arr.length}`) // [ <3 empty items> ] length: 3
    ```
    - 배열의 인뎃스는 숫자인데, 배열 자체도 하나의 객체여서 키/프로퍼티 문자열을 추가할 수 있다. 이러한 경우 length는 증가하지 않는다. 하지만 키가 10진수로 변환될 수 있는 경우(암묵적 변환), 문자 키가 아니라 숫자 키를 사용한 것과 같아져 length에 변화를 초래하므로 주의해야한다.
    - What is `array-like` objects?
      - `Array.from`
  - string
    - 자바스크립트 문자열은 실제로 생김새만 비슷할 뿐 문자 배열과 같지 않다. 문자열은 겉모습이 배열과 같은 유사배열이다.
  - number
    - 자바스크립트의 숫자 타입은 정수와 부동 소수점 숫자를 아우른다.
    - 숫자 값은 Number 객체 레퍼로 박싱할 수 있기 떼문에 Number.prototype 메서드로 접근할 수 있다.
    - `0` & `-0`
    - `Number.isNaN()`, `isNegZero()`, `Object.is()`
  - The `void` operator