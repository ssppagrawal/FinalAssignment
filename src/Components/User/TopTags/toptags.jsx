import React from 'react';
import Tag from './Tag/tag';

const TopTags = (props) => {



    return (
        <div>
            <div style={{ margin: '3px' }}>
                <h4 className="user-header">Top Tags ({props.tagCount})</h4>
            </div>
            <div style={{display:'block'}}>
                {props.tags.map(x => <Tag tagName={x.name} tagCount={x.count}></Tag>)}
                {console.log(props.tags)}
            </div>
        </div>


    )

}

export default TopTags