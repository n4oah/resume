export default class Struct {
    constructor(name, value) {
        this.name = name

        if (Array.isArray(value)) {
            this.object = []
        } else if(typeof value === 'object') {
            this.object = {}
        }
        
        for (let val in value) {
            if (Array.isArray(value[val]) === true || typeof value[val] === 'object'){
                this.object[val] = new Struct(val, value[val])
            } else {
                this.object[val] = value[val]
            }
        }
    }

    get(name) {
        if (this.object.hasOwnProperty(name) == true) {
            return this.object[name]
        } else {
            throw 'struct error.'
        }
    }

    set(name, value) {
        if (this.object.hasOwnProperty(name) == true) {
            this.object[name] = value
        } else {
            throw 'struct error.'
        }
    }

    getSelf() {
        return this.object
    }
}
