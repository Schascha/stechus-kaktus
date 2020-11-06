import {isRoman, fromRoman, toRoman} from './roman';

describe('The roman utils', () => {

	it('should check roman numerals', () => {
		expect(isRoman('MCMLXXXIV')).toBeTruthy();
		expect(isRoman(1984)).toBeFalsy();
		expect(isRoman(NaN)).toBeFalsy();
		expect(isRoman(null)).toBeFalsy();
	});

	it('should convert from roman numerals', () => {
		expect(fromRoman('MDCCCCLXXXIIII')).toBe(1984);
		expect(fromRoman('MCMLXXXIV')).toBe(1984);
	});

	it('should convert to roman numerals', () => {
		expect(toRoman(1984)).toBe('MCMLXXXIV');
		expect(toRoman('1984')).toBe('MCMLXXXIV');
	});

});
