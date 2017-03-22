import React, { PropTypes } from 'react';

const TableRow = ({row}) => {
    return (
        <tr>
            {row.map((item, index)=><td key={index}>{item}</td>)}
        </tr>
    );
};

TableRow.propTypes = {
    row: PropTypes.object.isRequired
};

export default TableRow;
