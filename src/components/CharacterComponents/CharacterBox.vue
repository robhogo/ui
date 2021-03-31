<template>
  <div class="box">
    <div class="icon container">
      <BHCharIcon :url="character.imgUrl" />
    </div>
    
    <div class="name container">
      <h2>{{ character.name }}</h2>
    </div>

    <div class="info container">
      <div class="character-info">
           {{ character.characterClass.name }}
      </div>
      <div class="character-info">
          Lvl {{ character.combatLvl.lvl }}
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BHCharIcon from '@/components/StandardUI/BHCharIcon.vue';
import Character from "@/classes/Character";

@Component ({
  components: {
    BHCharIcon,
  }
})
export default class CharacterBox extends Vue {
  @Prop() private character!: Character;

}
</script>


<style lang="scss" scoped>

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
  height: 100%;
}
.icon {
  width:25%;
}
.info{
  width:25%;
}
.name{
  width: 50%;
}

.character-info{
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>