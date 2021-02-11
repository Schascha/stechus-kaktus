let
	timer
;

export function scrollLeftToEnd(el, delay = 0) {
	const
		{scrollWidth} = el
	;

	window.clearTimeout(timer);
	timer = window.setTimeout(() => {
		el.scrollBy({top: 0, left: scrollWidth, behavior: 'smooth'});
	}, delay);
}
