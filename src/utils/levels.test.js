import {levels} from './levels';

const
	i18n = {
		t: (str) => str
	}
;

describe('The levels util', () => {

	it('should return expected level 1', () => {
		const
			{label, rule} = levels[0],
			r = rule()
		;

		expect(r).toBeGreaterThanOrEqual(1);
		expect(r).toBeLessThanOrEqual(10);
		expect(label(i18n)).toBe('challenge.level.1');
	});

	it('should return expected level 2', () => {
		const
			{label, rule} = levels[1],
			r = rule()
		;

		expect(r).toBeGreaterThanOrEqual(11);
		expect(r).toBeLessThanOrEqual(100);
		expect(label(i18n)).toBe('challenge.level.2');
	});

	it('should return expected level 3', () => {
		const
			{label, rule} = levels[2],
			r = rule()
		;

		expect(r).toBeGreaterThanOrEqual(101);
		expect(r).toBeLessThanOrEqual(1000);
		expect(label(i18n)).toBe('challenge.level.3');
	});

	it('should return expected level 4', () => {
		const
			{label, rule} = levels[3],
			r = rule()
		;

		expect(r).toBeGreaterThanOrEqual(1001);
		expect(r).toBeLessThanOrEqual(5000);
		expect(label(i18n)).toBe('challenge.level.4');
	});

	it('should return expected level 5', () => {
		const
			{eq, label, rule} = levels[4],
			{x, y, z} = rule()
		;

		expect(x).not.toBe(y);
		expect(z).toBe(x + y);
		expect(z).toBeGreaterThan(1);
		expect(z).toBeLessThan(200);
		expect(eq(x, y)).toBe(`${x} + ${y}`);
		expect(label(i18n)).toBe('challenge.level.5');
	});

	it('should return expected level 6', () => {
		const
			{eq, label, rule} = levels[5],
			{x, y, z} = rule()
		;

		expect(x).not.toBe(y);
		expect(z).toBe(x - y);
		expect(z).toBeGreaterThanOrEqual(1);
		expect(z).toBeLessThan(200);
		expect(eq(x, y)).toBe(`${x} - ${y}`);
		expect(label(i18n)).toBe('challenge.level.6');
	});

	it('should return expected level 7', () => {
		const
			{eq, label, rule} = levels[6],
			{x, y, z} = rule()
		;

		expect(x).not.toBe(y);
		expect(z).toBe(x * y);
		expect(z).toBeGreaterThanOrEqual(10);
		expect(z).toBeLessThan(100);
		expect(eq(x, y)).toBe(`${x} × ${y}`);
		expect(label(i18n)).toBe('challenge.level.7');
	});

});
