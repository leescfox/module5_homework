const checkX = (x) => {
    if (typeof x === "number") {
        console.log('X - число');
    } else if (typeof x === "string") {
        console.log('Х - строка');
    } else if (typeof x === "boolean") {
        console.log('X - логический тип');
    } else {
        console.log('Тип Х не определён');
    }
}
checkX() // <- сюда можно ввести Х