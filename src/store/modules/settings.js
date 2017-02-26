import { local, keys } from '../../services/storageService';
import * as types from '../mutationTypes';

let settings = local.get(keys.SETTINGS) || {};

const state = {
    recentlySeen: settings.recentlySeen == undefined ? true : settings.recentlySeen,
    lastSearch: settings.lastSearch == undefined ? true : settings.lastSearch
};

const mutations = {
    [types.CHANGE_SETTINGS](state, { recentlySeen, lastSearch }) {
        state.recentlySeen = recentlySeen;
        state.lastSearch = lastSearch;
    }
};

export default {
    state,
    mutations
}