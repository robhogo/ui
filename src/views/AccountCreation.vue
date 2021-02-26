<template>
  <div class="regcontainer">
    <div class="title container">
      <h1>Create</h1>
    </div>
    <div class="fields container">
      <BHInput inputType="text" placeholder="Username" :text.sync="username"/>
      <BHInput inputType="text" placeholder="Email" :text.sync="email"/>
      <BHInput inputType="password" placeholder="Password" :text.sync="password"/>
      <BHInput inputType="password" placeholder="Repeat Password" :text.sync="repeatPassword"/>
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
  private username: string = "";
  private email: string = "";
  private password: string = "";
  private repeatPassword: string = "";

  public RegisterEvent() : void{
    console.log(this.username);
    console.log(this.email);
    console.log(this.password);
    console.log(this.repeatPassword);
  } 
  public GoToLogin() : void{
    this.$router.push("/");
  } 

}
</script>

<style scoped lang="scss">
@import "../Css/site.scss";
@import "../Css/register-container.scss";

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
  background: url("../assets/BitheroLoginBackground.jpg") no-repeat fixed;
  background-size: cover;
  min-height: 100%;
}
</style>