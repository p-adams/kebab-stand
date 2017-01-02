<template>
    <div>
        <transition name="fade">
            <weather></weather>
        </transition>
        <setup></setup>
        <div>
            <transition name="fade">   
                <storm></storm>
            </transition>
            <report></report>
        </div>
    </div>
</template>
<script>
import weather from './Weather.vue'
import setup from './Setup.vue'
import storm from './Tstorm.vue'
import report from './FinancialReport.vue'
export default {
    name: "game",
    updated(){
        /*if(this.$store.state.startGame){
            setTimeout(this.loadSetup, 1000)
        }
        if(this.$store.state.weather==='tstorm'){
            setTimeout(this.hideStorm, 1000)
        }*/
    },
    components:{
        weather,
        setup,
        storm,
        report
    }
}
</script>
<style>
.fade-leave-active {
    transition: opacity .5s
}
.fade-leave-active {
    opacity: 0
}
</style>