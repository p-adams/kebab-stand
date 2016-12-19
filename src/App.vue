<template>
  <div id="app">
    <div v-if="!start">
      <intro></intro>
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
