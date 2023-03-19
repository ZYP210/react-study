"use strict";
function LikeButton() {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return "You liked this!";
  }

  return React.createElement("button", { id: "button", onClick: () => setLiked(true) }, "Like");
}

const domContainer = document.getElementById("demo");

//createElement(标签名，标签属性，标签体内容)
ReactDOM.render(React.createElement(LikeButton), domContainer);

