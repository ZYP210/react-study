//函数柯里化：通过函数调用，继续返回函数的方式，实现多次接受参数最后统一处理的函数编码形式
class Demo extends React.Component {
  //初始化
  state = { username: "", password: "" };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        用户名：
        <input onChange={this.saveData("username")} type="text" name="username" />
        密码：
        <input onChange={this.saveData("password")} type="passowrd" name="password" />
        <br />
        <button>登陆</button>
      </form>
    );
  }

  saveData = (type) => {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    alert(`用户名${username}，密码${password}`);
  };
}

//也可以不使用柯里化
class Demo02 extends React.Component {
  //初始化
  state = { username: "", password: "" };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        用户名：
        <input onChange={(e) => this.saveData(e, "username")} type="text" name="username" />
        密码：
        <input onChange={(e) => this.saveData(e, "password")} type="password" name="password" />
        <br />
        <button>登陆</button>
      </form>
    );
  }

  saveData = (e, type) => {
    this.setState({ [type]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    alert(`用户名${username}，密码${password}`);
  };
}

ReactDOM.render(<Demo02 />, document.getElementById("demo"));

