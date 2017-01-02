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
    <div v-if="sales">
      <transition name="fade">   
        <storm v-if="tstorm"></storm>
      </transition>
        <report v-if="!tstorm"></report>
      </div>
    </div>
  </div>
</template>

<script>
import intro from './Intro.vue'
import weather from './Weather.vue'
import setup from './Setup.vue'
import storm from './Tstorm.vue'
import report from './FinancialReport.vue'
export default {
  name: 'app',
  updated(){
    if(this.$store.state.startGame){
      setTimeout(this.loadSetup, 1000)
    }
    if(this.$store.state.weather==='tstorm'){
      setTimeout(this.hideStorm, 1000)
    }
  },
  data(){
    return{
      start: false,
      showWeather: true,
      tstorm: true
    }
  },
  methods:{
    startGame(){
      this.start = true
    },
    loadSetup(){
      this.showWeather = false
    },
    handleTransitions(){

    },
    hideStorm(){
      this.tstorm = false
    }
  },
  computed: {
    startGame(){
      return this.$store.state.startGame
    },
    displaySetup(){
      if (this.showWeather === true){
        return true
      }
    },
    storm(){
      return this.$store.state.weather === 'tstorm' && this.tstorm ? true : false
    },
    sales(){
      return this.$store.state.salesMade
    }
  },
  components:{
    intro,
    weather,
    setup,
    storm,
    report
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
