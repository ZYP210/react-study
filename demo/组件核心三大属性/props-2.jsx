class Weather extends React.Component {
  constructor(props) {
    super(props);
    //如果需要在构造器中使用this.props,则需要接收传递props
    console.log(this.props);
  }
  static propTypes = {
    name: PropTypes.string.isRequired,
    sex: PropTypes.string,
    speak: PropTypes.func,
  };
  static defaultProps = {
    sex: "人妖",
    age: 18,
  };
  render() {
    return (
      <ul>
        {Object.entries(this.props).map((res, index) => {
          return <li key={index}>{`${res[0]}:${res[1]}`}</li>;
        })}
      </ul>
    );
  }
}
ReactDOM.render(<Weather name="zmh" age={18} speak={fun} />, document.getElementById("demo1"));
function fun() {
  console.log("fun");
}
const p = { name: "zyp", age: 10, sex: "男" };
//批量传递props属性
ReactDOM.render(<Weather {...p} />, document.getElementById("demo"));

