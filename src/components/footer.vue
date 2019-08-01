<template>
<footer id="footer" class="footer-container">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                <ul class="list-unstyled list-inline social-icon text-center">
                    <Pass v-for="(value, key) in data.social" :key="key" :object="$TemplateConvert(value)">
                        <template slot-scope="{ object }">
                            <li class="list-inline-item">
                                <a :href="object.href"><img :src="'resource/icon/social/' + key + '.png'" /></a>
                            </li>
                        </template>
                    </Pass>
                </ul>
            </div>
            </hr>
        </div>	
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                <!-- <p><u><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p> -->
                <p class="h6">
                    &copy All right Reversed.<a class="text-green ml-2" href="https://github.com/n4oah" target="_blank">n4oah</a>
                    &nbsp-&nbsp repository : <a class="text-green ml-2" :href="site" target="_blank">{{ site }}</a>
                </p>
            </div>
            </hr>
        </div>	
    </div>
</footer>
</template>
 
<script>
import settingData from "resource/data.json";

export default {
    name: "mainFooter",
    data() {
        return {
            data: settingData,
            message: "copyright all rights reserved n4oah",
            site: "https://github.com/n4oah/resume"
        };
    }
};
</script>

<style scoped>
footer {
    padding: 60px 0;
}
#footer {
    background: #666666 !important;
}
#footer h5{
	padding-left: 10px;
    border-left: 3px solid #eeeeee;
    padding-bottom: 6px;
    margin-bottom: 20px;
    color:#ffffff;
}
#footer a {
    color: #ffffff;
    text-decoration: none !important;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
#footer ul.social li{
	padding: 3px 0;
}
#footer ul.social li a i {
    margin-right: 5px;
	font-size:25px;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.social li:hover a i {
	font-size:30px;
	margin-top:-10px;
}
#footer ul.social li a,
#footer ul.quick-links li a{
	color:#ffffff;
}
#footer ul.social li a:hover{
	color:#eeeeee;
}
#footer ul.quick-links li{
	padding: 3px 0;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.quick-links li:hover{
	padding: 3px 0;
	margin-left:5px;
	font-weight:700;
}
#footer ul.quick-links li a i{
	margin-right: 5px;
}
#footer ul.quick-links li:hover a i {
    font-weight: 700;
}

@media (max-width:767px){
	#footer h5 {
        padding-left: 0;
        border-left: transparent;
        padding-bottom: 0px;
        margin-bottom: 10px;
    }
}
</style>