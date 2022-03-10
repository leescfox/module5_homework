const random0to100 = (min, max) => {
    max = max + 1 //чтобы max включить в интервал
    return Math.floor(min + Math.random() * (max - min))
}
console.log(random0to100(0, 100))