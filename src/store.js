import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        startGame: false,
        assets: {
            cash: 50.00,
            sandwiches: 4,
            adverts: 0
        },
        salesData:{
            sales: 0,
            price: 0.00,
            profits: 0,
            total: 0
        },
        expenses:{
            cost: 0.50,
            adverts: 0.95,
            total: 0
        },
        weatherConditions: [
            {a: 'sunny'},
            {b: 'cloudy'},
            {c: 'thunderstorms'}],

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
        }
    },
    actions:{
        startGame: context => context.commit('start'),
        setPrice: (context,price) => {context.commit('setPrice', price)},
        addSandwich: (context,sandwiches) => {context.commit('addSandwich',sandwiches)},
        addAdvert: (context, adverts) => {context.commit('addAdvert', adverts)}
    },
    getters:{
        showAssets: state => state.assets,
        forecast: state => state.weatherConditions[Math.floor((Math.random() * state.weatherConditions.length))]
    }
})


export default store
