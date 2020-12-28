const EventUtil = {
	// 添加事件
	addEvent: function(element, type, handler) {
		if(element.addEventListener) {
			element.addEventListener(type, handler);
		} else if(element.attachEvent) {
			element.attachEvent('on'+type, handler);
		} else {
			element['on' + type] = handler;
		}
	},
	// 移除事件
	removeEvent: function(element, type, handler) {
		if(element.removeEventListener) {
			element.removeEventListener(type);
		} else if(element.detachEvent) {
			element.detachEvent('on'+type, handler);
		} else {
			element['on'+type] = null;
		}
	},
	// 获取目标
	getTarget: function(element) {
		return element.target || element.srcElement;
	},
	// 阻止事件
	stopPropagation: function(element) {
		if(element.stopPropagation) {
			element.stopPropagation();
		} else {
			element.cancelBubble = true;
		}
	},
	// 取消事件的默认行为
	preventDefault: function(element) {
		if(element.preventDefault) {
			element.preventDefault();
		} else {
			element.returnValue = false;
		}
	}
}