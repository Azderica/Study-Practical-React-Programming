function LikeButton() {
  // 현재 상태를 liked라는 상탯값에 저장하고, setLiked로 상탯값을 변경합니다.
  const [liked, setLiked] = React.useState(false)
  const text = liked ? '좋아요 취소' : '좋아요'
  // 리액트 요소를 반환, 리액트에서 UI를 표현하는 가장 작은 단위를 리액트 요소로 보면됨
  // 첫번째 매개변수는 html 태그 요소, 두번째 매개변수는 속성값, 세번째 이후는 children
  return React.createElement(
    'button',
    { onClick: () => setLiked(!liked) },
    text
  )
}

const domContainer = document.getElementById('root')
ReactDOM.render(
  React.createElement(
    'div',
    null,
    React.createElement(LikeButton),
    React.createElement(LikeButton),
    React.createElement(LikeButton)
  ),
  domContainer
)
