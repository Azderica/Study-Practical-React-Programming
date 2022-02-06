function LikeButton() {
  // 현재 상태를 liked라는 상탯값에 저장하고, setLiked로 상탯값을 변경합니다.
  const [liked, setLiked] = React.useState(false);
  const text = liked ? '좋아요 취소' : '좋아요'; // 리액트 요소를 반환, 리액트에서 UI를 표현하는 가장 작은 단위를 리액트 요소로 보면됨
  // 첫번째 매개변수는 html 태그 요소, 두번째 매개변수는 속성값, 세번째 이후는 children

  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(!liked)
  }, text);
}

function Container() {
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LikeButton, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD604\uC7AC \uCE74\uC6B4\uD2B8: "), /*#__PURE__*/React.createElement("span", {
    style: {
      marginRight: 20
    }
  }, count), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "\uC99D\uAC00"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count - 1)
  }, "\uAC10\uC18C")));
}

const domContainer = document.getElementById('root');
ReactDOM.render(React.createElement(Container), domContainer);