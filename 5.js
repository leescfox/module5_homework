const array = [4, 8, 15, 16, 23, 42] // <- сюда вводить массив
const arrayInfo = (arr) => {
    console.log(`Количество элементов массива - ${arr.length}`)
    arr.forEach((element) => {
        console.log(element)
    })
}
arrayInfo(array)