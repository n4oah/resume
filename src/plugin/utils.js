import {tag, endTag} from 'resource/js/template.js'

export default {
    install (Vue) {
        Vue.prototype.$arrayToString = array => {
            if (Array.isArray(array) == false) {
                throw 'must to arrayToString function parameter is array'
            }

            return array.join('')
        },
        Vue.prototype.$TemplateConvert = function(stringOrArray) {
            if (Array.isArray(stringOrArray) === false && typeof stringOrArray != 'string') {
                throw 'must to TemplateConvert function parameter is array or string'
            }

            let message = stringOrArray
            if (Array.isArray(stringOrArray) == true) {
                message = this.$arrayToString(stringOrArray)
            }

            let index = -1
            while ((index = message.indexOf('`')) != -1) {
                let lastIndex = -1
                if ((lastIndex = message.indexOf('`', index+1)) != -1) {
                    message = this.$insert(index, message, tag.bold)
                    message = this.$insert(lastIndex + tag.bold.length -1, message, endTag(tag.bold))

                    index = lastIndex + tag.bold.length -1
                } else {
                    break
                }
            }

            while ((index = message.indexOf('\n')) != -1) {
                message = this.$insert(index, message, tag.br)
                index = index + tag.br
            }

            
            console.log(message)
            return message
        },
        Vue.prototype.$insert = (index, str, addStr) => {
            return [str.slice(0, index), addStr, str.slice(index+1)].join('')
        },
        Vue.prototype.$isDataEmpty = object => {
            if (object == null) return true
            if (typeof object !== "object") return true
            if (Object.keys(object).length === 0) return true

            return false
        }
    }
}