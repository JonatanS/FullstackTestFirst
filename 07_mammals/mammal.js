//1. Mammal Joe:

function Mammal (name) {
	this.name = name;
	this.offspring = [];
}

Mammal.prototype.sayHello = function() {
	return ("My name is " + this.name +", I'm a Mammal")
};

Mammal.prototype.haveBaby = function() {
	var baby = new Mammal("Baby " + this.name);
	this.offspring.push(baby);
	return baby;
}


//2. Cat
function Cat (name, color) {
	//'call' the Mamal constructor, instead of rewriting
	Mammal.call(this, name);
	this.color = color;

	//!!!don't know how to solve this one:!!!
	//'Cat class should use Object.create to inherit methods from Mammal'
    //Cat.prototype.prototype.constructor = Object.create( Mammal );
    //Cat.protoype.constructor = Cat;

	//override the haveBaby function:
	this.haveBaby = function(color) {
		var baby = new Cat("Baby " + this.name, color);
		this.offspring.push(baby);
		return baby;
	};
}


