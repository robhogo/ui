<template>
<div>
      <img class="icon" :src="url"/>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BHCharIcon extends Vue {
  @Prop() private url!: string;

}
</script>

<style scoped lang="scss">
@import "@/Css/site.scss";

.icon {
    max-width: 100%;
    max-height: 100%;
}
</style>