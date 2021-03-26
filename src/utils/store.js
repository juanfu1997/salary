export function store(key, value) {
	if (arguments.length == 1) {
		return JSON.parse(localStorage.getItem(key));
	} else {
		localStorage.setItem(key, JSON.stringify(value));
	}
}
export function remove(key) {
	localStorage.removeItem(key);
}
