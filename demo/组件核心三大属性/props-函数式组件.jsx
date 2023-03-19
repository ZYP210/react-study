const Person = (props) => {
  return (
    <ul>
      {Object.entries(props).map((res, index) => {
        return <li key={index}>{`${res[0]}:${res[1]}`}</li>;
      })}
    </ul>
  );
};
Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string,
};
Person.defaultProps = {
  sex: "人妖",
  age: 18,
};
const p = { name: "zyp", age: 10, sex: "男" };
ReactDOM.render(<Person {...p} />, document.getElementById("demo"));

