//通过babel写jsx
//  jsx语法规则：
//   1.定义虚拟dom时，不要用引号
//   2.标签中混入js【表达式】需要{}
//   3.样式的类名是className
//   4.内联样式，要用对象的形式去写，又因为对象是js，所以外层需要嵌套{}，所以形成了{{}}
//   5.虚拟dom不能有多个根标签
//   6.标签必须闭合
//   7.标签首字母
//          a.小写字母开头，则将标签转为html同名元素，若html无此标签则报错
//          b.大写字母开发，react就去渲染对应的组件，若组件没定义则报错

const user = "zyp";
const vdom = (
  <h1 style={{ color: "blue" }} className="user">
    {user}
  </h1>
);
ReactDOM.render(vdom, document.getElementById("demo"));

