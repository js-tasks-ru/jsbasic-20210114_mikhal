/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
	let lowerstr = str.toLowerCase();
	return lowerstr.includes("1xbet") || lowerstr.includes('xxx');
}