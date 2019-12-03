import { connect } from "react-redux";
import MainBox from "../components/MainBox";
import { actions as homeActions } from "../../../redux/modules/home";

function mapStateToProps(state) {
    const items = state.home.products.items;
    const isFetching = state.home.products.isFetching;
    return { items, isFetching, };
}
  
function mapDispatchToProps(dispatch) {
    return {
        addToCart: id => () => dispatch(homeActions.addToCart(id)),
        loadProducts: () => dispatch(homeActions.loadProducts()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainBox);