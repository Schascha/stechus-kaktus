import {shallowMount} from '@vue/test-utils';
import Romanizer from '@/components/Romanizer';
import {fromRoman, toRoman} from '@/utils/roman';

describe('Component Romanizer.vue', () => {

	it('should render current year in roman numerals', () => {
		const
			text = new Date().getFullYear().toString(),
			wrapper = shallowMount(Romanizer)
		;

		expect(wrapper.text()).toBe(toRoman(text));
	})

	it('should update text', async () => {
		const
			text = 'MMXX',
			wrapper = shallowMount(Romanizer),
			input = wrapper.find('input')
		;

		input.setValue(text);
		await input.trigger('change');
		expect(wrapper.text()).toBe(fromRoman(text).toString());
	})

})
