const data = ["Angular", "Vue", "React"];
const vdom = (
  <div>
    <h1>前端框架列表</h1>
    <ul>
      {data.map((res, id) => {
        return <li key={id}>{res}</li>;
      })}
    </ul>
  </div>
);
ReactDOM.render(vdom, document.getElementById("demo"));

