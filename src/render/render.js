import property from 'resource/data'
import Struct from '../utils/Struct'

const header = new Struct('introduce', property.introduce || {})

export default function render() {

    
    return header
}
