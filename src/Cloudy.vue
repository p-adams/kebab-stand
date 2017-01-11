<template>
    <div class="container">
        <div class="jumbotron">
            <tr>
                <th>Daily Weather Report:</th>
            </tr>
            <tr>
                <td>Cloudy <span v-show="forecast">with a chance of rain</span></td>
            </tr>
        </div>        
    </div>
</template>
<script>
export default {
    name: "cloudy",
    computed:{
        forecast(){
            return this.$store.state.weather === 'light' || this.$store.state.weather === 'heavy'
        }
    }
}
</script>