class Demo extends React.Component {
  state = { opacity: 1 };
  //组件挂载完毕后的钩子
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("111");

      if (this.state.opacity <= 0) {
        this.setState({ opacity: 1 });
      } else this.setState({ opacity: this.state.opacity - 0.1 });
    }, 200);
  }

  //组件将要被卸载
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  //初始化渲染、状态更新后的钩子
  render() {
    return (
      <div>
        <h2 style={{ opacity: this.state.opacity }}>React学不会怎么办</h2>
        <button onClick={this.death}>不活咯</button>
      </div>
    );
  }

  death = () => {
    //卸载组件
    ReactDOM.unmountComponentAtNode(document.getElementById("demo"));
  };
}

ReactDOM.render(<Demo />, document.getElementById("demo"));

