<template>
    <div>
        <div v-if="hasCash">
            {{showWeather}}
            <transition name="fade">
                <weather v-if="showWeather"></weather>
            </transition>
            <setup v-if="showSetup"></setup>
            <transition name="fade">   
                <storm v-if="showTstorm"></storm>
            </transition>
            <report v-if="showReport"></report>
        </div>
        <div v-else>
            <p>game over</p>
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
    data(){
        return{
            weather: false,
            setup: false,
            tstorm: false,
            report: false
        }
    },
    mounted(){
       setTimeout(()=> this.$store.dispatch('nextState', {
           next: 'setup'
       }), 3000)
    },
    computed:{
        hasCash(){
            return this.$store.getters.showCash > 0 ? true : false
        },
        showWeather(){
            return this.$store.getters.showWeather
        },
        showSetup(){
            return this.setup
        },
        showTstorm(){
            return this.tstorm
        },
        showReport(){
            return this.report
        }
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