import React, {PropTypes} from "react";
import {Link} from "react-router";

const ChallengeMenuItem = ({challenge, active}) => {
    return (
        <li className={active ? 'active' : ''}>
            <Link to={"/challenge/"+ challenge._id}>
                <i className="fa fa-trophy"/>
                <span>{challenge.displayName}</span>
            </Link>
        </li>
    );
};

ChallengeMenuItem.propTypes = {
    challenge: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired
};

export default ChallengeMenuItem;
