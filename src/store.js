import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        assets: {
            cash: 2.00,
            glasses: 4,
            adverts: 0
        },
        salesData:{
            sales: 0,
            price: 0.00,
            profits: 0,
            total: 0
        },
        expenses:{
            cost: 0.02,
            adverts: 0.15,
            total: 0
        },
        weatherConditions: [
            {a: 'sunny'},
            {b: 'cloudy'},
            {c: 'thunderstorms'}],

        numStands: [{s1: 'Stand One'}]
    },
    mutations:{
       setPrice(state, payload){
           payload.price <= 0.25 ? state.salesData.price = payload.price : null
       },
       addGlass(state, payload){
          state.assets.glasses += payload.glasses
          state.assets.cash-= payload.glasses * state.expenses.cost
       },
       addAdvert(state, payload){
           state.assets.adverts += payload.adverts
           state.assets.cash -= payload.adverts * state.expenses.adverts
       }
    },
    actions:{
        setPrice: (context,price) => {context.commit('setPrice', price)},
        addGlass: (context,glasses) => {context.commit('addGlass',glasses)},
        addAdvert: (context, adverts) => {context.commit('addAdvert', adverts)}
    },
    getters:{
        showAssets: state => state.assets,
        showPrice: state => state.salesData.price
    }
})



export default store
