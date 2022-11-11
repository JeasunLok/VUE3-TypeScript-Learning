(()=>{
    // str这个参数是string类型的
    function sayHi(str:string){
        return '你好啊' + str
    }
    let text = '小甜甜'
    console.log(sayHi(text))
})()

//总结：ts文件中如果没有ts语法只有js语法，可以直接在浏览器里编译。
//     如果有ts语法，需要先把ts编译成js才可以编译。

// ts文件中的形参使用了某个类型进行修饰，在js中就不会有这个类型
// ts文件中的变量用let修饰，而js中用var