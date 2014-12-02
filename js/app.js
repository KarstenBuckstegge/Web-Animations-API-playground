// ======================================================================== 
// 								ReadME
// ========================================================================

// To try out the different animations, comment out the different blocks of animation-code
// All animations run on the same box right now

// ======================================================================== 
// 								Animatable Elements
// ========================================================================

// get box
var box = document.getElementById("box");

// ======================================================================== 
// 								Basic Animation
// ========================================================================

// define keyframes for basic animation 
var basicKeyframes = [
	{transform: 'translateX(0px) rotate(0deg)', opacity: '1'},
	{transform: 'translateX(600px) rotate(720deg)', opacity: '0'}
];

var basicTiming = {
	direction: "alternate",
	duration: 1500,
	easing: "cubic-bezier(0,0.5,0.5,0)",
	iterations: 4
};

var anim = new Animation(box, basicKeyframes, basicTiming);
var basicPlayer = document.timeline.play(anim);

// add message after box-animation has finished
box.onfinish = function (e) {
	console.log("We're done here:");
	console.log(e);
};

// // ======================================================================== 
// // 								Animation Controls
// // ========================================================================

// get buttons
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var reverse = document.getElementById("reverse");
var finish = document.getElementById("finish");
var slider = document.getElementById("range");

// clickHandler for the controls
document.getElementsByClassName('controls')[0].onclick = function(e) {
	switch(e.target) {
		case play:
			basicPlayer.play();
			sliderAnim();
			break;
		case pause:
			basicPlayer.pause();
			break;
		case reverse:
			basicPlayer.reverse();
			sliderAnim();
			break;
		case finish:
			basicPlayer.finish();
			break;
		default:
			break;
	}
};

// get range-input slider
var slider = document.getElementById("range");

// oninput stop box-animation and move it to state equivalent to slider position 
slider.oninput = function() {
	basicPlayer.pause();
	basicPlayer.currentTime = slider.value * 60;
};

// animation loop to animate slider if box-animation is running
function sliderAnim() {
	var currentPos = Math.floor(basicPlayer.currentTime / 60); // convert to values between 0 and 100
	slider.value = currentPos;
	if (box.playState !== "paused" && box.playState !== "finished") {
		window.requestAnimationFrame(sliderAnim);
	}
};
window.requestAnimationFrame(sliderAnim);

// ======================================================================== 
// 								Animation Group
// ========================================================================

// var groupMoveKeyframes = [
// 	{transform: 'translateX(0px)'},
// 	{transform: 'translateX(300px)'}
// ];

// var groupFadeKeyframes = [
// 	{opacity: '1'},
// 	{opacity: '0'}
// ];

// // Timing for the whole group (not in the polyfill yet)
// var groupTiming = {
// 	iterations: 3
// };

// var groupMoveTiming = {
// 	duration: 1000,
// 	direction: "alternate",
// 	iterations: 3
// };

// var groupFadeTiming = {
// 	duration: 3000
// };

// // define animations for the group
// var groupMove = new Animation(box, groupMoveKeyframes, groupMoveTiming);
// var groupFade = new Animation(box, groupFadeKeyframes, groupFadeTiming);

// // define group (groupTiming not supported yet)
// var group = new AnimationGroup([groupMove, groupFade], {iterations: 4});

// // start the player
// var groupPlayer = document.timeline.play(group);

// ======================================================================== 
// 								Animation Sequence
// ========================================================================

// var seqFadeTiming = {
// 	duration: 1000,
// 	delay: 1000
// };

// // define animations for the sequence
// var seqMove = new Animation(box, groupMoveKeyframes, groupMoveTiming);
// var seqFade = new Animation(box, groupFadeKeyframes, seqFadeTiming);

// // define sequence (timing not supported yet)
// var seq = new AnimationSequence([seqMove, seqFade]);

// // start the player
// var seqPlayer = document.timeline.play(seq);

// ======================================================================== 
// 								Animation Group & Sequence
// ========================================================================

// // keyframes
// bothMoveKeyframes = [
// 	{left: '0'},
// 	{left: '300px'}
// ];

// bothWiggleKeyframes = [
// 	{top: '0px'},
// 	{top: '-10px'},
// 	{top: '10px'}
// ];

// bothColorKeyframes = [
// 	{transform: 'rotateY(0deg)', 'background-color': '#BADA55'},
// 	{transform: 'rotateY(720deg)', 'background-color': '#C0FFEE'}
// ];


// // timings
// bothMoveTiming = {
// 	duration: 1000,
// 	fill: 'forwards'
// };

// bothMoveRevTiming = {
// 	duration: 1000,
// 	direction: 'reverse'
// }

// bothWiggleTiming = {
// 	duration: 100,
// 	direction: "alternate",
// 	iterations: 10
// }

// bothColorTiming = {
// 	duration: 1000,
// 	fill: 'forwards'
// }

// // define animations for the sequence
// var bothMove = new Animation(box, bothMoveKeyframes, bothMoveTiming);
// var bothMoveRev = new Animation(box, bothMoveKeyframes, bothMoveRevTiming);
// var bothWiggle = new Animation(box, bothWiggleKeyframes, bothWiggleTiming);
// var bothColor = new Animation(box, bothColorKeyframes, bothColorTiming);

// // define groups
// var bothTurnColor = new AnimationGroup([bothWiggle, bothColor]);

// bothTurnColor.onfinish = function() {
// 	bothMove.timing.direction = "reverse";
// }

// // define sequence (timing not supported yet)
// var both = new AnimationSequence([bothMove, bothTurnColor, bothMoveRev]);

// // start the player
// var bothPlayer = document.timeline.play(both);







