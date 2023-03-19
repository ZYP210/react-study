class Demo extends React.Component {
  //构造器
  constructor(props) {
    console.log("1");
    super(props);
  }
  //组件将要挂载的钩子
  UNSAFE_componentWillMount() {
    console.log("2");
  }
  //组件挂载完毕后的钩子
  componentDidMount() {
    console.log("4");
  }
  state = { count: 0 };

  //组件将要被卸载
  componentWillUnmount() {
    console.log("willUnmount");
  }

  //组件是否应该被更新(默认返回true)控制组件更新的阀门
  shouldComponentUpdate() {
    console.log("1");
    return true;
    // return false;
  }
  //组件将要更新
  UNSAFE_componentWillUpdate() {
    console.log("2");
  }

  //组件更新完毕
  componentDidUpdate() {
    console.log("4");
  }

  //初始化渲染、状态更新后的钩子
  render() {
    console.log("3");
    return (
      <div>
        <h2 style={{ opacity: this.state.opacity }}>当前求和{this.state.count}</h2>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.unmount}>卸载组件</button>
      </div>
    );
  }

  add = () => {
    this.setState({ count: this.state.count + 1 });
  };
  unmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("demo"));
  };
}

ReactDOM.render(<Demo />, document.getElementById("demo"));

