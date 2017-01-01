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
        thunderstorm: false,
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
                    state.thunderstorm = true
                }
            }
        },
        generateSales(state){
            console.log(`t-storm: ${state.thunderstorm}`)
            // check weather conditions
            // if sunny: 5 customers per advertisement
            // if cloudy: 3 customers per advertisement
            // if thunderstorm: 0 customers per advertisement 
        }
    },
    actions:{
        startGame: context => context.commit('start'),
        setPrice: (context,price) => {context.commit('setPrice', price)},
        addSandwich: (context,sandwiches) => {context.commit('addSandwich',sandwiches)},
        addAdvert: (context, adverts) => {context.commit('addAdvert', adverts)},
        setWeather: context => context.commit('setWeather'),
        generateSales: context => {
            context.commit('setThunderstorm')
            context.commit('generateSales')
        }
        
    },
    getters:{
        showAllAssets: state => state.assets,
        showAssets: state => state.assets.cash,
        showDay: state => state.expenses.day,
        showCost: state => state.expenses.cost


    }
})


export default store
