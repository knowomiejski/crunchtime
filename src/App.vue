<template>
  <router-view/>
</template>

<style lang="scss">
@import "global_styles.scss";

html{
  min-width: 100%;
}

body {
  min-width: 100%;
  padding: 0;
  margin: 0;
  background: #2D083E url("assets/background_triangles_crunch_time.svg") 80% 40%;
  background-size: 1000%;
  color: #FFFFFF;
  min-height: 1991px;
  cursor: default;
  @include md {
    background: #2D083E url("assets/background_triangles_crunch_time.svg") 50% 40%;
  }
}

#app {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.primary-color {
  color: #5346FC
}

.secondary-color {
  color: #D634BB
}
</style>
