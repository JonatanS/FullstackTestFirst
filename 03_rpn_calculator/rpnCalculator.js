function RPNCalculator() {};

//turn this object into an array:
RPNCalculator.prototype = [];

RPNCalculator.prototype.value = function() {
	if(this.length > 0) return this[this.length - 1];
	else return 0;
}

//add functions to it's prototype:
RPNCalculator.prototype.plus = function() {
	this.checkStash();
	var pop1 = this.pop();
	//console.log("1: " + this);
	var pop2 = this.pop();
	//console.log("2: " + this);
	this.push(pop2 + pop1);
	//console.log("3: " + this);
};

RPNCalculator.prototype.minus = function() {
	this.checkStash();
	var pop1 = this.pop();
	var pop2 = this.pop();

	this.push(pop2 - pop1);
};

RPNCalculator.prototype.divide = function() {
	this.checkStash();
	var pop1 = this.pop();
	var pop2 = this.pop();

	this.push(pop2/pop1);
};

RPNCalculator.prototype.times = function() {
	this.checkStash();
	var pop1 = this.pop();
	var pop2 = this.pop();

	this.push(pop2 * pop1);
};

RPNCalculator.prototype.checkStash = function() {
	if(this.length < 2) {
		throw ("rpnCalculator is empty");
	}
};