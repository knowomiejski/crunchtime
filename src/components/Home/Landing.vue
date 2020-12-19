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
      ons gemaakte applicaties een '
      <span class="secondary-color"
            style="text-decoration: underline">personal touch</span>' krijgen.
    </div>
    <div class="arrow-container">
      <div class="arrow"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing'
}
</script>

<style lang="scss" scoped>

.landing-container {
  height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  font-family: 'Bellota', cursive;

  .landing-text-container {
    font-size: 70px;
    line-height: 100px;

    .company-title {
      font-family: 'Bungee Inline', cursive;
    }
  }

  .landing-secondary-text {
    max-width: 860px;
    font-size: 35px;
    line-height: 35px;
  }

  .arrow-container {
    .arrow {
      cursor: pointer;
      height: 82px;
      width: 95px;
      background: url("../assets/down_arrow_crunch_time.svg") no-repeat center;
      background-size: contain;
      animation: 3s bop-arrow ease infinite;
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
