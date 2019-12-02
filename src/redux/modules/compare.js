import { combineReducers} from "redux";
import url from "../../utils/url";
import { PARALLEL_FETCH_DATA } from "../middleware/parallelapi";

export const types = {
    FETCH_COMPARATIVE_RESULT_REQUEST: "COMPARE/FETCH_COMPARATIVE_RESULT_REQUEST",
    FETCH_COMPARATIVE_RESULT_SUCCESS: "COMPARE/FETCH_COMPARATIVE_RESULT_SUCCESS",
    FETCH_COMPARATIVE_RESULT_FAILURE: "COMPARE/FETCH_COMPARATIVE_RESULT_FAILURE",

    GET_URL_PARAMS: "COMPARE/GET_URL_PARAMS_SUCCESS",

    CHANGE_HIGHLIGHT_DIFFERENT_ITEMS: "COMPARE/CHANGE_HIGHLIGHT_DIFFERENT_ITEMS",
    
    CHANGE_HIDE_SAME_ITEMS: "COMPARE/CHANGE_HIDE_SAME_ITEMS",
};

const initialState = {
    comparativeResult: {
        isFetching: false,
        result: [],
        error: "",
    },
    urlParams: [],
    highlightDifferentItems: false,
    hideSameItems: false,
};

export const actions = {
    fetchComparativeResult: (ids) => {
        const endpoints = url.getComparativesResultByIds( ids )
        return {
            [PARALLEL_FETCH_DATA]: {
                types: [
                    types.FETCH_COMPARATIVE_RESULT_REQUEST,
                    types.FETCH_COMPARATIVE_RESULT_SUCCESS,
                    types.FETCH_COMPARATIVE_RESULT_FAILURE,
                ],
                endpoints,
            }
        }
    },
    
    getUrlParams : (params) => ({
        type: types.GET_URL_PARAMS,
        params: params
    }),

    changeHighlightDifferentItems: () => ({
        type: types.CHANGE_HIGHLIGHT_DIFFERENT_ITEMS,
    }),

    changehideSameItems: () => ({
        type: types.CHANGE_HIDE_SAME_ITEMS,
    })

};

const urlParams = (state = initialState.urlParams, action) => {
    switch(action.type){
        case types.GET_URL_PARAMS: {
            return action.params
        }

        default:
            return state
    }
}

const highlightDifferentItems = (state = initialState.highlightDifferentItems, action) => {
    switch(action.type){
        case types.CHANGE_HIGHLIGHT_DIFFERENT_ITEMS: {
            return state? false : true
        }

        default:
            return state
    }
}

const hideSameItems = (state = initialState.hideSameItems, action) => {
    switch(action.type){
        case types.CHANGE_HIDE_SAME_ITEMS: {
            return state? false : true
        }

        default:
            return state
    }
}

const comparativeResult = (state = initialState.comparativeResult, action) => {
    switch(action.type){
        case types.FETCH_COMPARATIVE_RESULT_REQUEST: {
            return {...state, isFetching: true}
        }

        case types.FETCH_COMPARATIVE_RESULT_SUCCESS: {
            return {...state, isFetching: false, result: action.responses}
        }

        case types.FETCH_COMPARATIVE_RESULT_FAILURE: {
            return {...state, isFetching: false, error: action.error}
        }

        default:
            return state
    }
}

const reducer = combineReducers({
    urlParams,
    highlightDifferentItems,
    hideSameItems,
    comparativeResult
})

export default reducer;


