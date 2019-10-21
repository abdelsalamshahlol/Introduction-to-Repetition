// Basic Requirments

// A - 1

function sum(n) {
    if (n === 0) {
        return n;
    }
    return n + sum(n - 1);
}

// A - 2

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return factorial(n - 1) * n;
}

// A - 3

function repeatString(str, times) {
    if (times === 0) {
        return '';
    }
    return str + repeatString(str, times - 1);
}

// A - 4

function fibonacci(n) {
    if (n === 0) {
        return 1;
    } else if (n === 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

// A - 5

function multiplyBy10(number, n) {
    if (n === 0) {
        return number;
    }
    return 10 * multiplyBy10(number, n - 1);
}

// More Practice

// A - 1

function sumRange(start, end) {
    if (start < end) {
        if (start === end) {
            return start;
        }
        return start + sumRange(start + 1, end);
    } else {
        if (start === end) {
            return end;
        }
        return start + sumRange(start - 1, end);
    }
}

// A - 2

function product(n) {
    if (n === 0) {
        return 1;
    }
    return n * product(n - 1);
}

// A - 3

function inc(x) {
    return x + 1;
}
function dec(x) {
    return x - 1;
}

function add(x, y) {
    if (y === 0) {
        return x;
    }
    return add(inc(x), dec(y));
}

// A - 4

function isEven(n) {
    if (n === 0) {
        return true;
    } else if (n === 1) {
        return false;
    }

    return isEven(n - 2);
}

// A - 5

function multiply(x, y) {
    if (y === 0) {
        return 0;
    }

    return x + multiply(x, y - 1);
}

// A - 6

function intAtRange(a, b) {
    var result = '';
    ++a;

    if (a === b) {
        return '';
    }

    result += a;

    if (a < b - 1) {
        result += ', ';
    }
    return result + intAtRange(a, b);
}

// Advanced

// A - 1

function stringLength(str) {
    var i = 1;
    if (str === '') {
        return 0;
    }
    return i + stringLength(str.slice(i));
}

// A - 2

function modulo(x, y) {
    if (x < y) {
        return x;
    }
    return modulo(x - y, y);
}

// A - 3

/***
	This function will iterate through a string using recusion.
	The string gets sliced at the first index on every iteration.

	Example:.
	hello // First iteration
	ello // Second iteration
	.....

	Then program checks if the character at index zero is equal to @param char
	and assigns value of 1 to @param times.
*/

function countChars(str, char) {
    var i = 1;
    var times = 0;

    if (str === '') {
        return 0;
    }

    if (str[0] === char) {
        times = 1;
    }

    return times + countChars(str.slice(i), char);
}

// A - 4

/***
	This function will iterate through a string using recusion.
	The string gets sliced at the first index on every iteration.

	Example:.
	hello // First iteration
	ello // Second iteration
	.....

	Then program checks if the character at index zero is equal to @param char
	and if false it will increment index by one and it gets added from right to left after reaching
	the stop condition. If true it the function will return @param index.
*/

function indexOf(str, char) {
    var i = 1;
    var index = 0;

    if (str === '') {
        return 0;
    }

    if (str[0] === char) {
        return index;
    }

    index++;
    return index + indexOf(str.slice(i), char);
}

// A - 5

// ===== Not sure if thats correct =====

function power(number, expo) {
    if (expo < 0) {
        return number * 2;
    }

    return number * power(number, expo - 2);
}

// A - 6

function reverse(str) {
    var i = 1;

    if (str === '') {
        return '';
    }

    return reverse(str.slice(i)) + str[0];
}

// A - 7

function gcd(x, y) {
    if (x === y) {
        return x;
    } else if (x < y) {
        return gcd(x, y - x);
    } else {
        return gcd(x - y, y);
    }
}

// A - 8

// === This is one method that uses gcd() ===
// === Not 100% correct answer because it should be solved using recursion ===

function lcm(x, y) {
    if (x === y) {
        return x;
    } else {
        return (x / gcd(x, y)) * y;
    }
}

// A - 9

var people = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
// Answer 36 unique handshakes

// === Array implementation ===

function numOfHandshakes(people) {
    var c = 1;

    if (people.length === 0) {
        return 0;
    }

    return people.slice(1).length + numOfHandshakes(people.slice(c));
}
