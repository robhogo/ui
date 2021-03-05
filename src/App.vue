<template>
  <div id="app">
    <router-view />
    <notifications group="error" classes="error" />
  </div>
</template>

<style lang="scss">
@import "@/Css/site.scss";

#app {
 font-family: $font_family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}


.error {
  // Style of the notification itself
  border: 5px solid $clr_lightRed;
  background: $clr_lightRed !important;
  color: $clr_darkWhite;
  padding: 1em;
  font-family: $font_family;
}

.succes {
  border: 5px solid $clr_green;
  background: $clr_green !important;
  color: $clr_darkWhite;
  padding: 1em;
  font-family: $font_family;
}

.vue-notification-group {
  left: 50%;
  margin-left: -150px;
  position: absolute;
}
</style>
