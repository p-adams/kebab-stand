<template>
    <div id="weather">
        <sunny v-if="sunny"></sunny>
        <cloudy v-if="cloudy"></cloudy>    
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
        var weather = this.$store.state.weather
        return weather === "sunny" ? this.sunny = true : this.cloudy = true
    },
    data(){
        return{
            sunny: false,
            cloudy: false,
            tstorms: false
        }
    },
    components:{
        sunny,
        cloudy
    }
}
</script>