<template>
  <div id="app">
    <transition name="fade">
      <splash v-if="show"></splash>
    </transition>
  </div>
</template>

<script>
import splash from './Splash'
export default {
  name: 'app',
  created(){
    setTimeout(this.hideSplash, 1000)
  },
  data(){
    return{
      show:true
    }
  },
  methods:{
    hideSplash(){
      this.show = false
    }
  },
  components:{
    splash
  } 
}
</script>




<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.fade-leave-active {
  transition: opacity .5s
}
.fade-leave-active {
  opacity: 0
}




</style>
