var myScroll;
var pullDownFlag, pullUpFlag;
var pullDown, pullUp;
var spinner;
console.log(1)
function positionJudge() {
	console.log(this.maxScrollY)
	if (this.y > 40) { //判断下拉
		pullDown.innerHTML = "放开刷新页面";
		pullDownFlag = 1;
	} else if (this.y < (this.maxScrollY - 40)) { //判断上拉
		pullUp.innerHTML = "放开刷新页面";
		pullUpFlag = 1;
	}
}

function action() {
	console.log(2)
	if (pullDownFlag == 1) {
		pullDownAction();
		pullDown.innerHTML = "下拉刷新…";
		pullDownFlag = 0;
	} else if (pullUpFlag == 1) {
		pullUpAction();
		pullUp.innerHTML = "上拉刷新…";
		pullUpFlag = 0;
	}
}

function loaded() {
	pullDownFlag = 0;
	pullUpFlag = 0;
	pullDown = document.getElementById("pullDown");
	pullUp = document.getElementById("pullUp");
	spinner = document.getElementById("spinner");
	myScroll = new IScroll("#wrapper", {
		/*需要使用iscroll-probe.js才能生效probeType：1  滚动不繁忙的时候触发
		probeType：2  滚动时每隔一定时间触发
		probeType：3  每滚动一像素触发一次*/
		probeType: 3,
		//        momentum: false,//关闭惯性滑动
		mouseWheel: true, //鼠标滑轮开启
		scrollbars: true, //滚动条可见
		fadeScrollbars: true, //滚动条渐隐
		interactiveScrollbars: true, //滚动条可拖动
		shrinkScrollbars: 'scale', // 当滚动边界之外的滚动条是由少量的收缩
		useTransform: true, //CSS转化
		useTransition: true, //CSS过渡
		bounce: true, //反弹
		freeScroll: false, //只能在一个方向上滑动
		startX: 0,
		startY: 0,
		//        snap: "li",//以 li 为单位
	});
	myScroll.on('scroll', positionJudge);
	myScroll.on("scrollEnd", action);
}

function pullDownAction() {
//	spinner.style.display = "block";
	setTimeout(function() {
		window.location.reload();
//		spinner.style.display = "none";
		myScroll.refresh();
	}, 1000);
}

function pullUpAction() {
//	spinner.style.display = "block";
	setTimeout(function() {
		var ul = document.getElementById("list");
//		var lis = ul.getElementsByTagName("li");
		for (var i = 0; i < 3; i++) {
//			lis[i].innerHTML = "上拉刷新";
			$("#list").append("<li>123123123123</li>")
		}
//		spinner.style.display = "none";
		myScroll.refresh();
	}, 300);
}

document.addEventListener('touchmove', function(e) {
	e.preventDefault();
}, false);
//对开始拖动和拖动结束的监听，这是iScroll5的一个坑，positionJudge和action都是function，但是如果直接以function(){}的方式写在里面的话，调用会出问题，所以要单独写在外面