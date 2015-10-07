function createCalculator() {
	var calc = {
		myVal: 0
	};
	
	calc.value = function() {
		return this.myVal;
	};

	calc.add = function(val) {
		this.myVal += val;
	};

	calc.subtract = function(val) {
		this.myVal -= val;
	};

	return calc;
}