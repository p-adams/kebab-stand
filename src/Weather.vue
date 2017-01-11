<template>
    <div id="weather">
        <sunny v-if="sunny"></sunny>
        <cloudy v-if="cloudy"></cloudy>
        <span class="setup" v-if="weather">Press setup to prepare for the day<button @click="next">Setup</button></span>
    </div>
</template>
<script>
import sunny from './Sunny.vue'
import cloudy from './Cloudy.vue'
export default {
    name: "weather",
    created(){
        this.$store.dispatch('setWeather')
    },
    mounted(){
        let weather = this.$store.state.weather
        return weather === "sunny" ? this.sunny = true : this.cloudy = true
    },
    data(){
        return{
            sunny: false,
            cloudy: false,
            tstorms: false
        }
    },
    methods:{
        next(){
            this.$store.dispatch('nextState', {
                next: 'setup'
            })
        }
    },
    computed:{
        weather(){
            return this.$store.state.weatherMode
        }
    },
    components:{
        sunny,
        cloudy
    }
}
</script>
<style>
    .setup{
        margin-left: 7%;
    }
</style>