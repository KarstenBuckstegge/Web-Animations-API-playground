var boxKeyframes = [
	{transform: 'translateX(0px) rotate(0deg)', opacity: '1'},
	{transform: 'translateX(600px) rotate(720deg)', opacity: '0'}
]

var boxTiming = {
	direction: "alternate",
	duration: 1500,
	easing: "cubic-bezier(0,1,1,0)",
	iterations: 5
}

var box = document.getElementById("box").animate(boxKeyframes,boxTiming);

var play = document.getElementById("play");
var pause = document.getElementById("pause");
var reverse = document.getElementById("reverse");
var finish = document.getElementById("finish");

document.getElementsByClassName('controls')[0].onclick = function(e) {
	switch(e.target) {
		case play:
			box.play();
			break;
		case pause:
			box.pause();
			break;
		case reverse:
			box.reverse();
			break;
		case finish:
			box.finish();
			break;
		default:
			break;
	}
};

box.onfinish = function () {
	console.log("We're done!");
};