<template>
  <div class="regcontainer">
    <div class="title container">
      <h1>Create</h1>
    </div>
    <div class="fields container">
      <BHInput
        inputType="text"
        placeholder="Username"
        :text.sync="request.Username"
      />
      <BHInput
        inputType="text"
        placeholder="Email"
        :text.sync="request.Email"
      />
      <BHInput
        inputType="password"
        placeholder="Password"
        :text.sync="request.Password"
      />
      <BHInput
        inputType="password"
        placeholder="Repeat Password"
        :text.sync="repeatPassword"
      />
    </div>
    <div class="close container">
      <BHButton text="Create account" @btn-clicked="RegisterEvent()" />
      <h3 @click="GoToLogin()">Already have an account?</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BHButton from "@/components/StandardUI/BHButton.vue";
import BHInput from "@/components/StandardUI/BHInput.vue";
import RegisterRequest from "@/requests/RegisterRequest";
import { authService } from "@/services/authService";

@Component({
  components: {
    BHButton,
    BHInput,
  },
})
export default class Register extends Vue {
  private request: RegisterRequest = new RegisterRequest();
  private repeatPassword: string = "";

  public RegisterEvent(): void {
    if (!this.CheckUsername()) return;
    if (!this.CheckEmail()) return;
    if (!this.CheckPassword()) return;
    if (this.Register()) {
      this.$router.push("/");
    }
  }
  public CheckPassword(): Boolean {
    if (this.request.Password.length > 6 && this.request.Password.length < 21) {
      if (this.request.Password == this.repeatPassword) {
        return true;
      } else {
        this.$notify({
          group: "error",
          title: "password",
          text: "Passwords dont match",
        });
        return false;
      }
    } else {
      this.$notify({
        group: "error",
        title: "password",
        text: "Pls fill in a password between 7 and 20 characters",
      });
      return false;
    }
  }
  public CheckEmail(): Boolean {
    if (this.request.Email.length < 9 || !this.request.Email.includes("@")) {
      this.$notify({
        group: "error",
        title: "Email",
        text: "Pls fill in a valid email",
      });
      return false;
    }
    return true;
  }
  public CheckUsername(): Boolean {
    if (this.request.Username.length < 5 || this.request.Username.length > 15) {
      this.$notify({
        group: "error",
        title: "Username",
        text: "Pls fill in a username between 5 and 15 characters.",
      });
      return false;
    }
    return true;
  }
  public Register(): Boolean {
    var response = authService.Register(this.request);
      if (response) {
        this.$notify({
          group: "error",
          title: "Account created!",
          text: "Your account has been succesfully created!",
          type: "succes",
        });
        return true;
      } else {
        this.$notify({
          group: "error",
          title: "error",
          text: "This username already exists",
        });
        return false;
      }
  }

  public GoToLogin(): void {
    this.$router.push("/");
  }
}
</script>

<style scoped lang="scss">
@import "../Css/site.scss";
@import "../Css/containers.scss";

.title {
  height: 20%;
}
.fields {
  height: 50%;
}
.close {
  height: 30%;
}
</style>

<style lang="scss">
body {
  background: url("../assets/BitheroLoginBackground.jpg") no-repeat fixed;
  background-size: cover;
  min-height: 100%;
}
</style>