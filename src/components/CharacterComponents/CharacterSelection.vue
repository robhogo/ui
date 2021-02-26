<template>
  <div>
    <div class="title container">
      <h1>Characters</h1>
    </div>
    <div class="character-box">
      <CharacterBox />
      <CharacterBox />
      <CharacterBox />
      <CharacterBox />
      <CharacterBox />
      <CharacterBox />
      <CharacterBox />
    </div>
    <div class="close container">
      <BHButton text="Select character" @btn-clicked="SelectCharacter()"/>
      <h3 @click="GoToCreate()">Create a character</h3>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CharacterBox from "@/components/CharacterComponents/CharacterBox.vue";
import BHButton from '@/components/StandardUI/BHButton.vue';

@Component({
  components: {
    CharacterBox,
    BHButton,
  },
})
export default class CharacterSelection extends Vue {}
</script>


<style scoped lang="scss">
@import "@/Css/site.scss";

.title {
  height: 10vh;
  min-height: 100px;
}

.character-box {
  height: 55vh;
  min-height: 350px;
  overflow: auto;
}

.close {
    min-height: 150px;
    height: 15vh;
}
</style>