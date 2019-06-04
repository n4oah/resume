<template>
  <div id="app">
    <router-view/>

    <!-- footer -->
    <div id="footer">
        <main-footer />
    </div>
  </div>
</template>
 
<script>
import footer from './components/footer.vue'

export default {
  name: 'App',
  components: {
    'main-footer': footer
  }
}
</script>
 
<style>
</style>