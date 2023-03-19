//创建函数式组件(首字母得大写)
const FunComponent = () => {
  console.log(this); //此处的this是undefined，因为babel编译后开启了严格模式

  return <h2>我是函数组件</h2>;
};

//创建类式组件(自定义类必须继承 React.Component，)
class ClassComponent extends React.Component {
  //必须重写render方法，且render必须有返回值
  render() {
    //render的this是ClassComponent组件实例对象
    console.log(this);
    return <h2>我是类组件</h2>;
  }
}

//渲染组件到页面（标签必须闭合）
// 1.react解析组件标签，找到Component组件
// 2.
//   a.发现组件是函数定义的，随后调用该函数
//   b.发现组件是类定义的，随后new出该类实例，并通过该实例调用到该实例原型上的render方法
// 3.将返回的虚拟dom转成真实dom
//
ReactDOM.render(<ClassComponent />, document.getElementById("demo"));

