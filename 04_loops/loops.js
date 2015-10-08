function repeat(word, num) {
	var wordOut = "";
	for (var i = 0; i < num; i++) {
		wordOut += word;
	}
	return wordOut;
}

function sum(arr) {
	var outVal = 0;
	for (var index in arr) {
		outVal += arr[index];
	}
	return outVal;
}

function gridGenerator(num) {
	var outString = "";
	var chars = ['#', ' '];

	for (var i = 0; i < num; i++) {
		for (var j = 0; j < num; j++) {
			if (i % 2 === 0) {
				//odd row: start with char[0]
				outString += chars[j % 2];
			}
			else {
				//even row: start with char[1]
				outString += chars[1 - (j % 2)];
			}
		}
		outString += '\n';
	}
	return outString;
}


function largestTripletSum(sum) {
	//Euclids formula from https://en.wikipedia.org/wiki/Pythagorean_triple:
	// a = m^2 - n^2
	// b = 2mn
	// c = m^2 + n^2

	var a = 0;
	var b = 0;
	var c = 0;
	var sqrt = Math.sqrt(sum);

	for (var n = 1; n <= sqrt; n++) {
		for (var m = n+1; m <= sqrt; m++) {
			a = m*m - n*n;
			b = 2 * m * n;
			c = m*m + n*n;
			if((a+b+c) >= sum) {
			    return [a,b,c];
			}
		}
	}

	return [a,b,c];

}

function largestTriplet(max) {

	var sqrt = function(base) {
		return base * base;
	};

	var triplet = [];
	var bMax = 0;

	for (var a = 1; a <= max; a++) {
		for (var b = max; b >= a+1; b--) {
			for (var c = max; c >= b+1; c--) {
				if(sqrt(a) + sqrt(b) == sqrt(c)) {
					if (b > bMax) {
						triplet = [a,b,c];
						bMax = b;
					}
				}
			}
		}
	}
	return triplet;
}


function join(words, delimiter) {
	var outString = "";

	//check for optional delimiter value:
	if(typeof delimiter === "undefined") {
		delimiter = "";
	}	

	//make sure words is of type array:
	if(!Array.isArray(words)) {
		throw ("words needs to be declared as array");
	}

	for(var i = 0; i < words.length; i++) {
		outString += words[i];
		if(i < words.length -1) {
			outString += delimiter;
		}
	}

	return outString;
}

//not following the instructions - I am accessing the object's keys, 
//instead of using 'hasOwnProperty' method
function paramify(obj) {
    var outString = "";
    
    //sort object keys:
    var keys = Object.keys(obj).sort();
    
    //loop through keys to construct output string
	for(var i in keys) {
	    outString += keys[i] + '=' + obj[keys[i]];
		if (i < keys.length - 1) {
		    outString += '&';
		}
	}
	return outString;
}

//modified to use hasOwnProperty - works the same way as above method:
function paramify_hasOwn(obj) {
    var outString = "";
    
    //sort object keys:
    var keys = Object.keys(obj).sort();
    console.log(keys);
    console.log(keys.length);
    
    //loop through keys to construct output string
	for(var i in keys) {
	    if(obj.hasOwnProperty(keys[i])) {
    	    outString += keys[i] + '=' + obj[keys[i]];
    		if (i < keys.length - 1) {
    		    outString += '&';
    		}
	    }
    }
	return outString;
}