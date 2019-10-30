import MainBox from "../components/MainBox";
import { connect } from "react-redux";
import { addToCart, fetchProds } from "../actions";

function mapStateToProps(state) {
  const items = state.products.items;
  const isFetching = state.products.isFetching;
  return { items, isFetching };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddToCart: id => () => dispatch(addToCart(id)),
    onRequest: () => dispatch(fetchProds())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainBox);
