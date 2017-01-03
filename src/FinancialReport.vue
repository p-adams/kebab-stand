<template>
    <div id="report">
        <div v-if="storm">
            meow
            <storm></storm>
        </div>
        <div v-if="!storm">
            <h3>Habib's Kebab Stand Financial Report</h3>
            <!-- 
                day - Stand
                # of kebabs sold  
                price per sandwich - income
                # of sandwiches made
                # of signs made - expenses
                    profit: x
                    assets: x 

            -->
            <span>Press next to continue<button @click="next">next</button></span>
        </div>
    </div>
</template>
<script>
import storm from './Tstorm.vue'
export default {
    name: 'report',
    data(){
        return{
            storm: false
        }
    },
    created(){
        if(this.$store.state.weather === 'tstorm'){
            this.storm = true
            setTimeout(this.hideStorm, 1000)
        }
    },
    methods:{
        hideStorm(){
            this.storm = false
        },
        next(){
            this.$store.dispatch('nextState', {
                next: 'weather'
            })
        }
    },
    computed:{
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