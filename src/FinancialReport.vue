<template>
    <div class="container" id="report">
        <div class="jumbotron">
        <div v-if="storm">
            meow
            <storm></storm>
        </div>
        <div v-if="!storm">
            <h3>$$$ Habib's Kebab Stand Daily Financial Report $$$</h3>
            <table>
                <thead>
                    <tr>
                        <th>Day: {{day}}</th>
                        <th>Stand: {{stand}}</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- handle singular/plural cases -->
                    <tr>
                        <td>{{sold}} Kebabs sold</td>
                    </tr>
                    <tr>
                        <td>${{price}} per sandwich</td>
                        <td>Income ${{income}}</td>
                    </tr>
                    <tr>
                        <td>{{sandwiches}} sandwiches made</td>
                    </tr>
                    <tr>
                        <td>{{signs}} signs made</td>
                        <td>Expenses ${{expenses}}</td>         
                    </tr>
                    <tr>
                        <td>Profits ${{profits}}</td>
                    </tr>
                    <tr>
                        <td>Assets ${{assets}}</td>
                    </tr>
                    <tr>                
                        <td>
                            <span>Press next to continue
                            <button class="btn btn-primary" @click="next">next</button>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
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
        day() {
            return this.$store.getters.showDay
        },
        stand() {
            return this.$store.state.numStands[0].s1
        },
        sold() {
            return this.$store.state.salesData.sales
        },
        price() {
            return this.$store.state.salesData.price
        },
        income() {
            return this.$store.getters.income
        },
        sandwiches() {
            return this.$store.state.assets.sandwiches
        },
        signs() {
            return this.$store.state.assets.adverts
        },
        expenses() {
            return this.$store.getters.expenses
        },
        profits() {
            return this.$store.getters.profits
        },
        assets() {
            return this.$store.state.assets.cash.toFixed(2)
        }
    },
    components:{
        storm
    }
}
</script>
<style>
table{
    width: 100%;
}

td{
    padding: 15px;
}
</style>