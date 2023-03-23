class Demo extends React.Component {
  state = { newsArr: [] };
  componentDidMount() {
    setInterval(() => {
      const { newsArr } = this.state;
      //模拟一条新闻
      const news = "新闻" + newsArr.length + 1;
      this.setState({ newsArr: [...newsArr, news] });
    }, 1000);
  }
  getSnapshotBeforeUpdate() {
    return this.refs.list.scrollHeight;
  }
  componentDidUpdate(preProps, preState, height) {
    this.refs.list.scrollTop += this.refs.list.scrollHeight - height;
  }
  render() {
    return (
      <ul className="list" ref="list">
        {this.state.newsArr.map((res, index) => {
          return (
            <li className="news" key={index}>
              {res}
            </li>
          );
        })}
      </ul>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById("demo"));
