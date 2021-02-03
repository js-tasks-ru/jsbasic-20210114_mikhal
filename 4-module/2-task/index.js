/* eslint-disable indent */
/**
 * @param {HTMLTableElement} table
 * @return {void}
 */

function makeDiagonalRed(table) {
	console.log(table.rows[0].cells[0]);
	for (let i = 0; i < table.rows.length; i++) {
		table.rows[i].cells[i].style.backgroundColor = 'red';
	}
}

