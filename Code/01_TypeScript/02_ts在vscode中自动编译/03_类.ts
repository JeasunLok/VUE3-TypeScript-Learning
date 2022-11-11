//  ts中书写js中的类，演示效果
(()=>{
    // 定义一个接口
    interface IPerson{
        firstName:string
        lastName:string
    }
    // 定义一个类型
    class Person{
        // 定义公共的字段（属性）
        firstName:string
        lastName:string
        fullname:string

        // 定义一个构造器函数
        constructor (firstName:string,lastName:string){
            this.firstName=firstName
            this.lastName=lastName
            this.fullname=this.firstName+'_'+this.lastName
        }
    }

    function showFullName(person:IPerson){
        return person.firstName + '_' + person.lastName
    }

    // 实例化对象
    const person = new Person('诸葛','孔明')
    console.log(showFullName(person))
})()