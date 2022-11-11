//  ts中书写js中的类，演示效果
(() => {
    // 定义一个类型
    class Person {
        // 定义一个构造器函数
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullname = this.firstName + '_' + this.lastName;
        }
    }
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    // 实例化对象
    const person = new Person('诸葛', '孔明');
    console.log(showFullName(person));
})();
