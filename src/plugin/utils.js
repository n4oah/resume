export default {
    install (Vue) {
        Vue.prototype.$arrayToString = array => {
            if (Array.isArray(array) == false) {
                throw 'must to arrayToString function parameter is array'
            }
        
            let res = ''
            for (let item of array) {
                res += item
            }
            return res
        }
    }
}