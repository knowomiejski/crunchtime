<template>
  <div
    :class="direction === 'right' ? 'section-container section-container-right' : 'section-container section-container-left'">
    <div class="section-picture"
         :style="'background: url(' + picture + ')  #FFF no-repeat 50% 50%;' + 'background-size: contain; background-origin: content-box;'"></div>
    <div class="section-text-container">
      <div class="section-title">
        {{ text.title }}
      </div>
      <div class="section-text">
        {{ text.content }}
      </div>
      <div class="section-link">
        <a :href="text.link">
          {{ text.link }}
        </a>
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
    height: 150px;
    min-width: 150px;
    border-radius: 50%;
    padding: 10px;
    margin: 10px;
    @include md {
      height: 200px;
      min-width: 200px;
    }
  }

  .section-text-container {
    font-family: 'Bellota Text', cursive;
    font-size: 22px;
    line-height: 22px;
    text-align: center;
    max-width: 700px;
    padding: 15px;
    @include md {
      text-align: left;
      font-size: 28px;
      line-height: 28px;
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
      text-align: center;
      a:visited {
        color: $secondary-color;
      }
      @include md {
        text-align: right;
      }
    }
  }
}

.section-container-left {

  @include md {
    flex-direction: row;
    justify-content: space-around;
  }

  .section-text-container {
    @include md {
      border-left: 3px solid $primary-color;
    }

    .section-title {
      text-decoration-color: $primary-color;
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
      border-right: 3px solid $secondary-color;
    }

    .section-title {
      text-decoration-color: $secondary-color;
    }
  }
}
</style>
