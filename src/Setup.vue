<template>
    <div id="setup">
        <div id="layout">
            <h4>On day {{day}}, the cost of kebab is ${{cost}}</h4>
            <div>
                <span>How many sandwiches do you wish to make?
                    <input type="text" :value="quantity">
                </span><br>
                <span>How many signs (.95 each) do you wish to make?
                    <input type="text" :value="signs">
                </span><br>
                <span>What price do you wish to charge for kebab?
                    <input type="text" :value="price">
                </span><br>
                <span>Press next to proceed <button>Next</button></span>
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
    computed:{
        day(){
            return 1
        },
        cost(){
            return 0.50
        }
    }
}
</script>
<style>
    input{
        width: 25px;
    }
</style>