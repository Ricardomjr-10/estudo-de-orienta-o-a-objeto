/* class a {
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

const obj = new b() */

const a ={
    first () {
        return 1
    }
}

const b = {
    second () {
        return 'naaoooo'
    }
}

const c = {
    third () {
        return 3
    }
}

const obj = {
    ...a,
    ...c
}

console.log(obj)// heranca classica é infelxivel por natureza