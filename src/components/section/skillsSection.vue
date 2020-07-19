<template>
<div v-if="$isDataEmpty(data) == false">
    <div class="rela-block caps greyed">Skills</div>
    <div v-for="(item, index) in data" :key="index">
        <ul>
            <li><p class="font-weight-bolder text-medium">{{ item.name }}</p>
                <ul style="list-style:none;">
                    <template v-for="(skill, idx) in item.skill" >
                        <!-- <div class="text-center"> -->
                        <li :key="idx" style="display: inline-block;">
                            <b-badge variant="primary" style="margin-right: 1vh; margin-bottom: 1vh; font-size: 1.7vh; padding: 1vh;">{{ skill.name }}</b-badge>
                        </li>
                        <!-- </div> -->
                        <!-- <span>{{ skill.name }}</span> -->
                        <!-- <b-progress variant="success" :max="10" :value="parseInt(skill.level)" :show-value="true"></b-progress> -->
                    </template>
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
