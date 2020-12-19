<template>
  <div class="navigation-title-container">
    <div class="navigation-title">
      <span class="primary-color">C</span>runch <span class="secondary-color">T</span>ime
    </div>
  </div>
  <div class="navigation-actions-container">
    <div class="actions-center-line"></div>
    <div class="actions-container">
      <div class="navigation-text">
        Home
        <div class="home-background background-animated"></div>
      </div>
      <div class="navigation-text">
        About
        <div class="about-background background-animated-reverse"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleSection',
  setup () {
    return {
      //
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation-title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  .navigation-title {
    font-family: 'Bungee Inline', cursive;
    font-size: 90px;
    line-height: 90px;
  }
}

.navigation-actions-container {
  position: relative;

  .actions-center-line {
    position: absolute;
    top: 50%;
    background: #FFFFFF;
    width: 100%;
    height: 1px;
  }

  .actions-container {
    display: flex;
    justify-content: center;

    .navigation-text {
      cursor: pointer;
      position: relative;
      font-family: 'Bellota', cursive;
      font-size: 40px;
      line-height: 45px;
      width: 322px;
      text-align: center;
      margin: 0 2.5px;
      z-index: 1;

      .home-background {
        position: absolute;
        top: 3%;
        background: #5346FC;
        height: 100%;
        clip-path: polygon(60% 45%, 82% 45%, 100% 45%, 100% 55%, 75% 55%, 48% 55%, 0 55%, 0 45%, 19% 45%);
        width: 100%;
        z-index: -1;
      }

      .about-background {
        position: absolute;
        top: 3%;
        background: #D634BB;
        clip-path: polygon(60% 45%, 82% 45%, 100% 45%, 100% 55%, 75% 55%, 48% 55%, 0 55%, 0 45%, 19% 45%);
        width: 100%;
        height: 100%;
        z-index: -1;
      }

      .background-animated {
        animation: 1.5s selected-menu infinite both;
      }
      .background-animated-reverse {
        animation: 1.5s selected-menu infinite reverse both;
      }
    }

    @keyframes selected-menu {
      0% {
        clip-path: polygon(60% 45%, 82% 45%, 100% 45%, 100% 55%, 75% 55%, 48% 55%, 0 55%, 0 45%, 19% 45%);
      }

      10% {
        clip-path: polygon(60% 30%, 82% 40%, 100% 37%, 100% 53%, 75% 64%, 48% 52%, 0 60%, 0 43%, 19% 24%);
      }

      20% {
        clip-path: polygon(60% 40%, 82% 24%, 100% 43%, 100% 64%, 75% 60%, 48% 70%, 0 52%, 0 37%, 19% 30%);
      }

      30% {
        clip-path: polygon(60% 24%, 82% 24%, 100% 40%, 100% 70%, 75% 53%, 48% 52%, 0 60%, 0 43%, 19% 37%);
      }

      40% {
        clip-path: polygon(60% 45%, 82% 20%, 100% 10%, 100% 80%, 75% 64%, 48% 50%, 0 54%, 0 32%, 19% 45%);
      }

      50% {
        clip-path: polygon(60% 39%, 82% 45%, 100% 45%, 100% 67%, 75% 82%, 48% 61%, 0 94%, 0 23%, 19% 45%);
      }

      60% {
        clip-path: polygon(60% 45%, 82% 28%, 100% 41%, 100% 68%, 75% 51%, 48% 73%, 0 60%, 0 38%, 19% 37%);
      }

      70% {
        clip-path: polygon(60% 40%, 82% 30%, 100% 47%, 100% 59%, 75% 55%, 48% 72%, 0 66%, 0 43%, 19% 40%);
      }

      80% {
        clip-path: polygon(60% 33%, 82% 44%, 100% 29%, 100% 55%, 75% 66%, 48% 58%, 0 71%, 0 44%, 19% 33%);
      }

      90% {
        clip-path: polygon(60% 39%, 82% 42%, 100% 25%, 100% 80%, 75% 60%, 48% 70%, 0 55%, 0 38%, 19% 47%);
      }

      100% {
        clip-path: polygon(60% 45%, 82% 45%, 100% 45%, 100% 55%, 75% 55%, 48% 55%, 0 55%, 0 45%, 19% 45%);
      }
    }
  }
}
</style>
