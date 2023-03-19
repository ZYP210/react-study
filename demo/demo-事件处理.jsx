class Demo extends React.Component {
  /**
   * 通过onXxx属性，指定事件处理函数（与原生不同其需要驼峰,React二次封装为了更好的兼容性）
   * React中的事件是通过事件委托方式处理的（委托给组件最外层的元素）
   * 通过event.target得到发生事件的dom元素（不过度使用ref）
   */
  myRef = React.createRef();
  myRef2 = React.createRef();

  render() {
    return (
      <div>
        <input ref={this.myRef} type="text" placeholder="点击按钮提示数据"></input>&nbsp;
        <button onClick={this.btn1}>点我提示左侧数据</button>
        &nbsp;
        <input onBlur={this.btn2} type="text" placeholder="点击按钮提示数据"></input>&nbsp;
      </div>
    );
  }
  btn1 = () => {
    console.log(this.myRef.current);
  };
  //官方推荐尽量少用ref，所以可以使用event获取当前dom
  btn2 = (event) => {
    console.log(event.target);
  };
}

ReactDOM.render(<Demo />, document.getElementById("demo"));

