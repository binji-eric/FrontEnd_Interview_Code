(function(){
    // 保证一个类只有一个实例，并且提供一个访问它的全局访问点
    function getSingle(fn) {
        let res = null;
        return function() {
            // 用一个变量标识当前是否已经为某个类创建过对象，
            // 如果是，则在下一次获取这个类的实例时，直接返回之前创建的对象
            return res || (res = fn.apply(this, arguments));
        }
    }
    function createLoginLayer() {
        var div = document.createElement('div');
        div.innerHTML = "this is a notification";
        div.style.display = "none";
        body.document.appendChild(div);
        return div;
    }

    const createSingleLoginLayer = getSingle(createLoginLayer);
    
    document.getElementById('loginButon').onclick = function() {
        const loginLayer = createSingleLoginLayer();
        loginLayer.style.display = "block";
    }

})();