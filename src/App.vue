<template>
  <div id="app">
    <div v-if="!startGame">
      <intro></intro>
    </div>
    <div v-else-if="startGame">
      <weather></weather>
    </div>
  </div>
</template>

<script>
import intro from './Intro.vue'
import weather from './Weather.vue'
export default {
  name: 'app',
  data(){
    return{
      start: false
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
    weather
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
