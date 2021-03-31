<template>
  <div class="charcontainer" v-if="!IsLoading">
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
import Character from "@/classes/Character";
import { characterService } from "@/services/characterService";

@Component({
  components: {
    CharacterBox,
    BHButton,
  },
})
export default class Characters extends Vue {
  private selectedCharacter: number = (null as unknown) as number;
  private characters: Character[] = [];
  private IsLoading: Boolean = true;

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

  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/");
    } else {
      this.characters = await characterService.GetAllByUserId(
        this.$store.state.user.id
      );
      this.IsLoading = false;
      console.log(this.characters);
    }
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
@import "@/Css/containers.scss";

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