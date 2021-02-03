/* eslint-disable indent */
/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
	let numbersOnly = str.split(',').join(' ').split(' ').filter(item => Number(item));
	let result = {
		min: Math.min(...numbersOnly),
		max: Math.max(...numbersOnly),
	};
	return result;
}