import * as types from './mutation-types'
const state = {
        name: ''
    },
    mutations = {
        [types.CHANGE_NAME] (state, name) {
            state.name = name;
        },
    },
    actions = {
        changeName: ({ commit }, name) => {
            if (name && name.length > 1) {
                commit(types.CHANGE_NAME, name)
            }
        }
    },
    getters = {
        name: state => state.name || 'unnamed person'
    };

export default {
    state,
    mutations,
    actions,
    getters
}