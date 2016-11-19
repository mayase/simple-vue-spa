import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
    name: ''
};

// there could be actions and getters

// mutations
const mutations = {
    [types.CHANGE_NAME] (state, name) {
        state.name = name;
    },
};

export default {
    state,
    mutations
}