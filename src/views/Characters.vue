<template>
  <div class="charcontainer">
      <CharacterSelection />
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CharacterSelection from '@/components/CharacterComponents/CharacterSelection.vue';

@Component({
  components: {
    CharacterSelection,
  },
})

export default class Characters extends Vue {

}
</script>

<style lang="scss">
@import "@/Css/site.scss";
@import "@/Css/character-container.scss";

body {
  background: url("../assets/BitheroBackground2.jpg") no-repeat fixed;
  background-size: cover;
  min-height: 100%;
}
</style>