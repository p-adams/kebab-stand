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
    </div>
  </div>
</template>

<script>
import intro from './Intro.vue'
import weather from './Weather.vue'
import setup from './Setup.vue'
export default {
  name: 'app',
  updated(){
    if(this.$store.state.startGame){
      setTimeout(this.loadSetup, 1000)
    }
  },
  data(){
    return{
      start: false,
      showWeather: true
    }
  },
  methods:{
    startGame(){
      this.start = true
    },
    loadSetup(){
      this.showWeather = false
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
.fade-leave-active {
  transition: opacity .5s
}
.fade-leave-active {
  opacity: 0
}

</style>
