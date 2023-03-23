class Demo extends React.Component {
  state = { data: new Date() };
  componentDidMount() {
    setInterval(() => {
      this.setState({ data: new Date() });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>hello</h1> <input type="text" />
        <span>现在是 {this.state.data.toTimeString()}</span>
      </div>
    );
  }
}

//
class Person extends React.Component {
  state = {
    person: [
      { id: 1, name: "小李", age: 22 },
      { id: 2, name: "小张", age: 18 },
    ],
  };
  add = () => {
    const { person } = this.state;
    const p = { id: person.length + 1, name: "小王", age: 20 };
    this.setState({ person: [p, ...person] });
  };
  render() {
    return (
      <div>
        <h2>展示人员信息</h2>
        <button onClick={this.add}>添加一个小王</button>
        <ul>
          {this.state.person.map((res, index) => {
            return (
              <li key={index}>
                {res.name}---{res.age} <input type="text" />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<Person />, document.getElementById("demo"));
