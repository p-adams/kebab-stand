import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        assets: {
            cash: 50.00,
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
           if(state.expenses.cost * payload.glasses > state.assests.cash){
                state.assets.glasses += payload.glass
                state.assets.cost -= payload.glasses * state.expenses.cost
           }
       },
       addAdvert(state, payload){
            if(state.expenses.cost * payload.adverts > state.assests.cash){
                state.assets.adverts += payload.advert
                state.assets.cost -= payload.adverts * state.expenses.adverts
            }
       },
       makeLemonade(state, payload){
           if(state.assets.cash!=0){
               setPrice(state, payload)
               addGlass(state, payload)
               addAdvert(state, payload)
           }
       }
    },
    getters:{
        showAssets: state => state.assets,
        showPrice: state => state.salesData.price
    }
})

store.commit('makeLemonade', {

})

export default store
