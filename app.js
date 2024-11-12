class a {
    first () {
        return
    }

    second () {
        return 'nâãooooooo'
    }
}

class b extends a {
    third () {
        return 3
    }
}

const obj = new b()

console.log(obj.second())