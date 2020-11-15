import {Typewriter} from './typewriter';

describe('The typewriter util', () => {

	it('should override options', () => {
		const
			options = {
				words: ['foo', 'bar', 'baz'],
				delay: 0,
				speedTyping: 0,
				speedRemove: 0,
				onType: function() {},
				onRemove: function() {}
			},
			typewriter = new Typewriter(options)
		;

		expect(typewriter.options).toMatchObject(options);
	});

});
