import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        assets: 2.00,
        cost: 0.02,
        profits: 0.00,
        weatherConditions: [{a: 'sunny'}, {b: 'cloudy'}, {c: 'thunderstorms'}],
        numStands: [{s1: 'standOne'}]
    }
})