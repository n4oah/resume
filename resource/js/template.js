
export function endTag(tag) {
    return tag.substring(0, 1) + '/' + tag.substring(1)
}
export const tag = {
    bold: '<b>',
    br: '<br />'
}