<template>
  <div :class="direction === 'right' ? 'section-container section-container-right' : 'section-container section-container-left'">
    <div class="section-picture"
         :style="'background: url(' + picture + ')  #FFF no-repeat 50% 50%;' + 'background-size: fit;'"></div>
    <div class="section-text-container">
      <div class="section-title">
        {{ text.title }}
      </div>
      <div class="section-text">
        {{ text.content }}
      </div>
      <div class="section-link">
        {{ text.link }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    picture: String,
    text: Object,
    direction: String
  },
  name: 'Section'
}
</script>

<style lang="scss" scoped>
@import 'src/global_styles.scss';

.section-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px;

  .section-picture {
    height: 200px;
    min-width: 200px;
    background-color: #FFFFFF;
    border-radius: 50%;
    padding: 10px;
    margin: 10px;
  }

  .section-text-container {
    font-family: 'Bellota Text', cursive;
    font-size: 28px;
    line-height: 28px;
    text-align: center;
    max-width: 700px;
    padding: 15px;
    @include md {
      text-align: left;
    }

    .section-title {
      font-family: 'Bellota', cursive;
      margin-bottom: 10px;
      text-decoration: underline;
    }

    .section-text {
      margin-bottom: 10px;
    }

    .section-link {
      text-decoration: underline;
      color: $primary-color;
      text-align: right;
    }
  }
}

.section-container-left {

  @include md {
    flex-direction: row;
    justify-content: space-around;
  }

  .section-picture {
    height: 200px;
    min-width: 200px;
    background-color: #FFFFFF;
    border-radius: 50%;
    padding: 10px;
    margin: 10px;
  }

  .section-text-container {
    @include md {
      border-left: 3px solid #D634BB;
    }

    .section-title {
      text-decoration-color: #D634BB;
    }
  }
}

.section-container-right {
  @include md {
    flex-direction: row-reverse;
    justify-content: space-around;
  }

  .section-text-container {
    @include md {
      border-right: 3px solid #5346FC;
    }

    .section-title {
      text-decoration-color: #5346FC;
    }
  }
}
</style>
