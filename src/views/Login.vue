<template>
  <div class="regcontainer">
    <div class="title container">
      <h1>Login</h1>
    </div>
    <div class="fields container">
      <BHInput
        inputType="text"
        placeholder="Username"
        :text.sync="request.Username"
      />
      <BHInput
        inputType="password"
        placeholder="Password"
        :text.sync="request.Password"
      />
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
import AuthenticateRequest from "@/requests/AuthenticateRequest";
import { authService } from "@/services/authService";

@Component({
  components: {
    BHButton,
    BHInput,
  },
})
export default class Login extends Vue {
  private request: AuthenticateRequest = new AuthenticateRequest();

  private async LoginEvent(): Promise<void> {
    var response = await authService.Login(this.request);
    if (response != null) {
      this.$store.commit("auth_success", response);
      this.$router.push("/characters");
    } else {
      this.$notify({
        group: "error",
        title: "invalid credentials",
        text: "This username and password combination is incorrect.",
      });
    }
  }
  private GoCreateAccount(): void {
    this.$router.push("/register");
  }
}
</script>


<style lang="scss">
body {
  background: url("../assets/BitheroLoginBackground.jpg") no-repeat fixed;
  background-size: cover;
  min-height: 100%;
}
</style>

<style lang="scss" scoped>
@import "../Css/site.scss";
@import "../Css/containers.scss";

.title {
  height: 30%;
}
.fields {
  height: 30%;
}
.close {
  height: 40%;
}
</style>