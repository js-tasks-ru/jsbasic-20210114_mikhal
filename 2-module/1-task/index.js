/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
	let sum = 0.0;

	for (let salary of Object.values(salaries)) {
		if (Number.isFinite(salary)) {
			sum += salary;
		}
	}

	return sum;
}
