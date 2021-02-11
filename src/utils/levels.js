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

	return x;
}

export const
	levels = [
		{
			label: ($i18n) => $i18n.t('challenge.level.1'),
			rule: () => randomInterval(1, 10)
		},
		{
			label: ($i18n) => $i18n.t('challenge.level.2'),
			rule: () => randomInterval(11, 100)
		},
		{
			label: ($i18n) => $i18n.t('challenge.level.3'),
			rule: () => randomInterval(101, 1000)
		},
		{
			label: ($i18n) => $i18n.t('challenge.level.4'),
			rule: () => randomInterval(1001, 5000)
		},
		{
			label: ($i18n) => $i18n.t('challenge.level.5'),
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
			label: ($i18n) => $i18n.t('challenge.level.6'),
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
			label: ($i18n) => $i18n.t('challenge.level.7'),
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
