<template>
    <div id="weather">
        <div v-if="sunny">sunny</div>
        <div v-if="cloudy">cloudy</div>
        <div v-if="tstorms">tstorms</div>
    </div>
</template>
<script>
export default {
    mounted(){
        var weather = this.weather[0]
        if(weather==='a'){
            this.sunny = true
        } else if(weather==='b'){
            this.cloudy = true
        } else{
            this.tstorms = true
        }
    },
    data(){
        return{
            sunny: false,
            cloudy: false,
            tstorms: false,
            weather: Object.keys(this.$store.getters.forecast)
        }
    }
}
</script>