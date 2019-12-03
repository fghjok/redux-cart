import { connect } from "react-redux";
import Header from "../components/Header";
import { actions as homeActions } from "../../../redux/modules/home";

function mapStateToProps(state) {
    const numberOfSelectedItems = state.home.selectedItems.reduce(
        (sum, current) => sum + current.num,
        0
    );
    return { numberOfSelectedItems };
}
  
function mapDispatchToProps(dispatch) {
    return {
        openDrawer: () => dispatch(homeActions.openDrawer())
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);