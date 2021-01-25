var imgFunc = (function(){
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);
    return {
        setSrc: function(src) {
            imgNode.src = src;
        }
    }
})();
var proxyImage = (function() { 
    // 图片可以做预加载。
    var img = new Image(); 
    // 利用浏览器的缓存，当另外的image加载完成，另一个直接引用
    img.onload = function() {
        console.log('onload');
        // set the real src
        imgFunc.setSrc(this.src); 
    }
    return {
        setSrc: function(src) {
            // set loading image's src
            imgFunc.setSrc('file:///Users/apple/Desktop/binji.jpeg');
            img.src = src;
        }
    }
})();

proxyImage.setSrc('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.jpost.com%2Fimage%2Fupload%2Ff_auto%2Cfl_lossy%2Ft_Article2016_ControlFaceDetect%2F421198&refer=http%3A%2F%2Fimages.jpost.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614065437&t=db5090328bd70e6e58aa39ba2da8943c');
