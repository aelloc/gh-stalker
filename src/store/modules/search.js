import * as types from '../mutationTypes';
import { local, session, keys } from '../../services/storageService';

let lastSearch = session.get(keys.LAST_SEARCH) || {};

const state = {
    count: 0,
    last: {
        term: lastSearch.term || '',
        total: lastSearch.total || 0,
        result: lastSearch.result || [],
        page: lastSearch.page || 1
    }
};

const mutations = {
    [types.INCREASE_SEARCH_COUNT](state) {
        state.count++;
    },
    [types.UPDATE_LAST_SEARCH](state, { term, total, page, result}) {
        state.last.term = term;
        state.last.total = total;
        state.last.page = page;
        state.last.result = result;
    }
};

export default {
    state,
    mutations
}