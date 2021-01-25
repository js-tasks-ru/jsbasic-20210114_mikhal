/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
	let names = [];
	for (let x of users) {
		names.push(x.name);
	}
	return names;
}