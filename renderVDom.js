vdom  = {
    tag: 'div',
    props: [{}, {}],
    children: [vdom1, vdom2]
}

function renderVDom(vdom) {
    // 如果是字符串或者数字，创建一个文本节点
    if(typeof vdom === 'string' || typeof vdom === 'number') {
        return document.createTextNode(vdom);
    }
    // 创建真实DOM
    const element = document.createElement(vdom.tag);
    // 设置属性
    setProps(element, vdom.props);
    // 遍历子节点，并获取创建真实DOM，插入到当前节点
    element.children.forEach((vdomEle) => {
        element.appendChild(renderVDom(vdomEle));
    })
    // 虚拟 DOM 中缓存真实 DOM 节点
    vdom.dom = element;
    // 返回 DOM 节点
    return element;
}

function setProps (element, props) {
    Object.entries(props).forEach(([key, value]) => {
        element.setAttribute(
            // className使用class代替
            key === 'className'? 'class': key, value
        )
    })
}