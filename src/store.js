import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        salesMade: false,
        startGame: false,
        assets: {
            cash: 20.00,
            sandwiches: 0,
            adverts: 0
        },
        salesData:{
            sales: 0,
            price: 0.00,
            profits: 0,
            total: 0
        },
        expenses:{
            day: 1,
            cost: 0.50,
            adverts: 0.95,
            total: 0
        },
        weather: '',
        numStands: [{s1: 'Stand One'}]
    },
    mutations:{
        start(state){
            state.startGame = true
        },
        setPrice(state, payload){
            state.salesData.price = parseFloat(payload)
        },
        addSandwich(state, payload){
            let payloadAsInt = parseInt(payload)
            state.assets.sandwiches = state.assets.sandwiches + payloadAsInt
            state.assets.cash -= parseInt(payload) * state.expenses.cost
        },
        addAdvert(state, payload){
            let payloadAsInt = parseInt(payload)
            state.assets.adverts  = state.assets.adverts + payloadAsInt
            state.assets.cash -= parseInt(payload) * state.expenses.adverts
        },
        setWeather(state){
           Math.random() > 0.5 ? state.weather = 'sunny' : state.weather = 'cloudy'
        },
        setThunderstorm(state){
            if(state.weather === 'cloudy'){
                if(Math.random() > 0.7){
                    state.weather = 'tstorm'
                }
            }
        },
        makeSales(state){
            let sandwichesMade = state.assets.sandwiches
            let addCount = state.assets.adverts
            let peopleReached = state.weather === 'sunny' ? addCount * 5
                : state.weather === 'cloudy' ? addCount * 3 : addCount * 0
            for(let i = 0; i <= peopleReached; i++){
                if(sandwichesMade >= 0){
                    state.salesData.sales = i 
                    sandwichesMade--
                }      
            }
            state.salesMade = true
        },
        generateReport(state){
            // add/take money from assets
        }
    },
    actions:{
        startGame: context => context.commit('start'),
        setPrice: (context,price) => {context.commit('setPrice', price)},
        addSandwich: (context,sandwiches) => {context.commit('addSandwich',sandwiches)},
        addAdvert: (context, adverts) => {context.commit('addAdvert', adverts)},
        setWeather: context => context.commit('setWeather'),
        makeSales: context => {
            context.commit('setThunderstorm')
            context.commit('makeSales')
        }
    },
    getters:{
        showAllAssets: state => state.assets,
        showAssets: state => state.assets.cash,
        showDay: state => state.expenses.day,
        showCost: state => state.expenses.cost,
        showSales: state => state.salesData.sales
    }
})


export default store
