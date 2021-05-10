import React from 'react';
import Questions from '../../Questions/questions';

const UserQuestions = (props) => {



    return (
        <div>
            <div style={{ margin: '3px' }}>
                <h4 className="user-header">Top Posts</h4>
            </div>
            <Questions id={props.id}></Questions>
        </div>


    )

}

export default UserQuestions