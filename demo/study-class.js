//类的基本知识
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //speak放在了类的原型对象上，供实例使用
  //通过 p1实例调用speak时，this就是Person实例p1
  speak() {
    console.log(`我叫${this.name},我的年龄${this.age}`);
  }
}
class Student extends Person {
  constructor(name, age, girl) {
    super(name, age);
    this.girl = girl;
  }
  speak() {
    console.log(`我叫${this.name},我的年龄${this.age}我喜欢${this.girl}`);
  }
}
class Car {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  //类中可以直接写赋值语句。如下代码的含义：给Car的实力对象添加一个属性a=1
  a = 1;
}
const p1 = new Person("zyp", 18);
const s1 = new Student("zmh", 26, "ydx");
const c1 = new Car("911", 90);
s1.speak();

