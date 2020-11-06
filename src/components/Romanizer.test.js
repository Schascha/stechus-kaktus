import {shallowMount} from '@vue/test-utils';
import Romanizer from '@/components/Romanizer';
import {toRoman} from '@/utils/roman';

describe('Component Romanizer.vue', () => {

	it('should render current year in roman numerals', () => {
		const
			text = new Date().getFullYear().toString()
		;

		expect(shallowMount(Romanizer).text()).toMatch(toRoman(text));
	})

})
