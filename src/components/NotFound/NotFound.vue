<template>
  <div class="spacer"></div>
  <div class="spacer"></div>
  <div class="not-found-container">
    <div class="title">
      <span class="primary-color">4</span>04
    </div>
    <div class="spacer"></div>
    <div>
      Pagina niet gevonden :(
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="scss" scoped>
.not-found-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Bellota', cursive;
  text-align: center;
  font-size: 40px;
  line-height: 40px;
  .title {
    font-size: 64px;
    line-height: 64px;
  }
}

</style>
