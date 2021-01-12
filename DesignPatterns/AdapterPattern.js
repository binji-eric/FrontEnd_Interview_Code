 
var googleMap = { 
    show: function(){
        console.log( '开始渲染⾕谷歌地图' ); 
    }
};

var baiduMap = {
    display: function(){
        console.log( '开始渲染百度地图' );
    } 
};

var baiduMapAdapter = { 
    show: function(){
        return baiduMap.display(); 
    }
};

renderMap( googleMap ); // 输出:开始渲染⾕谷歌地图 
renderMap( baiduMapAdapter ); // 输出:开始渲染百度地图