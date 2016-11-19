import * as types from './mutation-types'

export const changeName = ({ commit }, name) => {
    if (name && name.length > 1){
        commit(types.CHANGE_NAME, name)
    }
};