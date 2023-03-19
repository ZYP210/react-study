class Weather extends React.Component {
  state = { isHot: true };
  render() {
    //读取状态
    const isHot = this.state.isHot;
    return <h2 onClick={this.btn}>今天天气{isHot ? "炎热" : "冻屁"}</h2>;
  }
  //自定义方法：要用赋值语句+箭头函数
  btn = () => {
    const isHot = this.state.isHot;
    this.setState({ isHot: !isHot });
  };
}

ReactDOM.render(<Weather />, document.getElementById("demo"));

