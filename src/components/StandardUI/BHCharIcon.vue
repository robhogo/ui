<template>
    <img class="img" :src="fullUrl"/>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BHCharIcon extends Vue {
  @Prop() private url!: string;
  private fullUrl: string = '';

  beforeMount(){
    this.fullUrl = require('@/assets/' + this.url);
  }
}
</script>

<style lang="scss" scoped>
@import "@/Css/site.scss";

.img {
    height: 100%;
}
</style>