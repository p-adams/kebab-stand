import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        salesGenerated: false,
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
            state.salesData.price = payload
        },
        addSandwich(state, payload){
            state.assets.sandwiches += payload
            state.assets.cash -= payload * state.expenses.cost
        },
        addAdvert(state, payload){
            state.assets.adverts += payload
            state.assets.cash -= payload * state.expenses.adverts
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
            
            let sandwichCount = state.assets.sandwiches
            let addCount = state.assets.adverts
            switch(state.weather){
                case "sunny":
                    break
                case 'cloudy':
                    break
                case 'tstorm':
                    break
                default:
                    return 
           }
        },
        generateReport(state){

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
            context.commit('generateSales')
        }
    },
    getters:{
        showAllAssets: state => state.assets,
        showAssets: state => state.assets.cash,
        showDay: state => state.expenses.day,
        showCost: state => state.expenses.cost,
        showReport: state => state.salesData
    }
})


export default store
