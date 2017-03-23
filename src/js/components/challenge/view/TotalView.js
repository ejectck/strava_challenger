import React, {PropTypes} from "react";
import UserInfo from "./UserInfo";
import Table from "../../layout/table/Table";
import TotalSummary from '../../../logic/totalSummary';
import {Kilometre, Metre, Time} from '../../../components/layout/format';

const TotalView = ({challenge}) => {
    const columns = ['Athlete', 'Runs', 'Distance', 'Elev Gain', 'Time'];

    const rows = challenge.athletes.map((athlete, index)=> {
        const totalSummary = new TotalSummary(athlete.activities);
        return [
            <UserInfo key={index} userInfo={athlete.userInfo}/>, 
            totalSummary.getRunCount(),
            <Kilometre key={index} metres={totalSummary.getDistance()} />,
            <Metre key={index} metres={totalSummary.getElevGain()} />,
            <Time key={index} seconds={totalSummary.getTime()} />
        ];
    });
    return (
        <Table columns={columns} rows={rows}/>
    );
};

TotalView.propTypes = {
    challenge: PropTypes.object.isRequired
};

export default TotalView;