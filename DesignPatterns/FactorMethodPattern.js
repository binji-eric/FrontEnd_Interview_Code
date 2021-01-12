// https://www.cnblogs.com/xiaogua/p/10502892.html
let  factory = function (role) {
    function superman() {
        this.name ='超级管理员',
        this.role = ['修改密码', '发布消息', '查看主页']
    }
    
    function commonMan() {
        this.name = '普通游客',
        this.role = ['查看主页']
    }
    
    switch(role) {
        case 'superman':
        return new superman();
        break;
        case 'man':
        return new commonMan();
        break;
        default:
        throw new Error('参数错误')
    }    
}
    
let superman = factory('superman');
let man = factory('man');