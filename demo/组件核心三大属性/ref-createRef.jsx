class Demo extends React.Component {
  /**
   * React.createRef调用后返回一个容器，该容器可以存储被ref所标识的节点
   */
  myRef = React.createRef();
  myRef2 = React.createRef();

  render() {
    return (
      <div>
        <input ref={this.myRef} type="text" placeholder="点击按钮提示数据"></input>&nbsp;
        <button onClick={this.btn1}>点我提示左侧数据</button>
        &nbsp;
        <input onBlur={this.btn2} ref={this.myRef2} type="text" placeholder="点击按钮提示数据"></input>&nbsp;
      </div>
    );
  }
  btn1 = () => {
    console.log(this.myRef.current);
  };
  btn2 = () => {
    console.log(this.myRef2.current);
  };
}

ReactDOM.render(<Demo />, document.getElementById("demo"));

