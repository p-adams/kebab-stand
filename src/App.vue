<template>
  <div id="app">
    <div v-if="!startGame">
      <intro></intro>
    </div>
    <div v-else-if="startGame">
      <transition name="fade">
        <weather v-show="showWeather"></weather>
      </transition>
      <setup v-show="!showWeather"></setup>
      <setup></setup>
    </div>
  </div>
</template>

<script>
import intro from './Intro.vue'
import weather from './Weather.vue'
import setup from './Setup.vue'
export default {
  name: 'app',
  data(){
    return{
      start: false,
      showWeather: true
    }
  },
  methods:{
    startGame(){
      this.start = true
    }
  },
  computed: {
    startGame(){
      return this.$store.state.startGame
    }
  },
  components:{
    intro,
    weather,
    setup
  }
}
</script>




<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

h1, h2 {
  font-weight: normal;
}







</style>
