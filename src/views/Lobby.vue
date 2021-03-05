<template>
  <div class="lobbycontainer container">
    <div class="top container">
      <h1>Server code: {{ this.serverCode }}</h1>
    </div>
    <div class="mid container">
      <h1>Server code: {{ this.serverCode }}</h1>
    </div>
    <div class="bot container">
      <div class="botleft"></div>
      <div class="botright"></div>
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
export default class Lobby extends Vue {
  private serverCode: String = "";

  created() {
    this.serverCode = this.$route.params.serverCode;
    if (this.serverCode != "AAABB") {
      this.$notify({
        group: "error",
        title: "Server doesn't exist",
        text: "Make sure to fill in a valid server code",
      });
      this.$router.push("/server/");
      return;
    }
  }
}
</script>


<style lang="scss">
body {
  background: url("../assets/BitheroBackground2.jpg") no-repeat fixed;
  background-size: cover;
  min-height: 100%;
}
</style>

<style lang="scss" scoped>
@import "../Css/site.scss";
@import "../Css/containers.scss";

.top {
  height: 15vh;
  min-height: 150px;
}

.mid {
  height: 40vh;
  min-height: 400px;
}

.bot {
  height: 15vh;
  min-height: 150px;
}
</style>