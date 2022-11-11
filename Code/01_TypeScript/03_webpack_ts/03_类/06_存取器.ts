// 存取器：让我们可以有效地控制对 对象中成员的访问，通过getters和setters来进行操作
(() => {
    // 外部可以传入姓氏和名字数据，同时使用set和get控制姓名的数据，外部也可以进行修改操作
    class Person {
        firstName: string
        lastName: string
        constructor(firstName: string, lastName: string) {
            this.firstName = firstName
            this.lastName = lastName
        }
        // 姓名的成员属性（外部可以访问，也可以修改）

        // 读取器---负责读取数据
        get fullName() {
            // 姓名====>姓氏加名字的拼接
            console.log('get中...')
            return this.firstName + '_' + this.lastName
        }

        // 设置器---负责设置数据
        set fullName(val) {
            // 姓名---->把获取到的姓氏和名字重新赋值给firstname和lastname
            console.log('set中...')
            let names = val.split('_')
            this.firstName = names[0]
            this.lastName = names[1]
        }
    }

    // 实例化对象
    const person: Person = new Person('东方', '不败')
    console.log(person)
    // 获取该属性成员的数据
    console.log(person.fullName)
    // 设置改属性成员的数据
    person.fullName = '诸葛_孔明'
    console.log(person.fullName)
})()