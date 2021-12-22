<template>
    <div>
        <div v-if="hasCash">
            <transition name="fade">
                <weather v-if="loadWeather"></weather>
            </transition>
            <setup v-if="showSetup"></setup>
            <transition name="fade">
                <report v-if="showReport"></report>
            </transition>
             <transition name="fade">
                <weather v-if="showWeather"></weather>
            </transition>
        </div>
        <div v-else>
            <h3>game over</h3>
            <table class="table borderless">
                <tbody>
                    <tr>
                        <th>Cash remaining</th>
                    </tr>
                    <tr>
                        <td>{{this.$store.state.assets.cash.toFixed(2)}}</td>
                    </tr>
                    <h4>You do not have enough cash to continue</h4>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import weather from './Weather.vue'
import setup from './Setup.vue'
import report from './FinancialReport.vue'
export default {
    name: "game",
    mounted(){
       setTimeout(()=> this.$store.dispatch('nextState', {
           next: 'setup'
       }), 3000)
    },
    computed:{
        hasCash(){
            return this.$store.getters.showCash < 2 ? false : true
        },
        loadWeather(){
            return this.$store.state.loadWeatherMode
        },
        showWeather(){
            return this.$store.state.weatherMode
        },
        showSetup(){
            return this.$store.state.setupMode
        },
        showReport(){
            return this.$store.state.reportMode
        }
    },
    components:{
        weather,
        setup,
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
.borderless td, .borderless th {
    border: none;
}
</style>
