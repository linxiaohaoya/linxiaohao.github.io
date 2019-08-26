function $(selector){
	var doms = document.querySelectorAll(selector);
	if(doms.length == 1){
		return doms[0];
	}else{

		return Array.prototype.slice.bind(doms,0)();
		// return Array.prototype.slice.apply(doms,[0]);
		// return Array.prototype.slice.call(doms,0);
	}
}


// 获取相对于页面的坐标
function getPageCoords(selector){
	var selectorParent = $(selector);
	var offsetX = selectorParent.offsetLeft;
	var offsetY = selectorParent.offsetTop;
	// 如果获取到多个元素的时候
	var coordArr = [];

	// 先判断获取的是一个元素还是一个数组 
	if(Array.isArray(selectorParent)){
		// 这个时候代表我们获取到的是多个元素
		selectorParent.forEach(function(item,index){
			coordArr.push(getPageCoord(item));
		});
		return coordArr;

	}else{
		return getPageCoord(selectorParent);
	}
}


// 单DOM的版本
function getPageCoord(dom){
	var selectorParent = dom;
	var offsetX = selectorParent.offsetLeft;
	var offsetY = selectorParent.offsetTop;
	// 获取当前的DOM对象
		while(selectorParent.offsetParent){
			selectorParent = selectorParent.offsetParent;
			offsetX += selectorParent.offsetLeft;
			offsetY += selectorParent.offsetTop;
		}

		return {
			offsetX: offsetX,
			offsetY: offsetY
		}
}


// 浮点计算或整数计算的方法
function Calc(){
	// 判断是否引入依赖并且提示
	if(!window.Big){
		console.error("请引入Big");
		return null;
	}
	// 加法函数
	Calc.prototype.plus = function(){
		var args = Array.prototype.slice.call(arguments,0);
		var sum = new Big(0);
		args.forEach(function(num,index){
			sum = sum.plus(num);
		});

		return sum.toString();
	}

	// 减法函数
	Calc.prototype.minus = function(){
		var args = Array.prototype.slice.call(arguments,0);
		var result = null;
		args.forEach(function(num,index){
			if(index === 0){
				result = new Big(num);
			}else{
				result = result.minus(num);
			}
		});

		return result.toString();
	}

	// 乘法方法
	Calc.prototype.ride = function(){
		var args = Array.prototype.slice.call(arguments,0);
		var result = new Big(1)
		args.forEach(function(num,index){
			result = result.times(num)
		});

		return result.toString();
	}


	// 减法函数
	Calc.prototype.except = function(){
		var args = Array.prototype.slice.call(arguments,0);
		var result = null;
		args.forEach(function(num,index){
			if(index === 0){
				result = new Big(num);
			}else{
				result = result.div(num);
			}
		});

		return result.toString();
	}


}








