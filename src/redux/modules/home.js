import { combineReducers} from "redux";
import url from "../../utils/url";
import { FETCH_DATA } from "../middleware/api";

export const types = {
    FETCH_PRODUCTS_REQUEST: "HOME/FETCH_PRODUCTS_REQUEST",
    FETCH_PRODUCTS_SUCCESS: "HOME/FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_FAILURE: "HOME/FETCH_PRODUCTS_FAILURE",

    OPEN_DRAWER: "HOME/OPEN_DRAWER",
    CLOSE_DRAWER: "HOME/CLOSE_DRAWER",
    
    ADD_TO_CART: "HOME/ADD_TO_CART",
    REMOVE_FROM_CART: "HOME/REMOVE_FROM_CART",

    ADD_ONE: "HOME/ADD_ONE",
    MINUS_ONE: "HOME/MINUS_ONE",
    CHECK_OUT: "HOME/CHECK_OUT",

    ADD_TO_COMPARISON: "HOME/ADD_TO_COMPARISON",
    REMOVE_FROM_COMPARISON: "HOME/REMOVE_FROM_COMPARISON",
    CLEAR_COMPARISON: "HOME/CLEAR_COMPARISON",

    SHOW_POP: "HOME/SHOW_POP",
    HIDE_POP: "HOME/HIDE_POP",
};

const initialState = {
    products: {
        isFetching: true,
        items: []
    },
    stateOfDrawer: false,
    selectedItems: [],
    stateOfPop: false,
    comparativeItems: {
      itemsInPop:[],
      fullCheckTimes:0
    }
};

export const actions = {
    loadProducts: () => {
        const endpoint = url.getProducts();
        return {
            [FETCH_DATA]: {
            types: [
                types.FETCH_PRODUCTS_REQUEST,
                types.FETCH_PRODUCTS_SUCCESS,
                types.FETCH_PRODUCTS_FAILURE
            ],
            endpoint
            }
        }
    },
 
    openDrawer: () => ({
        type: types.OPEN_DRAWER
    }),

    closeDrawer: () => ({
        type: types.CLOSE_DRAWER
    }),

    addToCart: id => ({
        type: types.ADD_TO_CART,
        id
    }),

    removeFromCart: id => ({
        type: types.REMOVE_FROM_CART,
        id
    }),

    addOne: id => ({
        type: types.ADD_ONE,
        id
    }),

    minusOne: id => ({
        type: types.MINUS_ONE,
        id
    }),

    checkOut: () => ({
        type: types.CHECK_OUT,
    }),

    checkCheckBox: (dispatch) => (id) => {
        dispatch({
            type: types.SHOW_POP
        });
        dispatch({
            type: types.ADD_TO_COMPARISON,
            id: id
        })
    },

    uncheckCheckBox: (dispatch) => (id) => {
        dispatch({
            type: types.SHOW_POP
        });
        dispatch({
            type: types.REMOVE_FROM_COMPARISON,
            id: id
        })
    },

    removeFromComparison: (id) => ({
        type: types.REMOVE_FROM_COMPARISON,
        id: id
    }),

    clearComparison: () => ({
        type: types.CLEAR_COMPARISON
    }),

    hidePop: () => ({
        type: types.HIDE_POP
    })

};

//reducers
const products = (state = initialState.products, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS_REQUEST: {
            return { ...state, isFetching: true };
        }

        case types.FETCH_PRODUCTS_SUCCESS: {
            return Object.assign({}, state, {
            isFetching: false,
            items: action.response
        });
        }

        case types.FETCH_PRODUCTS_FAILURE: {
            return { ...state, isFetching: false };
        }

        default:
            return state;
    }
};

const stateOfDrawer = (state = initialState.stateOfDrawer, action) => {
    switch (action.type) {
        case types.OPEN_DRAWER:
        return true;

        case types.CLOSE_DRAWER:
        return false;

        default:
        return state;
    }
};

const selectedItems = (state = initialState.selectedItems, action) => {
    switch (action.type) {
        case types.ADD_TO_CART: {
            const nextstate = [...state];
            const index = nextstate.findIndex(
                selectedItem => selectedItem.id === action.id
            );
            if (index >= 0) {
                nextstate[index].num++;
            } else {
                nextstate.push({ id: action.id, num: 1 });
            }
            return nextstate;
        }

        case types.REMOVE_FROM_CART: {
            const nextstate = [...state];
            const index = nextstate.findIndex(
                selectedItem => selectedItem.id === action.id
            );
            nextstate.splice(index, 1);
            return nextstate;
        }

        case types.CHECK_OUT: {
            return [];
        }

    case types.ADD_ONE: {
        console.log();
        const nextstate = [...state];
        const index = nextstate.findIndex(
            selectedItem => selectedItem.id === action.id
        );
        nextstate[index].num++;
        return nextstate;
    }

    case types.MINUS_ONE: {
        const nextstate = [...state];
        const index = nextstate.findIndex(
            selectedItem => selectedItem.id === action.id
        );
        nextstate[index].num--;
        if (nextstate[index].num <= 0) {
            nextstate.splice(index, 1);
        }
        return nextstate;
    }

    default:
      return state;
  }
};

const comparativeItems = (state = initialState.comparativeItems, action ) => {
    switch (action.type) {
        case types.ADD_TO_COMPARISON: {
            const nextstate = {...state};
            if (nextstate.itemsInPop.length < 4) {
                nextstate.itemsInPop = nextstate.itemsInPop.slice();
                nextstate.itemsInPop.push(action.id);
                return nextstate;
            } else {
                nextstate.fullCheckTimes = nextstate.fullCheckTimes + 1;
                return nextstate
            }
        
        }

        case types.REMOVE_FROM_COMPARISON: {
            const nextstate = {...state};
            nextstate.itemsInPop = nextstate.itemsInPop.slice();
            nextstate.itemsInPop.splice(nextstate.itemsInPop.indexOf(action.id), 1);
            return nextstate;
        }

        case types.CLEAR_COMPARISON: {
            const nextstate = {...state};
            nextstate.itemsInPop = [];
            return nextstate;
        }

    default:
        return state;
  }
};

const stateOfPop = (state = initialState.stateOfPop, action) => {
  switch (action.type) {
    case types.SHOW_POP:
      return true;

    case types.HIDE_POP:
      return false;

    default:
      return state;
  }
}

const reducer = combineReducers({
    products,
    stateOfDrawer,
    selectedItems,
    comparativeItems,
    stateOfPop
})

export default reducer;