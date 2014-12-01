// ======================================================================== 
// 								Animation with Controls
// ========================================================================

// define keyframes for basic animation 
var boxKeyframes = [
	{transform: 'translateX(0px) rotate(0deg)', opacity: '1'},
	{transform: 'translateX(600px) rotate(720deg)', opacity: '0'}
];

var boxTiming = {
	direction: "alternate",
	duration: 1500,
	easing: "cubic-bezier(0,1,1,0)",
	iterations: 4
};

// get Elements
var box = document.getElementById("box").animate(boxKeyframes,boxTiming);

var play = document.getElementById("play");
var pause = document.getElementById("pause");
var reverse = document.getElementById("reverse");
var finish = document.getElementById("finish");
var slider = document.getElementById("range");

// clickHandler for the controls
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

// add message after box-animation has finished
box.onfinish = function (e) {
	console.log("We're done here:");
	console.log(e);
};

// ======================================================================== 
// 								Animation Group
// ========================================================================

var groupBox = document.getElementById("box-group");

var groupMoveKeyframes = [
	{transform: 'translateX(0px)'},
	{transform: 'translateX(300px)'}
];

var groupFadeKeyframes = [
	{opacity: '1'},
	{opacity: '0'}
];

// Timing for the whole group (not in the polyfill yet)
var groupTiming = {
	iterations: 3
};

var groupMoveTiming = {
	duration: 1000,
	direction: "alternate",
	iterations: 3
};

var groupFadeTiming = {
	duration: 3000
};

// define animations for the group
var groupMove = new Animation(groupBox, groupMoveKeyframes, groupMoveTiming);
var groupFade = new Animation(groupBox, groupFadeKeyframes, groupFadeTiming);

// define group (groupTiming not supported yet)
var group = new AnimationGroup([groupMove, groupFade], {iterations: 4});

// start the player
var groupPlayer = document.timeline.play(group);

// ======================================================================== 
// 								Animation Sequence
// ========================================================================

var seqBox = document.getElementById("box-seq");

var seqFadeTiming = {
	duration: 1000,
	delay: 1000
};

// define animations for the sequence
var seqMove = new Animation(seqBox, groupMoveKeyframes, groupMoveTiming);
var seqFade = new Animation(seqBox, groupFadeKeyframes, seqFadeTiming);

// define sequence (timing not supported yet)
var seq = new AnimationSequence([seqMove, seqFade]);

// start the player
var seqPlayer = document.timeline.play(seq);

// ======================================================================== 
// 								Animation Group & Sequence
// ========================================================================

var bothBox = document.getElementById("box-both");

// keyframes
bothMoveKeyframes = [
	{left: '0'},
	{left: '300px'}
];

bothWiggleKeyframes = [
	{top: '0px'},
	{top: '-10px'},
	{top: '10px'}
];

bothColorKeyframes = [
	{transform: 'rotateY(0deg)', 'background-color': '#BADA55'},
	{transform: 'rotateY(720deg)', 'background-color': '#C0FFEE'}
];


// timings
bothMoveTiming = {
	duration: 1000,
	fill: 'forwards'
};

bothMoveRevTiming = {
	duration: 1000,
	direction: 'reverse'
}

bothWiggleTiming = {
	duration: 100,
	direction: "alternate",
	iterations: 10
}

bothColorTiming = {
	duration: 1000,
	fill: 'forwards'
}

// define animations for the sequence
var bothMove = new Animation(bothBox, bothMoveKeyframes, bothMoveTiming);
var bothMoveRev = new Animation(bothBox, bothMoveKeyframes, bothMoveRevTiming);
var bothWiggle = new Animation(bothBox, bothWiggleKeyframes, bothWiggleTiming);
var bothColor = new Animation(bothBox, bothColorKeyframes, bothColorTiming);

// define groups
var bothTurnColor = new AnimationGroup([bothWiggle, bothColor]);

bothTurnColor.onfinish = function() {
	bothMove.timing.direction = "reverse";
}

// define sequence (timing not supported yet)
var both = new AnimationSequence([bothMove, bothTurnColor, bothMoveRev]);

// start the player
var bothPlayer = document.timeline.play(both);

// ======================================================================== 
// 								Path Animation (not in the polyfill yet)
// ========================================================================

// var pathTiming = {
// 	direction: "alternate",
// 	duration: 2000,
// 	easing: "ease",
// 	iterations: Infinity
// };

// var path = new MotionPathEffect("M100 250C100 50 400 50 400 250");
// var pathBox = document.getElementById("box-path")

// var pathAnim = new Animation(pathBox, path, pathTiming);

// var pathPlayer = document.timeline.play(pathAnim);





