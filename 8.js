let map = new Map()
map.set(null, 'We')
map.set(2, 'live')
map.set(true, 'in')
map.set('b', 'a')
map.set('Neo', 'simulation')
for (let [key, value] of map) {
    console.log(`Ключ - ${key}, значение - ${value}`)
}