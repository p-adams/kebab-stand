import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
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
            payload.price <= 1.25 ? state.salesData.price = payload.price : null
        },
        addSandwich(state, payload){
            state.assets.sandwiches += payload.sandwiches
            state.assets.cash-= payload.sandwiches * state.expenses.cost
        },
        addAdvert(state, payload){
            state.assets.adverts += payload.adverts
            state.assets.cash -= payload.adverts * state.expenses.adverts
        },
        setWeather(state){
           Math.random() > 0.5 ? state.weather = 'sunny' : state.weather = 'cloudy'
        },
        setup(state, setup){
            var sandCost = setup.q * state.expenses.cost
            var advCost = setup.s * state.expenses.adverts
            state.assets.cash -= (sandCost + advCost)
            state.assets.sandwiches += setup.q
            state.assets.adverts += setup.s
            state.salesData.price = setup.p
        }
    },
    actions:{
        startGame: context => context.commit('start'),
        setPrice: (context,price) => {context.commit('setPrice', price)},
        addSandwich: (context,sandwiches) => {context.commit('addSandwich',sandwiches)},
        addAdvert: (context, adverts) => {context.commit('addAdvert', adverts)},
        setWeather: context => context.commit('setWeather'),
        setup: (context, setup) => {
            context.commit('setup', setup)
        }
    },
    getters:{
        showAssets: state => state.assets.cash,
        showDay: state => state.expenses.day,
        showCost: state => state.expenses.cost

    }
})


export default store
