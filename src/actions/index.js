import fetch from "cross-fetch";

export function openDrawer() {
  return {
    type: "OPEN_DRAWER"
  };
}

export function closeDrawer() {
  return {
    type: "CLOSE_DRAWER"
  };
}

export function addToCart(id) {
  return {
    type: "ADD_TO_CART",
    id
  };
}

export function removeFromCart(id) {
  return {
    type: "REMOVE_FROM_CART",
    id
  };
}

export function checkOut() {
  return {
    type: "CHECK_OUT"
  };
}

export function addOne(id) {
  return {
    type: "ADD_ONE",
    id
  };
}

export function minusOne(id) {
  return {
    type: "MINUS_ONE",
    id
  };
}

function requestProds() {
  return {
    type: "REQUEST_PRODS"
  };
}

function receiveProds(json) {
  return {
    type: "RECEIVE_PRODS",
    prods: json
  };
}

export function fetchProds() {
  return dispatch => {
    dispatch(requestProds());
    return fetch(`http://www.fjksjkfskj.com/j`)
      .then(response => response.json())
      .then(json => dispatch(receiveProds(json)));
  };
}
