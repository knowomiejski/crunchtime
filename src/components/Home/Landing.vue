<template>
  <div class="landing-container">
    <div class="landing-text-container">
      <span class="primary-color">W</span>ij zijn <span class="company-title"><span class="primary-color">C</span>RUNCH
      <span
        class="secondary-color">T</span>IME</span>.<br>
      <span class="secondary-color">W</span>ij maken software.
    </div>
    <div class="landing-secondary-text">
      Onze <span class="primary-color" style="text-decoration: underline">focus</span> ligt op het ontwikkelen van
      nieuwe en unieke applicaties. Ons kleine team zorgt ervoor dat alle door
      ons gemaakte applicaties een '<span class="secondary-color"
                                          style="text-decoration: underline">personal touch</span>' krijgen.
    </div>
    <div class="arrow-container">
      <div @click="scrollToProjects" class="arrow"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  setup () {
    const scrollToProjects = () => {
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
    }

    return {
      scrollToProjects
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/global_styles.scss';

.landing-container {
  padding: 10px;
  height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  font-family: 'Bellota', cursive;

  .landing-text-container {
    font-size: 30px;
    line-height: 40px;
    @include sm {
      font-size: 50px;
      line-height: 55px;
    }
    @include md {
      font-size: 70px;
      line-height: 100px;
    }

    .company-title {
      font-family: 'Bungee Inline', cursive;
    }
  }

  .landing-secondary-text {
    max-width: 860px;
    font-size: 20px;
    line-height: 20px;
    @include sm {
      font-size: 25px;
      line-height: 25px;
    }
    @include md {
      font-size: 35px;
      line-height: 35px;
    }
  }

  .arrow-container {
    .arrow {
      cursor: pointer;
      background: url("../../assets/down_arrow_crunch_time.svg") no-repeat center;
      background-size: contain;
      animation: 3s bop-arrow ease infinite;
      height: 62px;
      width: 75px;
      @include sm {
        height: 82px;
        width: 95px;
      }
      @include md {
        height: 82px;
        width: 95px;
      }
    }
  }
}

@keyframes bop-arrow {
  0% {
    transform: translate(0, 0);
  }

  10% {
    transform: translate(0, 10px);
  }

  20% {
    transform: translate(0, 0);
  }
}

</style>
