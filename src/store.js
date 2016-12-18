import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        assets: [{cash: 2.00}, {numGlasses: 4}, {numAdv: 0}],
        sales: 0,
        profits : sales - expenses.total,
        expenses:[{cost: 0.02}, {adv: 0.15}, {total: (cost * numGlasses) + (adv * numAdv)}],
        weatherConditions: [{a: 'sunny'}, {b: 'cloudy'}, {c: 'thunderstorms'}],
        numStands: [{s1: 'Stand One'}]
    },
    mutations:{

    }
})