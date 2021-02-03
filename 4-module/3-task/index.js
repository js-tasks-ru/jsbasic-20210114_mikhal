/* eslint-disable indent */
/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */

function highlight(table) {
	for (let i = 1; i < table.rows.length; i++) {
		let elem = table.rows[i];

		if (elem.cells[3].getAttribute('data-available') === 'true') {
			elem.classList.add('available');

		} else if (elem.cells[3].getAttribute('data-available') === null) {
	
	elem.setAttribute('hidden', '');
		} else {
		elem.classList.add('unavailable');
		}

		if (elem.cells[1].innerHTML < 18) {
	elem.style = "text-decoration: line-through";
		}
		if (elem.cells[2].innerHTML === 'm') {
  elem.classList.add('male');
		} else {
 elem.classList.add('female');
		}
	}
		
  
}