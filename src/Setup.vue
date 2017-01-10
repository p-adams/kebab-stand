<template>
    <div id="setup">
        <div id="layout">
            <h4>On day {{day}}, the cost of making a kebab is ${{cost}}</h4>
            <h5 v-if="forecast">Weather forecast: {{forecast}} chance of rain</h5>
            <div>
                <span>How many sandwiches do you wish to make?
                    <input type="text"
                           v-model="s"
                           @input="getQuantity"
                           >
                </span><br>
                <span>How many advertisements (.95 each) do you wish to make?
                    <input type="text"
                           v-model="a"
                           @input="getAdverts"
                           >
                </span><br>
                <span>What price do you wish to charge for kebab?
                    <input type="text"
                           v-model="p"
                           @input="getPrice"
                           >
                </span><br>
                <span>Press sell to continue
                    <button @click="makeSales"
                            :disabled="s.length===0 || a.length===0 || p.length===0"
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
        }
    }
}
</script>
<style>
    input{
        width: 25px;
    }
</style>