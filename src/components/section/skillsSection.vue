<template>
<div v-if="$isDataEmpty(data) == false">
    <div class="rela-block caps greyed">Skills</div>
    <div v-for="item in data">
        <ul>
            <li><p class="font-weight-bolder text-medium">{{ item.name }}</p>
                <ul>
                    <div v-for="skill in item.skill">
                        <li class="medium-margin">
                            <span>{{ skill.name }}</span>
                            <b-progress variant="success" :max="10" :value="parseInt(skill.level)" :show-value="true"></b-progress>
                        </li>
                    </div>
                </ul>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name: 'skillsSection',
    created: function() {
    },
    data() {
        return {
        }
    },
    props: ['data']
}
</script>
