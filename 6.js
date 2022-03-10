let arr = [4, 4, 4] // <- сюда вводить массив
const sameCheck = (array) => {
    let result = true
    for (let i = 1; i < array.length; i++) {
        if (array[0] !== array[i]) {
            result = false
            break
        }
    }
    return result
}
console.log(sameCheck(arr))