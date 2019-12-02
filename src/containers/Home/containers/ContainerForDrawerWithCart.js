import { connect } from "react-redux";
import DrawerWithCart from "../components/DrawerWithCart";
import { actions as homeActions } from "../../../redux/modules/home";
  
  function mapStateToProps(state) {
    const items = state.home.products.items;
    const stateOfDrawer = state.home.stateOfDrawer;
    const selectedItems = state.home.selectedItems.map(selecteditem => ({
                                                                          ...items.find(item => item.id === selecteditem.id),
                                                                          number: selecteditem.num
                                                                        }));
    const payment = selectedItems.reduce(
                                          (sum, current) => sum + current.number * current.price, 0
                                        );
    return { stateOfDrawer, selectedItems, payment };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      closeDrawer: () => dispatch(homeActions.closeDrawer()),
      addOne: id => () => dispatch(homeActions.addOne(id)),
      minusOne: id => () => dispatch(homeActions.minusOne(id)),
      checkOut: () => dispatch(homeActions.checkOut()),
      removeFromCart: id => () => dispatch(homeActions.removeFromCart(id))
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DrawerWithCart);