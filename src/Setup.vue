<template>
    <div id="setup">
        <div id="layout">
            <h5>total cash: {{assets}}</h5>
            <h4>On day {{day}}, the cost of kebab is ${{cost}}</h4>
            <div>
                <span>How many sandwiches do you wish to make?
                    <input type="text" v-model="quantity">
                </span><br>
                <span>How many signs (.95 each) do you wish to make?
                    <input type="text" v-model="signs">
                </span><br>
                <span>What price do you wish to charge for kebab?
                    <input type="text" v-model="price">
                </span><br>
                <span>Press next to proceed <button @click="setup">Next</button></span>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            quantity: '',
            signs: '',
            price: '',
        }
    },
    methods:{
        setup(){
            var quantity = this.quantity
            var signs = this.signs
            var price = this.price
            this.$store.dispatch('setup', {
                q: quantity,
                s: signs,
                p: price
            })
            this.quantity = ""
            this.signs = ""
            this.price = ""
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
        }
    }
}
</script>
<style>
    input{
        width: 25px;
    }
</style>