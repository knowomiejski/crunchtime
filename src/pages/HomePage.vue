<template>
  <Landing></Landing>
  <Projects></Projects>
</template>

<script>
import Landing from '@/components/Home/Landing'
import Projects from '@/components/Home/Projects'
export default {
  name: 'HomePage',
  components: { Projects, Landing }
}
</script>

<style scoped>

</style>
