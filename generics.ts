//Generics 
interface maria {
    name: string
}

const nameMaria = {
    name : 'Maria'
}

function getMaria<T, U>(nidValue: T, maria: U): U {
    let nid: T = nidValue
    if(nid) {
        return maria
    }
}
getMaria(27000, 'Maria')
getMaria<string, maria>('27000', nameMaria)