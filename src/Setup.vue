<template>
    <div id="setup">
        <div id="layout">
            <h5>sales: #{{sales}}</h5>
            <h4>On day {{day}}, the cost of making a kebab is ${{cost}}</h4>
            <div>
                <span>How many sandwiches do you wish to make?
                    <input type="text"
                           @input="getQuantity"
                           >
                </span><br>
                <span>How many advertisements (.95 each) do you wish to make?
                    <input type="text"
                           @input="getAdverts"
                           >
                </span><br>
                <span>What price do you wish to charge for kebab?
                    <input type="text"
                           @input="getPrice"
                           >
                </span><br>
                <span>Press next to continue
                    <button @click="makeSales">Next</button></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
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
        }
    },
    computed:{
        day(){
            return this.$store.getters.showDay
        },
        cost(){
            return this.$store.getters.showCost
        },
        sales(){
            return this.$store.getters.showSales
        }
    }
}
</script>
<style>
    input{
        width: 25px;
    }
</style>