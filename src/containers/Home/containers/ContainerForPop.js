import { connect } from "react-redux";
import { actions as homeActions } from "../../../redux/modules/home";
import Pop from "../components/Pop";

function mapStateToProps(state) {
    const items = state.home.products.items;
    const Ids = state.home.comparativeItems.itemsInPop;
    const itemsInPop = Ids.map(
        id => ({
            ...(items.find(item => item.id === id)),
            id,
        })
    )
    const stateOfPop = state.home.stateOfPop;
    return { itemsInPop, stateOfPop };
}

function mapDispatchToProps(dispatch) {
    return{
        removeFromComparison: id => () => dispatch(homeActions.removeFromComparison(id)),
        clearComparison: () => dispatch(homeActions.clearComparison()),
        hidePop: () => dispatch(homeActions.hidePop()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pop);

