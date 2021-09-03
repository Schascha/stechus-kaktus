import {Typewriter} from './typewriter';

jest.useFakeTimers();

describe('The typewriter util', () => {

	it('should override options', () => {
		const
			options = {
				words: ['foo', 'bar', 'baz'],
				delay: 0,
				speedTyping: 0,
				speedRemove: 0,
				onType: function() {},
				onRemove: function() {},
				onChange: function() {}
			},
			typewriter = new Typewriter(options)
		;

		expect(typewriter.options).toMatchObject(options);
	});

	it('Should throw error if words option is missing', () => {
		try {
			new Typewriter();
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
		}
	});

	it('Should generate random word from words option', () => {
		const
			options = {
				words: ['foo', 'bar', 'baz']
			},
			typewriter = new Typewriter(options)
		;

		expect(typewriter.randomWord()).toMatch(/^foo|bar|baz$/);
	});

	it('Should accepts function as words option', () => {
		const
			options = {
				words: () => 'foo'
			},
			typewriter = new Typewriter(options)
		;

		expect(typewriter.randomWord()).toBe('foo');
	});

	it('Should run trough all typing and removing steps', () => {
		const
			mockCallbackType = jest.fn(),
			mockCallbackRemove = jest.fn(),
			mockCallbackChange = jest.fn(),
			options = {
				words: ['foo', 'bar', 'baz'],
				onType: mockCallbackType,
				onRemove: mockCallbackRemove,
				onChange: mockCallbackChange
			},
			typewriter = new Typewriter(options).typing()
		;

		// Step 1: Delay and add random word
		jest.runOnlyPendingTimers();
		expect(typewriter.word.length).toBe(3);

		// Step 2: Write letter for letter and call onType method
		jest.runOnlyPendingTimers();
		expect(typewriter.word.length).toBe(2);
		expect(mockCallbackType.mock.calls.length).toBe(1);

		jest.runOnlyPendingTimers();
		expect(typewriter.word.length).toBe(1);
		expect(mockCallbackType.mock.calls.length).toBe(2);

		jest.runOnlyPendingTimers();
		expect(typewriter.word.length).toBe(0);
		expect(mockCallbackType.mock.calls.length).toBe(3);

		// Step 3: Finish word and call onChange method
		jest.runOnlyPendingTimers();
		expect(typewriter.text.length).toBe(3);
		expect(mockCallbackChange.mock.calls.length).toBe(1);

		// Step 4: Remove letter for letter and call onRemove method
		jest.runOnlyPendingTimers();
		expect(typewriter.text.length).toBe(2);
		expect(mockCallbackRemove.mock.calls.length).toBe(1);

		jest.clearAllTimers();
	});

});
