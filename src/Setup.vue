<template>
    <div id="setup">
        <div id="layout">
            <h5>total cash: {{assets}}</h5>
            <h4>On day {{day}}, the cost of making a kebab is ${{cost}}</h4>
            <div>
                <span>How many sandwiches do you wish to make?
                    <input type="text"
                           @change="getQuantity"
                           :value="quantity"
                           >
                </span><br>
                <span>How many advertisements (.95 each) do you wish to make?
                    <input type="text"
                           @change="getAdverts"
                           :value="adverts"
                           >
                </span><br>
                <span>What price do you wish to charge for kebab?
                    <input type="text"
                           @change="getPrice"
                           :value="price"
                           >
                </span><br>
                <span>Press next to continue
                    <button @genSales="setup">Next</button></span>
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
        genSales(){
            /*this.$store.dispatch('setup', {
                q: this.quantity,
                s: this.signs,
                p: this.price
            })
            this.quantity = ""
            this.signs = ""
            this.price = ""*/
        }
    },
    computed:{
        day(){
            return this.$store.getters.showDay
        },
        cost(){
            return this.$store.getters.showCost
        },
        assets(){
            return this.$store.getters.showAssets
        },
        quantity(){
            return this.$store.getters.quantityVal
        },
        adverts(){
            return this.$store.getters.advertsVal
        },
        price(){
            return this.$store.getters.priceVal
        }
    }
}
</script>
<style>
    input{
        width: 25px;
    }
</style>