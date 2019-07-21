<template>
<div v-if="$isDataEmpty(data) == false">
    <div class="rela-block caps greyed">project</div>
    <div v-for="item of data">
		<ul>
			<li>
				<p class="small-margin text-medium">
					<span class="font-weight-bolder">{{ item.title }}</span>
					<span class="sub-contnet">({{ item.startDate }} ~ {{ item.endDate || '' }}<template v-if="item.inProgress == true">진행중</template>)</span>
				</p>
				<p class="text-muted font-italic">{{ item.organization }}</p>
				<ul>
					<li class="none-list-style">
						<p class="small-margin font-weight-bolder">맡은업무</p>
						<ul>
							<li v-for="content of item.content">
								<p class="small-margin">{{ content }}</p>
							</li>
						</ul>
					</li>
					<li class="none-list-style">
						<p class="small-margin font-weight-bolder">사용한 스킬</p>
						<ul>
							<li>
								<p class="small-margin">
									<template v-for="(skill, index) of item.description">
										<span v-if="index !== item.description.length-1" :key="index">{{ skill }}, </span>
										<span v-else :key="index">{{ skill }}</span>
									</template>
								</p>
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
