// #3 - первый вариант решения. Напролом
const reverse = (str) => {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        res = str.slice(i, i + 1) + res
    }
    return res
}
console.log(reverse('Hello!'))

// #3 - второй вариант. Через превращение в массив, его переворот и соединение в строку
const reverse2 = (str) => {
    return str.split('').reverse().join('')
}
console.log(reverse2('Heisenberg'))