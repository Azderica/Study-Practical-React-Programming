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

<br/>

## 리액트 개발 환경 직접 구축하기

- `https://unpkg.com/react@16.14.0/umd/react.development.js`
- `https://unpkg.com/react-dom@16.14.0/umd/react-dom.development.js`

<br/>

## 바벨 사용하기

- 자바스크립트 코드를 변환해 주는 컴파일러
- 최신 자바스크립트 문법을 지원하지 않는 환경에서도 최신 문법 사용 가능
- 그 외에도 다양한 용도로 사용
- 리액트에서는 JSX 문법을 사용하기 위해 바벨을 사용

`npm install @babel/core @babel/cli @babel/preset-react`

- 바벨은 프리셋과 플러그인이라는 개념이 있음
- 플러그인은 하나의 변환하는 기능을 의미, 여러 개의 플러그인을 모아놓은 것이 프리셋

`npx babel --watch src --out-dir . --presets @babel/preset-react`

<br/>

## 웹팩의 기본 개념 이해하기

- 다양한 기능 제공
  - 파일 내용을 기반으로 파일 이름에 해시값 추가 -> 효율적으로 브라우저 캐싱 이용
  - 사용되지 않은 코드 제거
  - 자바스크립트 압축
  - JS에서 CSS, JSON, 텍스트 파일 등을 일반 모듈처럼 불러오기
  - 환경 변수 주입
- 웹 팩을 사용하는 가장 큰 이유
  - 모듈 시스템(ESM, commonJS)을 사용하고 싶어서
- 요즘 브라우저는 ESM을 지원합니다. 하지만
  - 오래된 브라우저
  - 많은 오픈 소스가 commonsJS로 작성됨

`npm install webpack webpack-cli react react-dom`

`npx webpack`

<br/>

## create-react-app으로 시작하기

- 리액트 개발 환경을 직접 구축하려면 많은 지식과 노력이 필요
  - webpack, babel, jest, eslint, polyfill, HMR(Hot Module Replacement), CSS 후처리(ex. sass), ...
- 페이스북에서 관리하는 공식 툴

`npx create-react-app cra-test`

- cra와 next.js 의 가장 큰 차이는 서버사이드 렌더링의 지원 여부입니다.
  - cra는 서버사이드 렌더링을 지원하지 않습니다.
  - 바벨, eslint의 자유로움은 next.js
  - 다만 빠르게 하고 싶다면 cra도 좋은 선택 중 하나입니다.

### npm start

배포시에는 npm start 를 하면 안됨 (최적화가 안되어 있으므로)

- HTTPS로 실행할려면 `HTTPS=true npm start` 사용

### npm build

- 로컬에서 npm build 파일을 사용하고 싶으면, serve 패키지를 사용 : `npx serve -s build`
- 빌드시 큰 이미지는 build/static/media 에 들어가지면 작은 경우에는 js 내에 내장됩니다.

### npm test

- test.js 나 spec.js 로 하면 테스트 파일로 인식합니다.

### npm eject

- eject 명령어는 react-scripts 를 사용하지 않고 모든 설정 파일을 추출하는 명령어
- CRA를 기반으로 직접 개발환경을 구축하고 싶을 때 사용하는 것, 추출을 하지 않으면 CRA의 기능이 추가됐을 때 단순히 react-script 버전만 올리면 되는데 수출을 하면 자동으로 설정 파일을 수정해야 한다는 단점이 있음.
  - 꼭 필요한 경우가 아니면 관리적 측면에서는 좋지 않음

### 브라우저 지원 여부 체크

- caniuse.com 에서 지원하는지 안지원하는 지 확인할 수 있습니다.
- https://caniuse.com/?search=padStart
- babel 도 core-js를 사용하며, 이를 쓰고 싶다면 코드에서 import 하면 됩니다.
  - `import 'core-js/features/string/pad-start'`
  - 원래는 core-js를 설치해야하지만 cra에서는 기본적으로 core-js 가 깔려있으므로

### 환경변수

- 환경변수는 개발, 테스트 또는 배포 환경별로 다른 값을 적용할 때 유용
- 전달된 환경변수는 코드에서 `process.env.{변수 이름}` 으로 사용할 수 있습니다.
  - cra에서는 기본적으로 `process.env.NODE_ENV` 를 가지고 있습니다.
  - `npm start` 실행시, development
  - `npm test` 실행시, test
  - `npm run build` 실행시, production
  - `.env.development` 나 `.env.production` 으로 속성값을 줄 수 있음

<br/>

## CSS 작성 방법 결정하기

- 일반적인 CSS 파일로 작성하기
  - 이름 충돌이 발생하기 쉬움
- css-module로 작성하기
  - 위의 충돌을 방지함, 해쉬값 사용, `*.module.css` 형태로 작성
- Sass로 작성하기
  - `npm install node-sass` 로 설치
  - shared.scss 에서 값 정의해서 공통값으로 사용 가능
- css-in-js로 작성하기
  - css를 js 안에서 작성하는 방법
  - `npm install styled-components`

<br/>

## 단일 페이지 애플리케이션(SPA) 만들기

![SPA](https://user-images.githubusercontent.com/42582516/153193344-99c35de6-73a1-4b25-ad1b-29175994631b.png)

###  SPA가 가능하기 위한 조건

- 자바스크립트에서 브라우저로 페이지 전환 요청을 보낼 수 있습니다.
  - 단, 브라우저는 서버로 요청을 보내지 않아야 합니다.
- 브라우저의 뒤로 가기와 같은 사용자의 페이지 전환 요청을 자바스크립트에서 처맇라 수 있습니다.
  - 이때도 브라우저는 서버로 요청을 보내지 않아야 합니다.

### 위 조건을 만족시켜주는 브라우저 API

- pushState, replaceState 함수
- popstate 이벤트

### spa 2

- `react-router-dom` 사용
  - 상태 관리
  - 코드 스플리팅 가능
  - js가 커지면 처음 들어갈 때 오래 걸림
  - `npm install react-router-dom`
- `BrowserRouter` : 현제 페이지의 상태값을 관리 해줍니다.
- `Link` : to에 해당하는 경로로 이동해줌
- `Router` : path 경로에 따라 어던 컴포넌트를 렌더링 할지 결정을 해 줍니다.
  - exact를 통해 필요한 것만 가져옵니다.
  - Router에 속성값으로 match를 줄 수 있고, match의 url 값은 해당 라우터가 매칭된 url의 일부분을 의미합니다.
  - `:` 파라미터를 쓰겠다고 선언한 것
  - **react-router-dom v5 사용하기** , v6은 다름