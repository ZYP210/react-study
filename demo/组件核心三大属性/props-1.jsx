class Weather extends React.Component {
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
//对props进行类型，必要性，默认值的限制
Weather.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string,
  speak: PropTypes.func,
};
Weather.defaultProps = {
  sex: "人妖",
  age: 18,
};

ReactDOM.render(<Weather name="zmh" age={18} speak={fun} />, document.getElementById("demo1"));
const fun = () => {};
const p = { name: "zyp", age: 10, sex: "男" };
//批量传递props属性
ReactDOM.render(<Weather {...p} />, document.getElementById("demo"));

