import React from 'react';

const Badge = (props) => {



    return (
        <div style={{ margin: '3px' }}>
            <div class={`grid ai-center badge badge-${props.badgeType}`} title={`${props.badgeCount} ${props.badgeType} badges`}>
                <span>{props.badgeCount} </span>
            </div>
        </div>
    )

}

export default Badge