<template>
      <button class="buttonStyle" @click="onClick()">
          {{ text }}
      </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BHButton extends Vue {
    @Prop() private text!: string;

    onClick() : void {
        this.$emit('btn-clicked')
    }
}
</script>


<style lang="scss">
@import "@/Css/site.scss";

.buttonStyle {
    background-color: $clr_lightRed;
    border-radius: 10px;
    border: 1px solid $clr_borderColor;
    box-shadow: 0px 3px 6px $clr_boxShadowColor;

    min-width: 150px;  
    width: 200px;
    height: 60px; 
    text-align: center;
    color: white;
    font-size: 16px;
}
</style>