<template>
  <div class="servercontainer container">
    <div v-if="!joining">
      <h1>Server select</h1>
      <div class="upper container">
        <BHButton text="Join server" @btn-clicked="joinOverview()" />
      </div>
      <div class="lower container">
        <BHButton text="Create server" @btn-clicked="createServer()" />
      </div>
    </div>
    <div v-else>
      <h1>Fill in server code</h1>
      <div class="upper container">
        <BHInput inputType="text" placeholder="Server code" :text.sync="serverCode" />
      </div>
      <div class="lower container">
        <BHButton text="Join server" @btn-clicked="createServer()" />
      </div>
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
export default class ServerSelect extends Vue {
  private joining: boolean = false;
  private serverCode: String = "";

  private joinOverview(): void {
    this.joining = true;
  }
  private createServer(): void {}
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

.upper {
  height: 10vh;
  min-height: 100px;
}
.lower {
  height: 10vh;
  min-height: 100px;
}
</style>