
let start = document.getElementById("start");

let body = document.body;
let title;
let input;
let preTitle;

let imageWrap;
let image1;
let image2;


start.addEventListener('click', () => {
	start.parentNode.removeChild(start);
	title = document.createElement("h1");
	input = document.createElement("input");


	title.textContent = "Введите ваше имя";

	body.append(title);
	body.append(input);

	input.addEventListener('keyup', (event) => {
		if (event.code == "Enter" && input.value != "") {
			title.textContent = `Добро пожаловать ${input.value}!`;
			input.parentNode.removeChild(input);

			setTimeout(() => {
				title.parentNode.removeChild(title);
				quest1();
			}, 1000);
		}
	})
})

function createTextLevel(question, answer, nextLevel) {
	title = document.createElement("h1");
	input = document.createElement("input");
	preTitle = document.createElement("p")

	title.textContent = question;

	body.append(title);
	body.append(input);
	body.append(preTitle);

	input.addEventListener('keyup', (event) => {
		if (event.code == "Enter" && input.value != "") {
			if (input.value.toLowerCase() == answer) {
				input.parentNode.removeChild(input);
				preTitle.textContent = "Верно!";

				setTimeout(() => {
					title.parentNode.removeChild(title);
					preTitle.parentNode.removeChild(preTitle);
					if (nextLevel != null) {
						nextLevel();
					}
				}, 1000);

			} else {
				preTitle.textContent = "Неверно!";
				input.value = "";
			}
		}
	})
}

function createIMGlevel(question, goodEnding, badEnding, trueLink, falseLink, nextLevel) {
	title = document.createElement("h1");
	preTitle = document.createElement("p");
	imageWrap = document.createElement("div");
	image1 = document.createElement("img");
	image2 = document.createElement("img");

	title.textContent = question;

	body.append(title);
	body.append(preTitle);

	body.append(imageWrap);
	imageWrap.append(image1);
	imageWrap.append(image2);

	image1.src = trueLink;
	image2.src = falseLink;

	image1.addEventListener('click', () => {
		image1.parentNode.removeChild(image1);
		image2.parentNode.removeChild(image2);
		preTitle.textContent = goodEnding;
		setTimeout(() => {
			title.parentNode.removeChild(title);
			preTitle.parentNode.removeChild(preTitle);
			if (nextLevel != null) {
				nextLevel();
			}
		}, 3000);
	})

	image2.addEventListener('click', () => {
		preTitle.textContent = badEnding;
	})

}

function quest1() {
	createIMGlevel("Вы гуляете по лесу и случайно выходите на поляну, куда вы дальше выберете пойти?", "Вы решили пойти в пещеру", "Это была плохая идея, вы увязли в болоте", "./images/cave.jpg", "./images/marshland.jpg", quest2);
}

function quest2() {
	createIMGlevel("В пещере довльно темно, выберите чем бы осветить путь", "Вы изучаете пещеру освещая всё вокруг фонариком", "Стая летучих мышей вылетела на свет зажигалки и выбила её у вас из рук, зажигалка упав, сломалась, вы проиграли, придётся возвращаться", "./images/flashlight.jpg", "./images/lighter.jpg", quest3);
}

function quest3() {
	createIMGlevel("Вы вышли на развилку, один путь ведёт глубже в пещеры, другой на поверхность", "Вы решили выйти из пещеры", "Путь ниже окозался очень крутым, без специального оборудования самому туда не спуститься", "./images/outside.jpg", "./images/cave2.jpg", quest4);
}

function quest4() {
	createIMGlevel("Вы вышли на поляну с двумя домами, в какой из них вы пойдёте и заначуете там?", "Дом выглядит уютным и надёжным", "Дом окозался очень трухлявым, вы еле успели выбежать из него, перед тем как он обрушился", "./images/cozyhouse.jpg", "./images/oldhouse.jpg", quest5);
}

function quest5() {
	createIMGlevel("Постучав в дом, вы поняли, что внутри никого нет, вы решили зайти и подождать хозяинов внутри", "Вы лягли на кровать и уснули, проснувшись на утро в доме всё ещё никого не было и вы решили пойти к себе домой", "Вы были так голодны, что вы решили посмотреть что есть на кухне, найдя тарелку яблок на столе, вы скушали несколько, после этого вы пошли поспать, на утро всё также не обнаружив хозяев дома, вы отправились к себе домой", "./images/cozybed.jpg", "./images/cozykitchen.jpg", null);
}
