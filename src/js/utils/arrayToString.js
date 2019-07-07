export default function(array) {
    if (Array.isArray(array) == false) {
        throw 'must to arrayToString function parameter is array'
    }

    let res = ''
    for (item of array) {
        res += item
    }
    return res
}
