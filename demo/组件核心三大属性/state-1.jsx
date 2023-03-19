class Weather extends React.Component {
  constructor(props) {
    super(props);
    //初始化状态
    this.state = { isHot: true };
  }
  render() {
    //读取状态
    const isHot = this.state.isHot;
    return <h2 onClick={this.btn.bind(this)}>今天天气{isHot ? "炎热" : "冻屁"}</h2>;
  }
  btn() {
    //状态不可直接更改，需要借助  setState 内置api去更改
    // this.state.isHot = !this.state.isHot;
    const isHot = this.state.isHot;
    //setState是更新不是替换
    this.setState({ isHot: !isHot });
  }
}

ReactDOM.render(<Weather />, document.getElementById("demo"));

