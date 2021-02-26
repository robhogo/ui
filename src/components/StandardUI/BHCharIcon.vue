<template>
    <img class="img" :src="url"/>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BHCharIcon extends Vue {
  @Prop() private url!: string;

}
</script>

<style lang="scss" scoped>
@import "@/Css/site.scss";

.img {
    height: 100%;
}
</style>