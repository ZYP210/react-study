class Demo extends React.Component {
  state = { isHot: false };
  render() {
    const { isHot } = this.state;
    return (
      <div>
        <span>今天天气{isHot ? "热死了" : "冷屁了"}</span>
        <button onClick={this.btn1}>点我提示左侧数据</button>
        <br />
        <input
          ref={(currentNode) => {
            {
              /**
             如果ref回调函数是以【内联函数】方式定义的，在更新过程中会被执行两次，第一次入参是null，第二次才是当前dom。
             是因为在每次渲染时会创建一个新的函数实例，所以React会清空旧的ref再创建新的.
             */
            }
            this.input1 = currentNode;
            console.log(`@@1`, currentNode);
          }}
          type="text"
          placeholder="失焦提示数据"
        ></input>
        <br />
        <input ref={this.saveInput} onBlur={this.btn2} type="text"></input>
      </div>
    );
  }
  btn1 = () => {
    const { input1 } = this;
    this.setState({ isHot: !this.state.isHot });
    alert(input1.value);
  };
  btn2 = () => {
    const { input2 } = this;
    this.setState({ isHot: !this.state.isHot });
    alert(input2.value);
  };
  saveInput = (c) => {
    this.input2 = c;
    console.log("@@2", c);
  };
}

ReactDOM.render(<Demo />, document.getElementById("demo"));

