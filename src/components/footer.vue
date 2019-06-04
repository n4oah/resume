<template>
<div class="header">
    {{ message }} |
    <a herf="https://github.com/n4oah/resume">
    </a>
</div>
</template>
 
<script>
export default {
    name: "footer",
    data() {
        return {
            message: "copyright all rights reserved n4oah",
            site: "https://github.com/n4oah/resume"
        };
    }
};
</script>

<style scoped>

</style>