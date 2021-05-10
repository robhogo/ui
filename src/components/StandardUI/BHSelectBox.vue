<template>
  <select class="selectStyle" v-model="selectedOption" @change="onChange()">
    <option :value="null" disabled selected hidden>Select a class</option>
    <option v-for="option in options" :key="option.id" :value="option">
      {{ option.value }}
    </option>
  </select>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SelectOption from '@/classes/SelectOption';

@Component
export default class BHButton extends Vue {
  @Prop() private options!: SelectOption[];

  private selectedOption: SelectOption = (null as unknown) as SelectOption;

  private onChange() : void {
    this.$emit('eventname', this.selectedOption);
  }
  created(){
    console.log(this.options);
  }
}
</script>


<style scoped lang="scss">
@import "@/Css/site.scss";

.selectStyle {
  background-color: $clr_textBoxWhite;
  border-radius: 10px;
  border: 1px solid $clr_borderColor;

  min-width: 280px;
  max-width: 600px;
  width: 62%;
  height: 50px;
  margin-top: 10px;
  box-shadow: 0px 3px 6px $clr_boxShadowColor;
  padding-left: 10px;
  font-size: 16px;

  font-family: "Rockwell";
}
</style>