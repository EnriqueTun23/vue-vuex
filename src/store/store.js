import Vue from 'vue';
import Vuex from 'vuex';
import teams from './../assets/teams.json'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        valor: 0,
        nombre: 'Federico',
        teams
    },
    getters:{
        valorDoble: state => {
            return state.valor * 2
        },
        nombreInverso: state => {
            return state.nombre.split("").reverse().join("")
        },
        getTeams: state => {
            return state.teams
        },
        getTeamByGroup: (state) => (group) => {
            return state.teams.filter(e => e.group_id === group)
        }
    },
    mutations:{
        incrementar: state => {
            state.valor += 3
        },
        incrementarPor: (state, payload) => {
            state.valor += payload
        }
    },
    actions:{
        prueba: context => {
            context.commit('incrementar')
        },
        prueba2: (context, payload) => {
            context.commit('incrementarPor', payload)
        }
    }
})