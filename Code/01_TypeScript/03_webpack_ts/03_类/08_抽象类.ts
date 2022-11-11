// 抽象类：包含抽象方法（抽象方法一般没有任何的具体内容的实现），也可以包含实例方法，抽象类是不能够被实例化的，为了让子类进行实例化及实现内部的抽象方法
// 抽象类的目的和作用都是为了子类进行服务的
(() => {
    abstract class Animal {
        // 抽象属性（不常用）
        // abstract name: string

        // 抽象方法
        abstract eat()
        // 报错：抽象方法不能有具体的实现
        //     abstract eat(){
        //         console.log('趴着吃')
        //     }
        // 实例方法
        sayHi() {
            console.log('您好啊')
        }
    }

    class Dog extends Animal {
        // 抽象属性
        // name:string = '小黄'
        // 重新地实现抽象类中的方法，此时这个方法就是当前Dog类的实现方法
        eat() {
            console.log('舔着吃,真好吃')
        }
    }

    // 不能实例化抽象类的对象
    // const ani:Animal = new Animal()

    // 实例化Dog类的对象
    const dog: Dog = new Dog()
    dog.eat()
    // console.log(dog.name)
    // 调用的是抽象类中的实例方法
    dog.sayHi()
})()