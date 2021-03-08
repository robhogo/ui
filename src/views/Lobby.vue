<template>
  <div class="lobbycontainer container">
    <div class="top container">
      <h1>Server code: {{ this.serverCode }}</h1>
    </div>
    <div class="mid">
      <div class="top-mid">
        <h2>Players: 4/5</h2>
      </div>
      <div class="players">
        <div
          v-for="character in characters"
          :key="character.id"
          class="player-box"
        >
          <div class="char">
            <CharacterBox
              :character="character"
            />
          </div>
          <div class="char-ready">
            <font-awesome-icon icon="check-circle" size="4x" style="color: #FF4655"/>
          </div>
        </div>
      </div>
    </div>
    <div class="bot">
      <div class="botleft">
        <BHButton text="Disband lobby" @btn-clicked="disbandLobby()" />
      </div>
      <div class="botright">
        <div class="ready">
          <h1>2/3 Ready</h1>
        </div>
        <div class="start">
          <BHButton text="Start lobby" @btn-clicked="startGame()" />
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CharacterBox from "@/components/CharacterComponents/CharacterBox.vue";
import BHButton from "@/components/StandardUI/BHButton.vue";
import BHInput from "@/components/StandardUI/BHInput.vue";
import Character from "@/classes/Character";


@Component({
  components: {
    BHButton,
    BHInput,
    CharacterBox,
  },
})
export default class Lobby extends Vue {
  private serverCode: String = "";
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

  created() {
    this.serverCode = this.$route.params.serverCode;
    if (this.serverCode != "AAABB") {
      this.$notify({
        group: "error",
        title: "Server doesn't exist",
        text: "Make sure to fill in a valid server code",
      });
      this.$router.push("/server/");
      return;
    }
  }

  disbandLobby() {
    console.log("disband");
  }

  startGame() {
    console.log("start");
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
@import "../Css/site.scss";
@import "../Css/containers.scss";

.top {
  height: 15vh;
  min-height: 150px;
}

.mid {
  height: 45vh;
  min-height: 450px;
  width: 100%;

  align-items: flex-start;
  display: flex;
  flex-direction: column;

  .top-mid {
    height: 5vh;
    min-height: 50px;
    padding-left: 5%;
    padding-bottom: 3%;
  }
  .players {
    height: 40vh;
    min-height: 400px;
    width: 100%;
    display: inline-block;
    overflow: auto;

    .player-box {
      width: 50%;
      display: inline-block;
      height: 10vh;
      min-height: 100px;
      min-width: 350px;
      
      .char{
        width: 75%;
        float: left;
        height: 100%;
      }
      .char-ready{
        width: 25%;
        float: left;
        height: 100%;
      }
    }
  }
}

.bot {
  height: 10vh;
  min-height: 100px;
  width: 100%;

  .botleft {
    float: left;
    padding-left: 5%;
  }
  .botright {
    float: right;
    padding-right: 5%;

    .ready {
      float: left;
      margin-right: 50px;
      text-align: center;
      line-height: 100%;
    }
    .start {
      float: right;
    }
  }
}
</style>