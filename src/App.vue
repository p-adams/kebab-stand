<template>
  <div id="app">
    <div class="container">
      <div class="jumbotron">
        <div v-if="!startGame">
          <intro></intro>
        </div>
        <div v-else-if="startGame">
          <transition name="fade">
            <game></game>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import intro from './Intro.vue'
import game from './Game.vue'

export default {
  name: 'app',
  computed: {
    startGame(){
      return this.$store.state.startGame
    }
  },
  components:{
    intro,
    game
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: white;
  background: black;
}

.jumbotron{
  background: black !important;
}

h1, h2 {
  font-weight: normal;
}
.fade-leave-active {
  transition: opacity .5s
}
.fade-leave-active {
  opacity: 0
}

</style>
