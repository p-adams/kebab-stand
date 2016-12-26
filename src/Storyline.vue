<template>
    <div>
        <transition name="fade">
            <div v-if="!show">
                <h3>Welcome to Habib's Kebab Stand</h3>
                <p>Habib is feeling under the weather and he has asked you to run his kebab stand.
                Should you choose to help Habib, you must make important decisions to help Habib's business thrive, including:</p>
                <ul>
                    <li>How many sandwiches to make each morning</li>
                    <li>How many advertising signs to make (each sign is 95&cent)</li>
                    <li>What price to charge for each sandwich</li>
                </ul>
                <span>press <button @click="next">next</button> to continue</span>
            </div>
        </transition>      
        <!--paragraph transition-->
        <transition name="fade">
            <div v-if="show">
                <p>Habib has left you with $50.00 (assets). The cost to make one kebab sandwich
                is 50&cent (this may change in the future).</p>
                <p>Expenses are sum of producing a sandwich and the cost of signs. Profits are the difference
                between the income from kebab sales and your expenses. Number of kebab sandwiches you sell
                each day depends on price you charge, and the number of signs you use. Keep track of assest because you
                can't spend money you don't have.</p>
                <span>Press <button @click="start">start</button> to play</span>
            </div>
        </transition>
        <!--paragraph transition-->
    </div>    
</template>
<script>
export default {
    name: 'storyline',
    data(){
        return{
            show:false
        }
    },
    methods:{
        next(){
            this.show = true
        },
        start(){
            this.$store.dispatch('startGame')
        }
    }
}
</script>
<style>
h3{
    text-align: center;
}
p{
    text-align: justify;
}
ul li{
    list-style: none;
}

.fade-enter-active, .fade-leave-active{
    transition: opacity .5s
}
 .fade-enter, .fade-leave-active{
    opacity: 0
}


</style>
