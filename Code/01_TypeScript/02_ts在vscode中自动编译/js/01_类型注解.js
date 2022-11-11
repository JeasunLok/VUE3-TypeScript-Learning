//类型注解:一种轻量级地为函数或者变量添加的约束
(() => {
    function showMsg(str) {
        return 'chuangqiamingyueguang' + str;
    }
    let msg = 'yishidishangshuang';
    //  msg是一个数组
    // let msg = [10,20,30]
    // 智能的错误提示信息
    console.log(showMsg(msg));
})();
