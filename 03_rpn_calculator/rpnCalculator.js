function RPNCalculator() {};

//turn this object into an array:
RPNCalculator.prototype = [];

RPNCalculator.prototype.value = function() {
	if(this.length > 0) return this[this.length - 1];
	else return 0;
}

//add functions to it's prototype:
RPNCalculator.prototype.plus = function() {
	this.push(this.calculate(this, function(a, b) {
		return b+a;
	}));
};

RPNCalculator.prototype.minus = function() {
	this.push(this.calculate(this, function(a, b) {
		return b-a;
	}));
};

RPNCalculator.prototype.divide = function() {
	this.push(this.calculate(this, function(a, b) {
		return b/a;
	}));
};

RPNCalculator.prototype.times = function() {
	this.push(this.calculate(this, function(a, b) {
		return b*a;
	}));
};

RPNCalculator.prototype.checkStash = function() {
	if(this.length < 2) {
		throw ("rpnCalculator is empty");
	}
};

RPNCalculator.prototype.calculate = function(calc, operation) {
	calc.checkStash();
	var pop1 = calc.pop();	//same as this.pop()
	var pop2 = calc.pop();
	return operation(pop1, pop2);

}