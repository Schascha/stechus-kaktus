var
	memory = []
;

function randomInterval(min, max) {
	let x;

	do  {
		x = Math.floor(Math.random() * (max - min + 1) + min);
	} while(memory.includes(x));

	// Store the last 5 numbers
	(memory.length >= 5) && memory.shift();
	memory.push(x);

	window.console.log(memory);

	return x;
}

export const
	level = [
		{
			label: 'Convert numbers from 1 to 10',
			rule: () => randomInterval(1, 10)
		},
		{
			label: 'Convert numbers up to 100',
			rule: () => randomInterval(11, 100)
		},
		{
			label: 'Convert numbers up to 1000',
			rule: () => randomInterval(101, 1000)
		},
		{
			label: 'Convert numbers up to 5000',
			rule: () => randomInterval(1001, 5000)
		},
		{
			label: 'Add two roman numerals',
			rule: () => {
				const
					x = randomInterval(1, 100),
					y = randomInterval(1, 100),
					z = x + y
				;

				return {x, y, z};
			},
			eq: (x, y) => `${x} + ${y}`
		},
		{
			label: 'Subtract two roman numerals',
			rule: () => {
				const
					x = randomInterval(100, 200),
					y = randomInterval(50, 99),
					z = x - y
				;

				return {x, y, z};
			},
			eq: (x, y) => `${x} - ${y}`
		},
		{
			label: 'Multiply two roman numerals',
			rule: () => {
				const
					x = randomInterval(2, 10),
					y = randomInterval(5, 10),
					z = x * y
				;

				return {x, y, z};
			},
			eq: (x, y) => `${x} × ${y}`
		}
	]
;
