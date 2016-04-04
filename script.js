/*
Keep track of the current slide by creating
an instance of this.
*/
function count(min, max) {
	this.count = min;
	this.min = min;
	this.max = max;
	this.current = function() {
		return this.count;
	};
	this.decrease = function() {
		this.count--;
		if (this.count < this.min) {
			this.count = this.max;
		}
		return this.count;
	};
	this.increase = function() {
		this.count++;
		if (this.count > max) {
			this.count = 0;
		}
		return this.count;
	};
}

$(document).ready(function(){
	var slides = $(".slider").children("div");
	var counter = new count(0, slides.length - 1);
	slides.hide();
	slides.eq(counter.current()).show();
	
	var timer = setInterval(function(){ 
		slides.eq(counter.current()).hide();
		counter.increase();
		slides.eq(counter.current()).show();
	}, 2000);
	
	$(".slider > span").click(function(){
		clearInterval(timer);
		slides.eq(counter.current()).hide();
		if ($(this).hasClass("left")) {
			counter.decrease();
		} else {
			counter.increase();
		}
		slides.eq(counter.current()).show();
	});
	
});