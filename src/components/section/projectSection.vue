<template>
<div v-if="$isDataEmpty(data) == false">
    <div class="rela-block caps greyed">project</div>
    <div v-for="item of data">
		<ul>
			<li>
				<p>
					<span class="font-weight-bolder">{{ item.title }}</span>
					<span class="sub-contnet">({{ item.startDate }} ~ {{ item.endDate || '' }}<template v-if="item.inProgress == true">진행중</template>)</span>
				</p>
				<ul>
					<li>
						<p class="small-margin">맡은업무</p>
						<ul>
							<li v-for="content of item.content">
								<p class="small-margin">{{ content }}</p>
							</li>
						</ul>
					</li>
					<li>
						<p class="small-margin">사용한 스킬</p>
						<ul>
							<li v-for="skill of item.skills">
								<p class="small-margin">{{ skill }}</p>
							</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
        <hr />
	</div>
</div>
</template>

<script>
export default {
    name: 'projectSection',
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
