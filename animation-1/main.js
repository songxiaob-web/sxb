(function () {
	let str = `
	// 让我们的立方体转起来
	ul {
		padding: 0;
		margin: 0;
		list-style-type: none;
	}
	#navContent{
		height:400px;
		overflow:scroll;
	}
	.stage {
		position: relative;
		width: 100%;
		height: 360px;
		display: flex;
		flex-direction:column;
		perspective: 800px;
	}
	.stage .three-d-box {
		/*动画容器居中在舞台元素中间*/
		width: 200px;
		height: 200px;
		margin: auto;
		transform-style: preserve-3d;
		/*设置3D属性让子元素三维空间呈现*/
		animation: move 3s linear infinite;
		/*设置动画*/
	}
	.stage .three-d-box>li {
		/*设置动画子元素公共属性*/
		position: absolute;
		width: 200px;
		height: 200px;
		left: 0;
		top: 0;
		font-size: 50px;
		line-height: 200px;
		text-align: center;
		opacity: 0.5;
	}
	/*为了保证我们对立方体位置的控制，我们需要让动画
	容器在立方体的中间位置*/
	.stage .three-d-box>li:nth-child(1) {
		background-color: red;
		transform: translateZ(-100px);
	}
	.stage .three-d-box>li:nth-child(2) {
		background-color: greenyellow;
		transform: translateZ(100px);
	}
	.stage .three-d-box>li:nth-child(3) {
		background-color: cornflowerblue;
		transform: rotateX(90deg) translateZ(100px);
	}
	.stage .three-d-box>li:nth-child(4) {
		background-color: orangered;
		transform: rotateX(-90deg) translateZ(100px);
	}
	.stage .three-d-box>li:nth-child(5) {
		background-color: deeppink;
		transform: rotateY(90deg) translateZ(100px);
	}
	.stage .three-d-box>li:nth-child(6) {
		background-color: lightcoral;
		transform: rotateY(-90deg) translateZ(100px);
	}
	/*接下来我们让方块转起来*/
	@keyframes move {
		/*设置动画关键帧*/
		0% {
			transform: rotateX(0deg);
		}
		25% {
			/*竖着转*/
			transform: rotateX(180deg);
		}
		50% {
			/*竖着绕圈转*/
			transform: rotateX(360deg) rotateY(0deg);
		}
		75% {
			/*想怎么转怎么转*/
			transform: rotateX(360deg) rotateY(180deg);
		}
		100% {
			/*花式转*/
			transform: rotateX(360deg) rotateY(360deg);
		}
	}
	
	完结撒花...
	`

	var strs = '';
	var num = 0;
	var subText = function () {
		strs += str.substr(num, 1);
		num++;
		return strs
	}
	var styles = document.querySelector('style');
	console.log(str.length, styles.innerHTML);
	var navContent = document.getElementById('navContent');
	var childContent = document.getElementById('childContent');
	let times = 100;
	let id = setTimeout(function timeOut() {
		if (num >= str.length) {
			console.log('zou wanle')
			window.clearTimeout(id);
			return
		}

		var styleInnerHtml = styles.innerHTML;
		styles.innerHTML = subText();
		childContent.innerHTML = subText();
		navContent.scrollTop = navContent.scrollHeight;
		setTimeout(timeOut, times)
	})
}).call(window)