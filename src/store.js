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
            customers: 0,
            expenses: 0,
            total: 0
        },
        expenses:{
            day: 1,
            cost: 0.50,
            adverts: 0.95
        },
        weather: '',
        numStands: [{s1: 'Stand One'}],
        loadWeatherMode: false,
        weatherMode: false,
        setupMode: false,
        tstormMode: false,
        reportMode: false
    },
    mutations:{
        start(state){
            state.startGame = true
            state.loadWeatherMode = true
        },
        setPrice(state, payload){
            state.salesData.price = parseFloat(payload)
        },
        addSandwich(state, payload){
            let payloadAsInt = parseInt(payload)
            state.assets.sandwiches = payloadAsInt
            //console.log(`add sandwich: ${state.assets.sandwiches}`)
            state.assets.cash -= parseInt(payload) * state.expenses.cost
        },
        addAdvert(state, payload){
            let payloadAsInt = parseInt(payload)
            state.assets.adverts  = payloadAsInt
            //console.log(`add adverts: ${state.assets.adverts}`)
            state.assets.cash -= parseInt(payload) * state.expenses.adverts
        },
        setWeather(state){
           Math.random() > 0.5 ? state.weather = 'sunny' : state.weather = 'cloudy'
        },
        setThunderstorm(state){
            if(state.weather === 'cloudy'){
                if(Math.random() > 0.75){
                    state.weather = 'tstorm'
                }
            }
        },
        makeSales(state){
            let sandwichesMade = state.assets.sandwiches
            let addCount = state.assets.adverts
            let peopleReached = state.weather === 'sunny' ? addCount * 5
                : state.weather === 'cloudy' ? addCount * 3 : null
            state.salesData.customers = peopleReached
            for(let i = 0; i <= peopleReached; i++){
                if(sandwichesMade > 0 && state.weather != 'tstorm'){
                    state.salesData.sales += 1
                    sandwichesMade--
                }      
            }
            state.salesMade = true
        },
        updateAssets(state){
            let income = state.salesData.sales * state.salesData.price
            let sandwichTotal = state.assets.sandwiches * state.expenses.cost
            let advertTotal = state.assets.adverts * state.expenses.adverts
            let expenses = sandwichTotal + advertTotal
            let profit = income - expenses
            // need to fix
            console.log(`profit: ${profit}`)
            console.log(`cash ${state.assets.cash}`)
            state.assets.cash = state.assets.cash
            
        },
        updateExpenses(state){
            let sandwichTotal = state.assets.sandwiches * state.expenses.cost
            let advertTotal = state.assets.adverts * state.expenses.adverts
            state.salesData.expenses = sandwichTotal + advertTotal
        },
        nextState(state, payload){  
            switch(payload.next){
                case 'setup':
                    state.loadWeatherMode = false
                    state.weatherMode = false
                    state.setupMode = true
                    break
                case 'report':
                    state.setupMode = false
                    state.reportMode = true
                    break
                case 'weather':
                    state.expenses.day += 1
                    state.reportMode = false
                    state.weatherMode = true
                default:
                    return
            }
        },
        clearSales(state){
            state.salesData.sales = 0
            state.salesData.customers = 0
            state.assets.adverts = 0
            state.assets.sandwiches = 0
        }
    },
    actions:{
        startGame: context => context.commit('start'),
        setPrice: (context,price) => {context.commit('setPrice', price)},
        addSandwich: (context,sandwiches) => {context.commit('addSandwich',sandwiches)},
        addAdvert: (context, adverts) => {context.commit('addAdvert', adverts)},
        setWeather: context => context.commit('setWeather'),
        makeSales: (context) => {
            context.commit('setThunderstorm')
            context.commit('makeSales')
            context.commit('updateAssets')
            context.commit('updateExpenses')
        },
        nextState: (context, someState) => context.commit('nextState', someState),
        clearSales: context => context.commit('clearSales')
    },
    getters:{
        showCash: state => state.assets.cash,
        showDay: state => state.expenses.day,
        showCost: state => state.expenses.cost,
        income: state => state.salesData.sales * state.salesData.price,
        expenses: state => state.salesData.expenses,
        profits: state => {
            let inc = state.salesData.sales * state.salesData.price
            let sandwichTotal = state.assets.sandwiches * state.expenses.cost
            let advertTotal = state.assets.adverts * state.expenses.adverts
            let exp = sandwichTotal + advertTotal
            return inc - exp
        }
    }
})


export default store
