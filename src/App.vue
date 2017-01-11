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
  font-family: "ArcadeClassic" !important;
  color: lightyellow;
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
button {
  background-color: black !important;
  border: 0.1em solid yellowgreen;
  padding: 5px;
  margin-left: 5px;
  margin-right: 5px;
}
input {
  background: black !important;
  margin-left: 10px;
}
</style>
