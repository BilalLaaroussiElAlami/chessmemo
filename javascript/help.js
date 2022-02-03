//moves elements to left (those who succeed the filterfun ), pads to the length 
function crunch(array, filterfun, length, padelement) {
    let out = array.filter(element => filterfun(element))
    let pad = new Array(length - out.length).fill(padelement)
    let res = out.concat(pad)
    return res
}

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

console.log("1")

function update(progress) {
    // Update the state of the world for the elapsed time since last render
}

export { crunch, arrayEquals }