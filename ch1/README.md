# 리액트 프로젝트 시작하기

## 리액트란 무엇인가

- 자동으로 업데이트 되는 UI
- UI = render(state)
- render 함수는 순수 함수로 작성
  - 랜덤 함수 사용 x
  - 외부 상태 변경 x
  - 입력이 같으면 출력이 같다는 말.
- state는 불변 변수로 관리
- 가상 돔(virtual dom)

## 리액트 개발 환경 직접 구축하기

- `https://unpkg.com/react@16.14.0/umd/react.development.js`
- `https://unpkg.com/react-dom@16.14.0/umd/react-dom.development.js`

## 바벨 사용하기

- 자바스크립트 코드를 변환해 주는 컴파일러
- 최신 자바스크립트 문법을 지원하지 않는 환경에서도 최신 문법 사용 가능
- 그 외에도 다양한 용도로 사용
- 리액트에서는 JSX 문법을 사용하기 위해 바벨을 사용
