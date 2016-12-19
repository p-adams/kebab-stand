<template>
    <div id="intro">
        <transition name="fade">
            <splash v-if="show"></splash>
        </transition>
        <div v-if="!show">
            <storyline></storyline>
        </div>
    </div>
</template>
<script>
import splash from './Splash'
import storyline from './Storyline.vue'
export default {
    name: 'intro',
    components:{
        splash,
        storyline
    },
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
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-top: 60px;
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