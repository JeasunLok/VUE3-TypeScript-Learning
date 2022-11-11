// readonly修饰符：首先是一个关键字，对类中的属性成员进行修饰，修饰后，该属性成员就不能在外部被随意地修改
// 构造函数中可以对只读的属性成员的数据进行修改
// 如果构造函数中没有任何参数，类中的属性成员此时已经使用readonly进行修饰了，那么外部也不能对此属性进行修改
// 构造函数中的参数可以使用readonly进行修饰，一旦修饰了，该类中就有了这个只读的成员属性了，外部可以访问，但是不能修改
// 构造函数中的参数可以使用public及private和protected进行修饰，无论是用什么进行修饰，该类中都会自动添加这样一个属性成员
(() => {

    // readonly 修饰类中的成员操作

    // class Person {
    //     // 属性
    //     // readonly name: string = "大甜甜" // 初始值
    //     readonly name: string // 初始值

    //     // 构造函数
    //     constructor(name: string = "大甜甜") {
    //         this.name = name
    //         // this.name = "哈哈"
    //     }
    //     sayHi() {
    //         console.log("考尼齐瓦", this.name)
    //         // 类中的普通方法中，也是不能修改readonly修饰的成员属性值
    //         // this.name = "大甜甜"
    //     }
    // }

    // // 实例化对象
    // const person: Person = new Person("小甜甜")

    // console.log(person)
    // console.log(person.name)
    // 此时无法修改，因为name属性为只读
    // person.name = "大甜甜"
    // console.log(person.name)

    // readonly修饰类中的构造函数中的参数(参数属性)

    class Person {
        // 构造函数
        // 构造函数中的name参数，一旦使用readonly进行修饰后，那么该name参数可以叫做参数属性
        // 构造函数中的name参数，一旦使用readonly进行修饰后，那么Person中就有了一个name的属性成员
        // 构造函数中的name参数，一旦使用readonly进行修饰后，外部也无法修改类中的name属性成员值

        // constructor(readonly name: string = "大甜甜") {
        //     this.name = name
        //     // this.name = "哈哈"
        // }

        // 构造函数中的name参数，一旦使用public进行修饰后，那么Person类中就有了一个共有的name属性成员
        constructor(public name: string = "大甜甜") {
            this.name = name
            // this.name = "哈哈"
        }

        // // 构造函数中的name参数，一旦使用public进行修饰后，那么Person类中就有了一个私有的name属性成员
        // constructor(private name: string = "大甜甜") {
        //     this.name = name
        //     // this.name = "哈哈"
        // }

        // // 构造函数中的name参数，一旦使用public进行修饰后，那么Person类中就有了一个受保护的name属性成员（只能在本类和派生类中访问）
        // constructor(protected name: string = "大甜甜") {
        //     this.name = name
        //     // this.name = "哈哈"
        // }


        sayHi() {
            console.log("考尼齐瓦", this.name)
            // 类中的普通方法中，也是不能修改readonly修饰的成员属性值
            // this.name = "大甜甜"
        }
    }

    // 实例化对象
    const person: Person = new Person("小甜甜")
    console.log(person)
    person.name = "佐助"
    console.log(person.name)
})()