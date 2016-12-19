<template>
    <div id="weather">
        <div v-if="sunny">sunny comp</div>
        <div v-if="cloudy">cloudy comp</div>
        
    </div>
</template>
<script>
export default {
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
    }
}
</script>