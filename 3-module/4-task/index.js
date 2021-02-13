/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
*/

function showSalary(users, age) {
	let filterResult = users.filter(item => item.age <= age);
	let mapResult = filterResult.map(item => `${item.name}, ${item.balance}`);
	return mapResult.join('\n');
}