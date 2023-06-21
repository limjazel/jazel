export function clickOutside (node) {
	const handleClick = (event) => {
		if (!event.composedPath().includes(node)) {
			node.dispatchEvent(new CustomEvent('click-outside'))
		}
	}
	
	document.addEventListener('click', handleClick, true)
	
	return {
		destroy () {
			document.removeEventListener("click", handleClick, true)
		}
	}
}