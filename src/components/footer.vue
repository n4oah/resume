<template>
<footer>
    {{ message }} |
    <a herf="https://github.com/n4oah/resume">
    </a>
</footer>
</template>
 
<script>
export default {
    name: "mainFooter",
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