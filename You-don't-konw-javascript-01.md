# You dont' know javascript 01
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
  - What is `array-like` objects?
  - The `void` operator