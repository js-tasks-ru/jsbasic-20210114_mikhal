/**
 * @param {string} str
 * @returns {string}
 */

function camelize(str) {
	if (!str) return str;

	let array1 = str.split('-');

	for (i = 1; i < array1.length; i++) {
		array1[i] = array1[i].charAt(0).toUpperCase() + array1[i].slice(1);
	}

	return array1.join("");
}