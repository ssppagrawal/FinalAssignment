import React from 'react';

const Votes = (props) => {

    var classes = ['votes'];

    if (props.isAnswered)  classes.push('answered') ;

    return (
        <div className={classes.join(' ')}>
            <div className="mini-counts"><span title={`${props.count} ${props.type}`}>{props.count}</span></div>
            <div>{props.type}</div>
        </div>


    )

}

export default Votes