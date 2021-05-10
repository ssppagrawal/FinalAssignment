import React, { useEffect, useState } from "react";
import Axios from 'axios';
import Question from '../Question/question';
import Loader from "react-loader-spinner";

const Questions = (props) => {
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        const url = props.id ? `/users/${props.id}/questions`
                                : `/questions/featured`;

        Axios.get(`https://api.stackexchange.com/2.2${url}`, {
            params: {
                order: 'desc',
                sort: 'activity',
                site: 'stackoverflow'
            }
        })
            .then(res => {
                if (res.data) {
                    setQuestion(res.data.items);
                    console.log(res.data.items);
                }
            })
            .catch((err) => { console.log(err); })
    }, [])


    return (
        question?.length > 0 ?
            <div className="container">
                {props.id ? null : <h1 className="index-title">Top Questions <a className="btn ask-question-btn" >Ask question</a></h1>}
                {question?.map(question => {
                    return <Question question={question} />
                })}
            </div> : <div className = 'loader'><Loader
                type="TailSpin"
                color="#212121"
                height={100}
                width={100}
            /></div>
    )
}

export default Questions;