import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Tag from '../Tag/tag';
import Votes from './Votes/votes'

const Question = (props) => {

    console.log(props.question);

    return(
        <div key = {props.question.question_id} className="box theme-reverse flex-display">
            <div className="votes-container">
                <Votes type='votes' count={20}></Votes>
                <Votes type='answer' count={props.question.answer_count} isAnswered={props.question.is_answered} ></Votes>
                <Votes type='views' count={props.question.view_count}></Votes>
            </div>
            <div className="flex-inline-block">
                    <a href = {props.question.link} target='_blank'>
                        <h3>{props.question.title}</h3>
                    </a>

                    <p className="asked-by">
                        Asked on {moment(props.question?.creation_date * 1000).format('DD - MMMM - YYYY')} by 
                        <Link to = {`/User/${props.question?.owner?.user_id}`}>
                            <a>{props.question?.owner?.display_name}</a>
                        </Link>
                    </p>
                    
                    <div className='tagContainer'>
                        {props.question.tags.map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                        ))}
                    </div>

                </div>
            
        </div>
    )
}

export default Question