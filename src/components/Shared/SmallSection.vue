<template>
  <div class="small-section-container">
    <div class="title">
      {{ title }}
    </div>
    <div class="spacer-small"></div>
    <div class="content">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmallSection',
  props: {
    title: String,
    content: String
  }
}
</script>

<style lang="scss" scoped>
@import 'src/global_styles.scss';

.small-section-container {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Bellota Text', cursive;
  font-size: 22px;
  line-height: 22px;
  max-width: 300px;
  text-align: center;

  @include md {
    font-size: 28px;
    line-height: 28px;
  }

  .title {
    text-decoration: underline;
    text-decoration-color: #D634BB;
  }

  .content {
    cursor: text;
  }
}

</style>
