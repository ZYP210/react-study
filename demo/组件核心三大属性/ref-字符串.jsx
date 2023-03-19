class Demo extends React.Component {
  render() {
    return (
      <div>
        <input ref="input1" type="text" placeholder="点击按钮提示数据"></input>&nbsp;
        <button ref={this.btn1} onClick={this.btn}>
          点我提示左侧数据
        </button>
        &nbsp;
        <input onBlur={this.btn2} ref="input2" type="text" placeholder="失焦提示数据"></input>&nbsp;
      </div>
    );
  }
  btn1 = () => {
    console.log(this.refs.input1.value);
  };
  btn2 = () => {
    console.log(this.refs.input2.value);
  };
}

ReactDOM.render(<Demo />, document.getElementById("demo"));

