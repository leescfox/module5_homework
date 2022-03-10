let array2 = [4, 8, 15, undefined, null, 'some string', NaN, 16, 23, 0, 42, 0]
const oddEvenZeroCount = (arr) => {
    let odd = 0
    let even = 0
    let zeros = 0
    arr.forEach((element) => {
        if (typeof element === "number" && isNaN(element) === false) {
            element % 2 === 1 ? odd++ : even++
            if (element === 0) {
                zeros++
            }
        }
    })
    console.log(`Нечётных элементов - ${odd}`)
    console.log(`Чётных элементов(включая нули) - ${even}`)
    console.log(`Нулевых элементов - ${zeros}`)
}
oddEvenZeroCount(array2)