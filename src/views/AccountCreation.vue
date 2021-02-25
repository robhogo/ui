<template>
  <div class="regcontainer">
    <div class="title container">
      <h1>Create</h1>
    </div>
    <div class="fields container">
      <BHInput inputType="text" placeholder="Username" />
      <BHInput inputType="text" placeholder="Email" />
      <BHInput inputType="password" placeholder="Password" />
      <BHInput inputType="password" placeholder="Repeat Password" />
    </div>
    <div class="close container">
      <BHButton text="Create account" @btn-clicked="RegisterEvent()"/>
      <h3 @click="GoToLogin()">Already have an account?</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BHButton from "@/components/StandardUI/BHButton.vue";
import BHInput from "@/components/StandardUI/BHInput.vue";

  @Component({
    components: {
      BHButton,
      BHInput
    }
  })

export default class Register extends Vue {
  public RegisterEvent() : void{
    this.$router.push("/register");
  } 
  public GoToLogin() : void{
    this.$router.push("/");
  } 
}
</script>

<style lang="scss">
@import "../Css/site.scss";
@import "../Css/register-container.scss";


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
  height: 50%;
}
.close {
  height: 30%;
}

body {
  background-image: url("../assets/BitheroLoginBackground.jpg");
  background-size: cover;
}
</style>