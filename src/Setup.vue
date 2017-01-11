<template>
    <div id="setup">
        <div id="layout">
            <h4>On day {{day}}, the cost of making a kebab is ${{cost}}</h4>
            <div id="forecast">
                <h5 v-if="forecast">Weather forecast: {{forecast}} chance of rain</h5>
            </div>
            <div>
                <span>How many sandwiches do you wish to make?
                    <input type="text"
                           v-model="s"
                           @input="getQuantity"
                           ref="sandwich"
                           >
                <h6 v-if="warn1">Not enough cash to make that many sandwiches</h6>
                </span><br>
                <span>How many advertisements (.95 each) do you wish to make?
                    <input type="text"
                           v-model="a"
                           @input="getAdverts"
                           >
                <h6 v-if="warn2">Not enough cash to make that many signs</h6>
                </span><br>
                <span>What price do you wish to charge for kebab?
                    <input type="text"
                           v-model="p"
                           @input="getPrice"
                           >
                <h6 v-if="warn3">Be reasonable!</h6>
                </span><br>
                <span>Press sell to continue
                    <button @click="makeSales"
                            :disabled="disable"
                    >Sell</button></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            s: '',
            a: '',
            p: ''
        }
    },
    mounted(){
        this.$refs.sandwich.focus()
    },
    methods:{
        getQuantity(e){
            this.$store.dispatch('addSandwich', e.target.value)
        },
        getAdverts(e){
            this.$store.dispatch('addAdvert', e.target.value)
        },
        getPrice(e){
            this.$store.dispatch('setPrice', e.target.value)
        },
       makeSales(){
            this.$store.dispatch('makeSales')
            this.$store.dispatch('nextState',{
                next: 'report'
            })
        }
    },
    computed:{
        day(){
            return this.$store.getters.showDay
        },
        cost(){
            return this.$store.getters.showCost
        },
        forecast(){
            let weather = this.$store.state.weather
            return weather === 'light' ? '30%' : weather === 'heavy' ? '50%' : null
        },
        disable(){
            return this.s.length===0 || this.a.length===0 || this.p.length===0
        },
        warn1(){
            return this.s * this.$store.state.expenses.cost > this.$store.state.assets.cash
        },
        warn2(){
             return this.a * this.$store.state.expenses.adverts > this.$store.state.assets.cash
        },
        warn3(){
            return this.p != '' && this.p < .50 || this.p > 1.75
        }
    }
}
</script>
<style>
    input{
        width: 25px;
        border: none !important;
    }
</style>