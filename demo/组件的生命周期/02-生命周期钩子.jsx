class Demo extends React.Component {
  //构造器
  constructor(props) {
    console.log("1");
    super(props);
  }
  //组件将要挂载的钩子
  // UNSAFE_componentWillMount() {
  //   console.log("2");
  // }
  //组件挂载完毕后的钩子
  componentDidMount() {
    console.log("4");
  }
  state = { count: 0 };

  //组件将要被卸载
  componentWillUnmount() {
    console.log("willUnmount");
  }

  //组件接收props调用
  // UNSAFE_componentWillReceiveProps() {}

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps", props, state);
    return props;
  }

  //组件是否应该被更新(默认返回true)控制组件更新的阀门
  shouldComponentUpdate() {
    console.log("1");
    return true;
    // return false;
  }
  //组件将要更新
  // UNSAFE_componentWillUpdate() {
  //   console.log("2");
  // }

  //在更新之前获取快照
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return "zyp";
  }

  //组件更新完毕
  componentDidUpdate(preProps, preState, snapShotValue) {
    console.log("4", preProps, preState, snapShotValue);
  }

  //初始化渲染、状态更新后的钩子
  render() {
    console.log("3");
    return (
      <div>
        <h2 style={{ opacity: this.state.opacity }}>当前求和{this.state.count}</h2>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.unmount}>卸载组件</button>
        <button onClick={this.force}>强制更新</button>
      </div>
    );
  }

  add = () => {
    this.setState({ count: this.state.count + 1 });
  };
  unmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("demo"));
  };
  force = () => {
    this.forceUpdate();
  };
}

class Demo01 extends React.Component {
  state = { carName: "奔驰" };
  render() {
    return (
      <div>
        A <Demo02 carName={this.state.carName} />
        <button onClick={this.changeCar}>换车</button>
      </div>
    );
  }
  changeCar = () => {
    this.setState({ carName: "保时捷" });
  };
}

class Demo02 extends React.Component {
  state = { test: 111 };

  //若state的值在任何时候都取决于props，那么可以使用此钩子
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps", props, state);
    return props;
  }
  render() {
    return <div>B {this.state.test}</div>;
  }
}

ReactDOM.render(<Demo name="zyp" />, document.getElementById("demo"));
