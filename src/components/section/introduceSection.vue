<template>
<div>
    <div class="rela-block caps greyed">introduce</div>
    <div>
        <p class="justified">{{ $arrayToString(data.simpleIntroduce) }}</p>
    </div>
</div>
</template>

<script>
export default {
    name: 'introduceSection',
    created: function() {
        //console.log(this.data)
        console.log(this.$arrayToString)
    },
    data() {
        return {
        }
    },
    props: ['data']
}
</script>
