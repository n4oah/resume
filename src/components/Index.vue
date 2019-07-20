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
        <template v-for="(key, value) in data.sns">
          <p class="rela-block social twitter">{{ key }} : {{ value }}</p>
        </template>
        <!--
        <p class="rela-block social twitter">Twitter stuff</p>
        <p class="rela-block social pinterest">Pinterest things</p>
        <p class="rela-block social linked-in">Linked-in man</p>
        -->
        
        <p class="rela-block caps side-header">Expertise</p>
        <p class="rela-block list-thing">HTML</p>
        <p class="rela-block list-thing">CSS (Stylus)</p>
        <p class="rela-block list-thing">JavaScript & jQuery</p>
        <p class="rela-block list-thing">Killer Taste</p>
        <p class="rela-block caps side-header">Education</p>
        <p class="rela-block list-thing">Advanced potion making</p>
        <p class="rela-block list-thing">Degree in popping and locking</p>
        <p class="rela-block list-thing">Knitting game on point</p>
        <p class="rela-block list-thing">Culinary af</p>
      </div>
    </div>
    <div id="content" class="rela-block content-container">
      <h2 class="rela-block caps title">{{ data.header.job }}</h2>
      <div class="rela-block separator"></div>
      <introduceSection :data="data.introduce|| {}" />
      <skillsSection :data="data.skills || []" />
      <careerSection :data="data.career || []" />
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
    careerSection: section.careerSection
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  /* transition: 0.35s ease; */
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
  background-color: rgba(255, 255, 255, 0.92);
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
  cursor: pointer;
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
.social.twitter:before {
  background: url("https://cdn3.iconfinder.com/data/icons/social-media-2026/60/Socialmedia_icons_Twitter-07-128.png")
    center no-repeat;
}
.social.pinterest:before {
  background: url("https://cdn3.iconfinder.com/data/icons/social-media-2026/60/Socialmedia_icons_Pinterest-23-128.png")
    center no-repeat;
}
.social.linked-in:before {
  background: url("https://cdn3.iconfinder.com/data/icons/social-media-2026/60/Socialmedia_icons_LinkedIn-128.png")
    center no-repeat;
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
</style>