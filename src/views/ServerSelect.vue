<template>
  <div class="servercontainer container">
    <h1>Server select</h1>
    <div class="upper container">
      <BHButton text="Join server" @btn-clicked="joinServer()" />
    </div>
    <div class="lower container">
      <BHButton text="Create server" @btn-clicked="createServer()" />
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
  private joinServer(): void {}
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

.upper{
    height: 10vh;
    min-height: 100px;
}
.lower{
    height: 10vh;
    min-height: 100px;
}
</style>