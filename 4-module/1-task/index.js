/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
   let ul = document.createElement("ul");
	const htmlArray = friends.map(friend => {
		return `<li>${friend.firstName} ${friend.lastName}</li>`
})
	const html = htmlArray.join('')
	ul.innerHTML = html
	return ul

}
