let site, design, adaptation;
let calculator = {
    price: [
        [500, 1000, 5000],
        [600, 1200],
        [800, 1500, 8000],
    ],
    days: [
        [1, 2, 3],
        [2, 4, 5],
        [4, 6, 9],
    ],
    run(siteType, designType, adaptationType) {
        let sum = parseInt(calculator.price[0][siteType - 1]) + parseInt(calculator.price[1][designType - 1]) + parseInt(calculator.price[2][adaptationType - 1]);
        let days = parseInt(calculator.days[0][siteType - 1]) + parseInt(calculator.days[1][designType - 1]) + parseInt(calculator.days[2][adaptationType - 1]);
        alert("Сроки: " + days + " дней " + "Стоимость: " + sum + " рублей")
    }
}

function getAnswers() {
    site = prompt("Какой тип сайта вам нужен? 1 - Сайт-визитка 2 - Интернет-магазин 3 - Блог о чем-либо");
    if (site != 1 && site != 2 && site != 3) {
        alert("Такого варианта нет");
        getAnswers();
        return;
    }
    design = prompt("Какой дизайн вам нужен? 1 - Шаблон 2 - Уникальный ");
    if (design != 1 && design != 2 && design != 3) {
        alert("Такого варианта нет");
        getAnswers();
        return;
    }
    adaptation = prompt("Какой тип адаптивности вам нужен? 1 - Только ПК 2 - Пк + Мобильная 3 - Пк + телевизор");
    if (adaptation != 1 && adaptation != 2 && adaptation != 3) {
        alert("Такого варианта нет");
        getAnswers();
        return;
    }
    calculator.run(site, design, adaptation);
}
getAnswers();