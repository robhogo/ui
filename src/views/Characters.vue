<template>
  <div class="charcontainer">
    <div class="title container">
      <h1>Characters</h1>
    </div>
    <div class="character-box">
      <div
        v-for="character in characters"
        :key="character.id"
        @click="selectCharacter(character.id)"
      >
        <CharacterBox
          :character="character"
          :style="
            selectedCharacter == character.id ? 'border-color: #FF4655' : ''
          "
        />
      </div>
    </div>
    <div class="close container">
      <BHButton text="Select character" @btn-clicked="SelectCharacter()" />
      <h3 @click="GoToCreate()">Create a character</h3>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CharacterBox from "@/components/CharacterComponents/CharacterBox.vue";
import BHButton from "@/components/StandardUI/BHButton.vue";
import Character from "@/classes/Character.ts";

@Component({
  components: {
    CharacterBox,
    BHButton,
  },
})
export default class Characters extends Vue {
  private selectedCharacter: number = (null as unknown) as number;
  private characters: Character[] = [
    {
      id: 1,
      name: "Nildryn",
      characterClass: { id: 1, value: "fighter" },
      avatar: { id: 1, url: "male1.png" },
      lvl: 27,
    },
    {
      id: 2,
      name: "Kydrel",
      characterClass: { id: 2, value: "Rogue" },
      avatar: { id: 2, url: "female1.png" },
      lvl: 22,
    },
    {
      id: 3,
      name: "Ursuso",
      characterClass: { id: 3, value: "Hunter" },
      avatar: { id: 3, url: "male2.png" },
      lvl: 12,
    },
    {
      id: 4,
      name: "Janna",
      characterClass: { id: 4, value: "mage" },
      avatar: { id: 4, url: "female2.png" },
      lvl: 19,
    },
  ];

  private SelectCharacter(): void {
    if (this.selectedCharacter != null) {
      this.$router.push("/server");
    } else {
      this.$notify({
        group: "error",
        title: "No character selected",
        text: "Make sure to select a character by clicking it!",
      });
    }
  }
  private GoToCreate(): void {
    this.$router.push("/characters/create");
  }
  private selectCharacter(id: number): void {
    this.selectedCharacter = id;
  }
}
</script>

<style lang="scss">
body {
  background: url("../assets/BitheroBackground2.jpg") no-repeat fixed;
  background-size: cover;
  min-height: 100%;
}
</style>

<style lang="scss" scoped>
@import "@/Css/site.scss";
@import "../Css/containers.scss";

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