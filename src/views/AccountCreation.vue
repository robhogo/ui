<template>
  <div class="regcontainer">
    <div class="title container">
      <h1>Create</h1>
    </div>
    <div class="fields container">
      <BHInput inputType="text" placeholder="Username" :text.sync="username" />
      <BHInput inputType="text" placeholder="Email" :text.sync="email" />
      <BHInput
        inputType="password"
        placeholder="Password"
        :text.sync="password"
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

@Component({
  components: {
    BHButton,
    BHInput,
  },
})
export default class Register extends Vue {
  private username: string = "";
  private email: string = "";
  private password: string = "";
  private repeatPassword: string = "";

  public RegisterEvent(): void {
    if (this.username.length > 4 && this.username.length < 16) {
      if (this.email.length > 8 && this.email.includes("@")) {
        if (this.password.length > 6 && this.password.length < 21) {
          if (this.password == this.repeatPassword) {
            this.$notify({
              group: "succes",
              title: "Account created!",
              text: "Your account has been succesfully created!",
            });
            this.$router.push("/");
          } else {
            this.$notify({
              group: "error",
              title: "password",
              text: "Passwords dont match",
            });
          }
        } else {
          this.$notify({
            group: "error",
            title: "password",
            text: "Pls fill in a password between 7 and 20 characters",
          });
        }
      } else {
        this.$notify({
          group: "error",
          title: "Email",
          text: "Pls fill in a valid email",
        });
      }
    } else {
      this.$notify({
        group: "error",
        title: "Username",
        text: "Pls fill in a username between 5 and 15 characters.",
      });
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