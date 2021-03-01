<template>
  <div class="charcontainer">
    <div class="title container">
      <h1>Create a character</h1>
    </div>

    <div class="input container">
      <BHInput inputType="text" placeholder="Name" :text.sync="name" />
      <BHSelectBox :options="classes" @eventname="updateClass" />
    </div>

    <div class="icons container">
      <h3>Select an avatar</h3>
      <div
        v-for="image in images"
        :key="image.id"
        class="icon"
        @click="selectIcon(image.id)"
        :style="selectedIcon == image.id ? 'border-color: #FF4655' : ''"
      >
        <BHCharIcon :url="image.url" />
      </div>
    </div>

    <div class="close container">
      <BHButton text="Create" @btn-clicked="create()" />
      <h3 @click="cancel()">Cancel</h3>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CharacterBox from "@/components/CharacterComponents/CharacterBox.vue";
import BHButton from "@/components/StandardUI/BHButton.vue";
import BHCharIcon from "@/components/StandardUI/BHCharIcon.vue";
import BHInput from "@/components/StandardUI/BHInput.vue";
import BHSelectBox from "@/components/StandardUI/BHSelectBox.vue";
import CharacterClass from "@/classes/CharacterClass.ts";
import Image from "@/classes/Image.ts";

@Component({
  components: {
    CharacterBox,
    BHButton,
    BHInput,
    BHSelectBox,
    BHCharIcon,
  },
})
export default class CharacterCreation extends Vue {
  private name: string = "";
  private selectedIcon: number = (null as unknown) as number;
  private selectedClass: CharacterClass = (null as unknown) as CharacterClass;
  private classes: CharacterClass[] = [
    { id: 1, value: "fighter" },
    { id: 2, value: "ranger" },
    { id: 3, value: "rogue" },
    { id: 4, value: "mage" },
  ];
  private images: Image[] = [
    { id: 1, url: "male1.png" },
    { id: 2, url: "male2.png" },
    { id: 3, url: "female1.png" },
    { id: 4, url: "female2.png" },
  ];

  private updateClass(selectedClass: CharacterClass) {
    this.selectedClass = selectedClass;
  }
  private cancel(): void {
    this.$router.push("/characters");
  }
  public create(): void {
    if (this.name.length > 3 && this.name.length < 16) {
      if (this.selectedClass != null) {
        if (this.selectedIcon != null) {
          this.$notify({
            group: "succes",
            title: "Character created",
            text: "Your character has been succesfully created!",
          });
          this.$router.push("/characters");
        } else {
          this.$notify({
            group: "error",
            title: "Avatar",
            text:
              "Pls select an avatar for your character by clicking on the desired icon.",
          });
        }
      } else {
        this.$notify({
          group: "error",
          title: "Character class",
          text: "Pls select a class for your character.",
        });
      }
    } else {
      this.$notify({
        group: "error",
        title: "Character name",
        text: "Pls fill in a character name between 4 - 15 characters.",
      });
    }
  }
  private selectIcon(id: number): void {
    this.selectedIcon = id;
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
  height: 15vh;
  min-height: 150px;
}

.input {
  height: 15vh;
  min-height: 150px;
}

.icons {
  height: 35vh;
  min-height: 330px;
  overflow: auto;
  display: inline-block;
}

.icon {
  width: 100px;
  height: 100px;
  display: inline-block;
  border: 2px solid;
  border-color: $clr_borderColor;
}

.close {
  min-height: 150px;
  height: 15vh;
}
</style>