<template>
  <div class="box">
    <div class="icon container">
      <BHCharIcon :url="require('../../assets/male1.png')" />
    </div>
    
    <div class="name container">
      test
    </div>

    <div class="info container">
      test
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BHCharIcon from '@/components/StandardUI/BHCharIcon.vue';

@Component ({
  components: {
    BHCharIcon,
  }
})
export default class CharacterBox extends Vue {
}
</script>


<style scoped lang="scss">
@import "@/Css/site.scss";

.box {
  height: 6.5vh;
  min-height: 20px;
  width: 80%;
  padding: 10px;

  margin: auto;
  margin-bottom: 25px;
  display: block;

  border: 1px solid $clr_borderColor;
  box-shadow: 0px 3px 6px $clr_boxShadowColor;
}

.container {
  float: left;  
}

.icon {
  width:25%;
  height: 100%;
}
.info{
  width:25%;
}
.name{
  width: 50%;
}
</style>