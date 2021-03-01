<template>
  <div class="charcontainer">
    <div class="title container">
      <h1>Create a character</h1>
    </div>
    <div class="field container">
      <BHInput inputType="text" placeholder="Name" :text.sync="name" />
      <BHSelectBox :options="classes" @eventname="updateClass"/>
      <div class="icon-selection">
        <h3>Select an avatar</h3>
        <div v-for="image in images" :key="image.id">
          <BHCharIcon :url="image.url "/>
        </div>
      </div>
    </div>
    <div class="close container">
      <BHButton text="Create" @btn-clicked="Create()" />
      <h3 @click="Cancel()">Cancel</h3>
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
  private Image: Image = null as unknown as Image;
  private selectedClass: CharacterClass = null as unknown as CharacterClass;
  private classes: CharacterClass[] = [
    { id: 1, value: "fighter" },
    { id: 2, value: "ranger" },
    { id: 3, value: "rogue" },
    { id: 4, value: "mage" },
  ];
  private images: Image[] = [
    { id: 1, url: 'male1.png' },
    { id: 2, url: "male2.png" },
    { id: 3, url: "female1.png" },
    { id: 4, url: "female2.png" },
  ]

  private updateClass(selectedClass: CharacterClass) {
    this.selectedClass = selectedClass;
  }
  private Cancel(): void {
    this.$router.push("/characters");
  }
  private Create(): void {
    this.$router.push("/characters");
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
@import "@/Css/character-container.scss";

.title {
  height: 15vh;
  min-height: 150px;
}

.field {
  height: 50vh;
  min-height: 320px;
  overflow: auto;
}

.close {
  min-height: 150px;
  height: 15vh;
}
</style>