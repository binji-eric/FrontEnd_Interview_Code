 
import React from 'react' const withLog = Component=>{
    // 类组件
    class NewComponent extends React.Component{
        componentWillMount(){ 
            console.time(`CompoentRender`) 
            console.log(`准备完毕了了`)
        } 
        render(){
            return <Component {...this.props}></Component> 
        }
        
        componentDidMount(){ 
            console.timeEnd(`CompoentRender`) 
            console.log(`渲染完毕了了`)
        } 
    }
  return NewComponent
}
export {withLog}

@withLog
class XX