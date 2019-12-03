import { connect } from "react-redux";
import React from "react";
import styled from "styled-components";

class FullAlert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showAlert: false};
    }

    componentDidUpdate(prevProps) {
        if (this.props.fullCheckTimes !== prevProps.fullCheckTimes) {
            this.setState((state, props) => ({ showAlert: true }));
            this.setFalse();
        }
    }

    setFalse() {
        setTimeout(() => {
            this.setState((state, props) => ({ showAlert: false }));
        }, 5500);
    }
    
    render() {
        return(
            this.state.showAlert ?
                <Alert>对比栏已满，您可以删除不需要的栏内商品再继续添加哦！</Alert>
            :
                null
        )
    }

}

function mapStateToProps(state) {
    const fullCheckTimes = state.home.comparativeItems.fullCheckTimes;
    return { fullCheckTimes };
}

export default connect(
    mapStateToProps,
    null
)(FullAlert);

const Alert = styled.div`
    position: fixed;
    z-index: 100;
    bottom: 150px;
    margin: auto;
    left: 0;
    right: 0;
    width: 970px;
    height: 27px;
    background: #ffe8e8;
    border: 1px solid #db9a9a;
    text-align: center;
    color: #c00;
`