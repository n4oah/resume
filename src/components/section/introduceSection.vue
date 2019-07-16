<template>
<div v-if="$isDataEmpty(data) == false">
    <div class="rela-block caps greyed">introduce</div>
    <div>
        <p class="justified" v-html="$TemplateConvert(data.simpleIntroduce)"></p><b-link v-b-modal.more-introduce @:click.stop="doThis" class="justified">더 보기</b-link>

        <b-modal id="more-introduce" size="lg" :scrollable="true" :ok-only="true" :centered="true" title="자기소개서">
            <p class="my-8 justified" v-html="$TemplateConvert(data.viewMore)"></p>
        </b-modal>
    </div>
</div>
</template>

<script>
export default {
    name: 'introduceSection',
    created: function() {
    },
    data() {
        return {
        }
    },
    methods: {
        introduceMore: function(event) {
            
        }
    },
    props: ['data']
}
</script>
