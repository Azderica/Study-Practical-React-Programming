# 중요하지만 헷갈리는 리액트 개념 이해하기

> 비구조화 문법

```js
const person = ['mike', 23]
const [name, age] = person
```

> 전개 연산자

```js
const arr = [1, 2, 3]
const arr2 = [...arr]
// const arr2 = [arr[0], arr[1], arr[2], todo
```

> js VS react

- 리액트에서는 데이터를 변경하는 부분만 구성하고 jsx 부분을 이후에 나타내면 됩니다.
- 일반 js에서는 뷰쪽도 해야하는 코드가 나옵니다. (UI가 안보임)
- 즉 리액트가 추상화 단계가 높음을 의미합니다.

결론적으로 react가 생산성이 좋습니다.