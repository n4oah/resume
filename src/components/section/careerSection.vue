<template>
<div v-if="$isDataEmpty(data) == false">
	<div class="rela-block caps greyed">Career</div>
	<div v-for="item of data">
		<ul>
			<li>
				<p class="text-medium">
					<span class="font-weight-bolder">{{ item.companyName }}</span>
					<span class="sub-contnet">({{ item.startDate }} ~ {{ item.endDate || '' }}<template v-if="item.inProgress == true">재직중</template>)</span>
				</p>
				<ul>
					<li class="none-list-style">
						<p class="small-margin font-weight-bolder">주요 성과</p>
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
									<template v-for="(skill, index) of item.skills">
										<span v-if="index !== item.skills.length-1" :key="index">{{ skill }}, </span>
										<span v-else :key="index">{{ skill }}</span>
									</template>
								</p>
							</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	</div>
	<hr />
</div>
</template>

<script>
export default {
	name: 'career',
	created: function() {
	},
	data() {
		return {
		}
	},
	props: ['data']
}
</script>

<style scope>
.sub-contnet {
	font-size: 80%;
}
</style>