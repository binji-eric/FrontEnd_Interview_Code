// 被观察者
class Collection{
    constructor(){
        this.subs=[]
    }
    addSub(sub){
        this.subs.push(sub)
    }
    removeSub(sub){
        let index=this.subs.indexOf(sub)
        if(index>-1){
            this.subs.splice(index,1)
        }
    }
    notify(){
        const subs=this.subs.slice()
        subs.forEach(sub=>{
            // 调用同一的接口
            sub.update()
        })
    }
}

// 观察者
class Observer{
    constructor(name){
        this.name=name
    }
    update(){
        console.log('name is changed',this.name)
    }
}
let collection=new Collection()
let ob1=new Observer("Biden")
let ob2=new Observer("Trump")
let ob3=new Observer("Putin")
collection.addSub(ob1)
collection.addSub(ob2)
collection.notify()
console.log("**************")
collection.removeSub(ob2)
collection.notify()
console.log("**************")
collection.addSub(ob3)
collection.notify()