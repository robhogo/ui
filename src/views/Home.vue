<template>
    <div class="home">
        <Login />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Login from '@/components/Registration/Login.vue'; // @ is an alias to /src

@Component({
  components: {
    Login,
  },
})
export default class Home extends Vue {}
</script>

<style>
.home {
    background-image: url('../assets/BitheroLoginBackground.jpg');
    background-size: cover; 
    width: 100vw;
    height: 100vh;
}
</style>