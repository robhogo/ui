<template>
  <div class="regcontainer">
    <div class="title container">
      <h1>Create</h1>
    </div>
    <div class="fields container">
      <input class="inputField" type="text" placeholder="Username" />
      <input class="inputField" type="text" placeholder="Email" />
      <input class="inputField" type="password" placeholder="Password" />
      <input class="inputField" type="password" placeholder="Repeat password" />
    </div>
    <div class="close container">
      <button class="buttonStyle">Create</button>
      <h3>Already have an account?</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Register extends Vue {}
</script>

<style lang="scss">
@import "../Css/site.scss";
@import "../Css/register-container.scss";
@import "../Css/inputfieldstyle.scss";
@import "../Css/buttonstyle.scss";

.container {
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
}
.title {
  height: 20%;
}
.fields {
  height: 40%;
}
.close {
  height: 40%;
}

body {
  background-image: url("../assets/BitheroLoginBackground.jpg");
  background-size: cover;
}
</style>