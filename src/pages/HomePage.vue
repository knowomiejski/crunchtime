<template>
  <Landing></Landing>
  <Projects id="projects"></Projects>
  <div class="spacer"></div>
  <div class="spacer"></div>
  <Info></Info>
</template>

<script>
import Landing from '@/components/Home/Landing'
import Projects from '@/components/Home/Projects'
import Info from '@/components/Home/Info'
export default {
  name: 'HomePage',
  props: {
    title: String
  },
  components: { Projects, Landing, Info }
}
</script>

<style scoped>

</style>
