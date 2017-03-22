import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as challengeActions from "../../actions/challengeActions";
import _ from 'lodash';
import TotalView from './view/TotalView';
import Spinner from "../shared/Spinner";

class ChallengePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillReceiveProps(next){
        const {challenge, actions} = next;

        if (!challenge.isLoaded){
            actions.challengeActions.getChallenge(challenge.id, challenge.athletes, challenge.criteria);
        }
    }

    render() {
        const {challenge} = this.props;
        if (challenge && challenge.isLoaded) {
            return (
                <TotalView title={challenge.displayName} athletes={challenge.athletes}/>
            );
        } else {
            return (<Spinner/>);
        }
    }
}

ChallengePage.propTypes = {
    challenge: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    let challengeID = ownProps.params.id;
    let challenge;
    if (challengeID && state.challenges.length > 0) {
        challenge = state.challenges.find(t => t.id === challengeID);
    }
    return {
        challenge: challenge
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            challengeActions: bindActionCreators(challengeActions, dispatch)
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengePage);
