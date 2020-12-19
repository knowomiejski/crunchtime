<template>
  <TitleSection></TitleSection>
  <div class="content-container">
    <router-view></router-view>
  </div>
</template>

<script>
import TitleSection from '@/components/Navigation/TitleSection'

export default {
  name: 'MainLayout',
  components: { TitleSection }
}
</script>

<style lang="scss" scoped>
.content-container {
  max-width: 1080px;
  margin: auto;
}
</style>
