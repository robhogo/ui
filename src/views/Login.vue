<template>
  <div class="regcontainer">
    <div class="title container">
      <h1>Login</h1>
    </div>
    <div class="fields container">
      <BHInput inputType="text" placeholder="Username" :text.sync="username"/>
      <BHInput inputType="password" placeholder="Password" :text.sync="password" />
    </div>
    <div class="close container">
      <BHButton text="Login" @btn-clicked="LoginEvent()" />
      <h3 @click="GoCreateAccount()">Create account</h3>
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
    BHInput,
  },
})

export default class Login extends Vue {
  private username: string = "";
  private password: string = "";

  private LoginEvent(): void {
    console.log(this.username);
    console.log(this.password);
  }
  private GoCreateAccount(): void {
    this.$router.push("/register");
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
  height: 30%;
}
.fields {
  height: 30%;
}
.close {
  height: 40%;
}

body {
  background-image: url("../assets/BitheroLoginBackground.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}
</style>