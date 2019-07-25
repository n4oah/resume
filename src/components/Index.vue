<template>
	<div class="rela-block page">
		<div id="title" class="rela-block top-bar">
			<div class="caps name">
				<div class="abs-center">
					<span>{{ data.header.name }}</span>
				</div>
			</div>
		</div>
		<div id="side" class="side-bar">
			<div class="resume-photo">
				<img :src="resumePhoto"/>
			</div>
			<div>
				<div class="info">
					<img src="resource/icon/open-iconic/svg/person.svg" class="open-icon" alt="person" />
					<span>{{ data.header.name }}</span>
				</div>
				<div class="info">
					<img src="resource/icon/open-iconic/svg/envelope-closed.svg" class="open-icon" alt="email" />
					<span>{{ data.header.email }}</span>
				</div>
				<div class="info">
					<img src="resource/icon/open-iconic/svg/phone.svg" class="open-icon" alt="tel" />
					<span>{{ data.header.telNumber }}</span>
				</div>
				<div class="info">
					<img src="resource/icon/open-iconic/svg/person.svg" class="open-icon" alt="info" />
					<span>{{ getInfo }}</span>
				</div>
				<br />
				<Pass v-for="(value, key) in data.sns" :key="key" :object="$TemplateConvert(value)">
					<div slot-scope="{ object }" class="social-info">
						<a :href="object.href" :target="object.target" class="no-decoration">
							<img :src="'resource/icon/sns/' + key + '.png'" />
							{{object.href}}
						</a>
					</div>
				</Pass>
				<div>
					<p class="rela-block caps side-header">Education</p>
					<ul>
						<div v-for="(item, index) of data.education" :key="index">
							<li>
								<span class="font-weight-bolder">{{ item.name }} </span>
								<span>({{item.startDate}} ~ </span>
								<span v-if="item.inProgress == true">학습중</span>
								<span v-else>{{ item.endDate }})</span>
								<p class="text-muted font-italic">{{ item.content }}</p>
							</li>
						</div>
					</ul>
					<p class="rela-block caps side-header">Certificate</p>
					<ul>
						<div v-for="(item, index) of data.certificate" :key="index">
							<li>
								<span class="font-weight-bolder">{{ item.name }} </span>
								<span>({{item.acquisitionData}})</span>
								<p class="text-muted font-italic">{{ item.agencyIssuing }}</p>
							</li>
						</div>
					</ul>
				</div>
			</div>
		</div>
		<div id="content" class="rela-block content-container">
			<h1 class="rela-block title">{{ data.header.job }}</h1>
			<div class="rela-block separator"></div>
			<introduceSection :data="data.introduce|| {}" />
			<skillsSection :data="data.skills || []" />
			<careerSection :data="data.career || []" />
			<projectSection :data="data.project || []" />
		</div>
	</div>
</template>
 
<script>
import resumePhoto from "resource/img/resume-photo.jpg";
import settingData from "resource/data.json";
import * as section from "src/components/section";

export default {
	name: "HelloWorld",
	data() {
		return {
			data: settingData,
			resumePhoto: resumePhoto
		};
	},
	computed: {
		getInfo: function() {
			let
				now = new Date(),
				birthDay = new Date(this.data.header.birthday),
				birthDayYear = birthDay.getFullYear(),
				gender = this.data.header.gender ? '남' : '여'
      ;
      
			let age = now.getFullYear() - birthDay.getFullYear()
			birthDay.setFullYear(now.getFullYear());
			return gender + ', ' + birthDayYear + '년, ' + (age+1) + '(만 ' + ((now < birthDay) == true ? --age : age) + '세)'
		}
	},
	components: {
		skillsSection: section.skillsSection,
		introduceSection: section.introduceSection,
		careerSection: section.careerSection,
		projectSection: section.projectSection
	}
};
</script>

<style>
* {
	box-sizing: border-box;
	/* transition: 0.35s ease; */
}
.medium-margin {
	margin-top: 12px;
}
.text-medium {
	font-size: 110%;
}
.none-list-style {
	list-style:none;
}
.resume-photo {
	margin-top: 20px;
	margin-bottom: 20px;
}
img {
	max-width: 100%;
	height: auto;
}
.progress .progress-bar {
	animation-name: animateBar;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 0.4s;
}
#side .info {
	margin-bottom: 8px;
}
#side .social-info {
	margin-bottom: 12px;
}
.no-decoration {
	text-decoration: none !important;
}
@keyframes animateBar {
	0% {
		transform: translateX(-100%);
	}
	100% {
		transform: translateX(0);
	}
}
.rela-block {
	display: block;
	position: relative;
	margin: auto;
}
.rela-inline {
	display: inline-block;
	position: relative;
	margin: auto;
}
.floated {
	display: inline-block;
	position: relative;
	margin: false;
}
.abs-center {
	display: false;
	position: absolute;
	margin: false;
	top: 50%;
	left: 50%;
	right: false;
	bottom: false;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	text-align: center;
	width: 88%;
}
.open-icon {
	width: 14px;
	height: 14px;
	padding: auto;
	vertical-align: middle;
}
body {
	font-family: "Open Sans";
	font-size: 18px;
	letter-spacing: 0px;
	font-weight: 400;
	line-height: 28px;
	background-size: cover;
}
body:before {
	content: "";
	display: false;
	position: fixed;
	margin: 0;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
.caps {
	text-transform: uppercase;
}
.justified {
	text-align: justify;
}
p.light {
	color: #777;
}
h2 {
	font-family: "Open Sans";
	font-size: 30px;
	letter-spacing: 5px;
	font-weight: 600;
	line-height: 40px;
	color: #000;
}
h3 {
	font-family: "Open Sans";
	font-size: 21px;
	letter-spacing: 1px;
	font-weight: 600;
	line-height: 28px;
	color: #000;
}
.page {
	width: 90%;
	max-width: 1200px;
	margin: 80px auto;
	background-color: #fff;
	box-shadow: 6px 10px 28px 0px rgba(0, 0, 0, 0.4);
}
.top-bar {
	height: 220px;
	background-color: #848484;
	color: #fff;
}
.name {
	display: false;
	position: absolute;
	margin: false;
	top: false;
	left: calc(350px + 5%);
	right: 0;
	bottom: 0;
	height: 120px;
	text-align: center;
	font-family: "Raleway";
	font-size: 58px;
	letter-spacing: 8px;
	font-weight: 100;
	line-height: 60px;
}
.name div {
	width: 94%;
}
.side-bar {
	display: false;
	position: absolute;
	margin: false;
	top: 60px;
	left: 5%;
	right: false;
	bottom: 0;
	width: 350px;
	background-color: #f7e0c1;
	padding: 20px 30px 50px;
}
.mugshot {
	display: false;
	position: absolute;
	margin: false;
	right: false;
	bottom: false;
}
.social {
	padding-left: 60px;
	margin-bottom: 20px;
	/* cursor: pointer; */
}

.social:before {
	content: "";
	display: false;
	position: absolute;
	margin: false;
	top: -4px;
	left: 10px;
	right: false;
	bottom: false;
	height: 35px;
	width: 35px;
	background-size: cover !important;
}

.side-header {
	font-family: "Open Sans";
	font-size: 18px;
	letter-spacing: 4px;
	font-weight: 600;
	line-height: 28px;
	margin: 60px auto 10px;
	padding-bottom: 5px;
	border-bottom: 1px solid #888;
}
.list-thing {
	padding-left: 25px;
	margin-bottom: 10px;
}
.content-container {
	margin-right: 0;
	width: calc(95% - 350px);
	padding: 25px 40px 50px;
}
.content-container > * {
	margin: 0 auto 25px;
}
.content-container > h3 {
	margin: 0 auto 5px;
}
.content-container > p.long-margin {
	margin: 0 auto 50px;
}
.title {
	width: 80%;
	text-align: center;
}
.separator {
	width: 240px;
	height: 2px;
	background-color: #999;
}
.small-margin {
	margin-top: 5px;
	margin-bottom: 5px;
}
.greyed {
	background-color: #ddd;
	width: 100%;
	max-width: 580px;
	text-align: center;
	font-family: "Open Sans";
	font-size: 18px;
	letter-spacing: 6px;
	font-weight: 600;
	line-height: 28px;
	margin-top: 20px;
	margin-bottom: 20px;
}
@media screen and (max-width: 1150px) {
	.name {
		color: #fff;
		font-family: "Raleway";
		font-size: 38px;
		letter-spacing: 6px;
		font-weight: 100;
		line-height: 48px;
	}
}
.social.github {
	background: url("~resource/icon/sns/github.png") center no-repeat;;
	background-size: 100%;
}
.social.tistory {
	background: url("~resource/icon/sns/tistory.png") center no-repeat;;
	background-size: 100%;
}
</style>