<template>
  <input
    class="inputField"
    v-bind:type="inputType"
    v-bind:placeholder="placeholder"
    v-model="text"
    @keyup="$emit('update:text', text);"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BHInput extends Vue {
  @Prop() private text!: string;
  @Prop() private inputType!: string;
  @Prop() private placeholder!: string;
}
</script>


<style scoped lang="scss">
@import "@/Css/site.scss";

.inputField {
  background-color: $clr_textBoxWhite;
  border-radius: 10px;
  border: 1px solid $clr_borderColor;

  min-width: 280px;
  width: 60%;
  height: 50px;
  margin-top: 10px;
  box-shadow: 0px 3px 6px $clr_boxShadowColor;
  padding-left: 10px;
  font-size: 16px;

  font-family: "Rockwell";
}
</style>