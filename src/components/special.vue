<template>
	<div class="circle"></div>
	<div class="circle"></div>
	<div class="circle"></div>
	<div class="circle"></div>
	<div class="circle"></div>
	<div class="circle"></div>
	<div class="circle">h1</div>
	<div class="circle"></div>
	<div class="circle"></div>
</template>

<style>
	.circle {
		height: 20px;
		width: 24px;
		border-radius: 24px;
		background-color: black;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>

<script>
	const coords = { x: 0, y: 0 };
	const circles = document.querySelectorAll(".circle");

	circles.foreach(function (circle) {
		circle.x = 0;
		circle.y = 0;
	});

	window.addEventListener("mousemove", function (e) {
		coords.x = e.clientX;
		coords.y = e.clientY;

		animateCircles();
	});

	function animateCircles() {
		let x = coords.x;
		let y = coords.y;

		circles.foreach(function (circle, index) {
			circle.style.left = x - 12 + "px";
			circle.style.top = y - 12 + "px";
			circle.x = x;
			circle.y = y;

			const nextCircle = circles[index + 1] || circles[0];
			x += (nextCircle.x - x) * 0.5;
			y += (nextCircle.y - y) * 0.5;
		});
	}
</script>
