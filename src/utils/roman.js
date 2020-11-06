const
	romanRegex = /^[MDCLXVI]+$/,
	romanValues = {'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1}
;

export function isRoman(n) {
	return (n && n.match(romanRegex));
}

export function toRoman(n) {
	return n
		.toUpperCase().split('')
		.map(char => romanValues[char])
		.map((a, index, arr) => a < arr[index + 1] ? a * -1 : a)
		.reduce((a, b) => a + b)
	;
}

export function fromRoman(n) {
	let str = '';

	Object.keys(romanValues).forEach(key => {
		str += key.repeat(Math.floor(n / romanValues[key]));
		n = n % romanValues[key];
	});

	return str;
}
