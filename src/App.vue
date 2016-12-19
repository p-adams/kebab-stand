<template>
  <div id="app">
    <div v-if="!startGame">
      <intro></intro>
    </div>
    <div v-else-if="startGame">
      {{forecast}}
    </div>
  </div>
</template>

<script>
import intro from './Intro.vue'
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
    },
    forecast(){
      return Object.values(this.$store.getters.forecast)
    }
  },
  components:{
    intro
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
