import { connect } from "react-redux";
import DrawerWithCart from "../components/DrawerWithCart";
import {
  closeDrawer,
  addOne,
  minusOne,
  checkOut,
  removeFromCart
} from "../actions";

function mapStateToProps(state) {
  const stateOfDrawer = state.stateOfDrawer;
  const ItemsInCart = state.selectedItems.map(selecteditem => ({
    ...state.products.items.find(item => item.id === selecteditem.id),
    number: selecteditem.num
  }));
  const payment = ItemsInCart.reduce(
    (sum, current) => sum + current.number * current.price,
    0
  );
  return { stateOfDrawer, ItemsInCart, payment };
}

function mapDispatchToProps(dispatch) {
  return {
    onClose: () => dispatch(closeDrawer()),
    onAddOne: id => () => dispatch(addOne(id)),
    onMinusOne: id => () => dispatch(minusOne(id)),
    onCheckOut: () => dispatch(checkOut()),
    onRemove: id => () => dispatch(removeFromCart(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerWithCart);
