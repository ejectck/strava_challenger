import React, {PropTypes} from 'react';
import TotalSummary from '../../logic/totalSummary';
import PeriodSummary from '../../logic/periodSummary';
import thresholds from './view/thresholds';

const Progress = ({challenge, user}) => {
    const joinedAthlete = challenge.athletes.find(a=>a.id === user.id);
    if (!joinedAthlete){
        return (<div/>);
    }
    const thresholdCriteria = Object.keys(challenge.criteria.threshold)[0];
    const threshold = challenge.criteria.threshold[thresholdCriteria];
    const achieved = new TotalSummary(challenge.athletes.find(a=>a.id == user.id).activities).getByCriterion(thresholdCriteria);
    const percentage = (achieved/threshold) * 100;
    const periodSummary = new PeriodSummary(challenge.criteria.datetime.after, challenge.criteria.datetime.before);

    const label = thresholds[thresholdCriteria].label;
    const Component = thresholds[thresholdCriteria].component;
    return (
        <div className="progress-group">
            <span className="progress-text">{label}</span>
            <span className="progress-number"><b><Component metres={achieved}/></b>/<Component metres={threshold}/></span>
            <div className="progress">
                <div className="progress-bar progress-bar-primary progress-bar-striped" style={{width: percentage + '%'}}>{Math.round(percentage) + '%'}</div>
                &nbsp;{periodSummary.getSummary()}
            </div>
        </div>
    );
};

Progress.propTypes = {
    challenge: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default Progress;