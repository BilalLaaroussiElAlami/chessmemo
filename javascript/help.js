//moves elements to left (those who succeed the filterfun ), pads to the length 
function crunch(array, filterfun, length, padelement) {
    let out = array.filter(element => filterfun(element))
    let pad = new Array(length - out.length).fill(padelement)
    let res = out.concat(pad)
    return res
}

console.log("1")

export { crunch }