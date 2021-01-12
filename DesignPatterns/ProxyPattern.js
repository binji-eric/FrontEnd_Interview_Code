var imgFnc = (function(){
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);
    return {
        setSrc: function(src) {
            imgNode.src = src;
        }
    }
})();
var proxyImage = (function() { 
    var img = new Image(); 
    // 利用浏览器的缓存，当另外的image加载完成，另一个直接引用
    img.onload = function() {
        // set the real src
        imgFunc.setSrc(this.src); 
    }
    return {
        setSrc: function(src) {
            // set loading image's src
            imgFunc.setSrc('./loading.gif');
            img.src = src;
        }
    }
})();

proxyImage.setSrc('./pic.png');
