import Header from "../components/Header";
import { connect } from "react-redux";
import { openDrawer } from "../actions";

function mapStateToProps(state) {
  const numberOfSelectedItems = state.selectedItems.reduce(
    (sum, current) => sum + current.num,
    0
  );
  return { numberOfSelectedItems };
}

function mapDispatchToProps(dispatch) {
  return {
    open: () => dispatch(openDrawer())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
