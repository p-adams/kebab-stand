<template>
    <div id="setup">
        <div id="layout">
            <h4>On day {{day}}, the cost of kebab is ${{cost}}</h4>
            <div>
                How many sandwiches do you wish to make? <input type="text"><br>
                How many signs (.95 each) do you wish to make? <input type="text"><br>
                What price do you wish to charge for kebab?  <input type="text"><br>
                Press next to proceed <button>Next</button>
            </div>

        </div>
    </div>
</template>
<script>
export default {
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