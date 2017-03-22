import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as challengeActions from "../../actions/challengeActions";
import Tabs from '../layout/Tabs';


class DashboardPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Tabs />
        );
    }
}

DashboardPage.propTypes = {
    challenges: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        challenges: state.challenges
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            challengeActions: bindActionCreators(challengeActions, dispatch)
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
