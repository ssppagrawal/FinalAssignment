import React from 'react';

const Tag = (props) => {



    return (
        <div className='tag-box'>
            <span className='tag-name'>{props.tagName}</span>
            <div style={{float:'right'}}>
                <span className='score-span'>SCORE</span>
                <span className='score-span'>{props.tagCount}</span>
                <span className='score-span'>COUNT</span>
                <span className='score-span'>{props.tagCount}</span>
            </div>

        </div>
    )

}

export default Tag