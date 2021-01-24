let calculator = {
	x: undefined,
	y: undefined,

	read: function (a, b) {
		x = a;
		y = b;
	},

	sum: function () {
		return x + y;
	},

	mul: function () {
		return x * y;
	}
}


// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально