<template>
    <div id="report">
        <div v-if="storm">
            meow
            <storm></storm>
        </div>
        <div v-if="!storm">
            <h3>Habib's Kebab Stand Financial Report</h3>
            <table>
                <thead>
                    <tr>
                        <th>Day: </th>
                        <th>Stand: </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Kebabs sold:</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Price per sandwich: </th>
                        <th>Income: </th>
                    </tr>
                    <tr>
                        <th># of sandwiches made: </th>
                        <th># of signs made: </th>
                    </tr>
                    <tr>
                        <th>Profit: </th>
                    </tr>
                    <tr>
                        <th>Assets</th>
                    </tr>
                </tbody>
            </table>
            <span>Press next to continue<button @click="next">next</button></span>
        </div>
    </div>
</template>
<script>
import storm from './Tstorm.vue'
export default {
    name: 'report',
    data(){
        return{
            storm: false
        }
    },
    created(){
        if(this.$store.state.weather === 'tstorm'){
            this.storm = true
            setTimeout(this.hideStorm, 1000)
        }
    },
    methods:{
        hideStorm(){
            this.storm = false
        },
        next(){
            this.$store.dispatch('nextState', {
                next: 'weather'
            })
        }
    },
    computed:{
        thunderstorm(){
            return this.$store.state.tstormMode
        },
        report(){
            return this.$store.state.reportMode
        }
    },
    components:{
        storm
    }
}
</script>
<style>
table, thead, tr, th, td{
    border: 1px solid red;
}
</style>