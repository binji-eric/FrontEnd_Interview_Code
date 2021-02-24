let element = document.getElementById('myDiuv')

element.onmouseover = debounce(print, 1000, true);

function debounce(func, delay, immediate) {
      let timer = null;
      return (...args) => {
            // 第一次可以立即执行
            if(immediate && !timer) {
                func.call(this, ...args);
            }
            if(timer) {
                 clearTimeout(timer);
             }
             timer = setTimeout(() => {
                    func.call(this, ...args)    
              }, delay)
              // 可以取消
              debounce.cancel = function() {
                       clearTimeout(timer);
               }
      }
}

function print() {
       console.log('hello world');
}
