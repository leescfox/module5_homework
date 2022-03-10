let num = +prompt('Введите число')
if (typeof num === "number" && isNaN(num) === false) {
    if (num % 2 === 1) {
        console.log('Нечётное');
    } else {
        console.log('Чётное');
    }
} else {
    console.log('Упс, кажется, вы ошиблись');
}