//非受控组件：用的时候取值
class Demo01 extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        用户名：
        <input ref={(c) => (this.username = c)} type="text" name="username" />
        密码：
        <input ref={(c) => (this.password = c)} type="passowrd" name="password" />
        <br />
        <button>登陆</button>
      </form>
    );
  }
  handleSubmit = (e) => {
    e.preventDefault(); //阻止表单提交
    const { username, password } = this;
    alert(`用户名${username.value}，密码${password.value}`);
  };
}

//受控组件：类似vue中的v-model
class Demo02 extends React.Component {
  //初始化
  state = { username: "", password: "" };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        用户名：
        <input onChange={this.saveUsername} type="text" name="username" />
        密码：
        <input ref={(c) => (this.password = c)} type="passowrd" name="password" />
        <br />
        <button>登陆</button>
      </form>
    );
  }
  saveUsername = (e) => {
    this.setState({ username: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    alert(`用户名${username}，密码${password}`);
  };
}

ReactDOM.render(<Demo02 />, document.getElementById("demo"));

