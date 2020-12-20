<template>
  <div class="title-container">
    <span :class="color === 'blue' ? 'primary-color' : 'secondary-color'">{{ title[0] }}</span>{{ title.slice(1) }}
  </div>
</template>

<script>

export default {
  name: 'Title',
  props: {
    color: String,
    title: String
  }
}
</script>

<style lang="scss" scoped>
@import 'src/global_styles.scss';

.title-container {
  padding: 5px 0;
  display: flex;
  justify-content: center;
  font-family: 'Bellota', cursive;
  font-size: 40px;
  line-height: 40px;

  @include sm {
    font-size: 45px;
    line-height: 45px;
  }

  @include md {
    font-size: 55px;
    line-height: 55px;
  }
}
</style>
