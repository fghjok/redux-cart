import { combineReducers } from "redux";

const products = (state = { isFetching: true, items: [] }, action) => {
  switch (action.type) {
    case "REQUEST_PRODS": {
      return Object.assign({}, state, { isFetching: true });
    }

    case "RECEIVE_PRODS": {
      return Object.assign({}, state, {
        isFetching: false,
        items: action.prods
      });
    }

    default:
      return state;
  }
};

const stateOfDrawer = (state = false, action) => {
  switch (action.type) {
    case "OPEN_DRAWER":
      return true;

    case "CLOSE_DRAWER":
      return false;

    default:
      return state;
  }
};

const selectedItems = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
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

    case "REMOVE_FROM_CART": {
      const nextstate = [...state];
      const index = nextstate.findIndex(
        selectedItem => selectedItem.id === action.id
      );
      nextstate.splice(index, 1);
      return nextstate;
    }

    case "CHECK_OUT": {
      return [];
    }

    case "ADD_ONE": {
      console.log();
      const nextstate = [...state];
      const index = nextstate.findIndex(
        selectedItem => selectedItem.id === action.id
      );
      nextstate[index].num++;
      return nextstate;
    }

    case "MINUS_ONE": {
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

const rootReducer = combineReducers({
  products,
  stateOfDrawer,
  selectedItems
});

export default rootReducer;
