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
                        <th>Day: {{day}}</th>
                        <th>Stand: {{stand}}</th>
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
                        <td></td>
                    </tr>
                    <tr>
                        <th>Assets</th>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <span>Press next to continue<button @click="next">next</button></span>
        </div>
        Sales: {{sales}}
    </div>
</template>
<script>
import storm from './Tstorm.vue'
export default {
    name: 'report',
    data(){
        return{
            storm: false,
            sales: ''
        }
    },
    created(){
        if(this.$store.state.weather === 'tstorm'){
            this.storm = true
            setTimeout(this.hideStorm, 1000)
        }
        this.$store.dispatch('generateReport')
    },
    mounted(){
        this.loadSalesData()
    },
    methods:{
        loadSalesData(){
            this.sales = this.$store.state.salesData["sales"]
        },
        hideStorm(){
            this.storm = false
        },
        next(){
            this.$store.dispatch('nextState', {next: 'weather'})
            this.$store.dispatch('clearSales')
        }
    },
    computed:{
        day(){
            return this.$store.getters.showDay
        },
        stand(){
            return this.$store.state.numStands[0].s1
        },
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