import Axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import formUserData from '../UserFormation';
import Loader from "react-loader-spinner";
import Badge from './Badge/badge';
import TopTags from './TopTags/toptags'
import UserQuestions from "./UserQuestions/userquestions";

const User = (props) => {
    const [userData, setUserData] = useState(null);

    const getUserData = async id => {
        if (id) {
            let getUserInfo =
                `https://api.stackexchange.com/2.2/users/${id}?order=desc&sort=reputation&site=stackoverflow`;
            let getUserTag =
                `https://api.stackexchange.com/2.2/users/${id}/tags?order=desc&sort=popular&site=stackoverflow`;

            const requestOne = Axios.get(getUserInfo);
            const requestTwo = Axios.get(getUserTag);

            Axios
                .all([requestOne, requestTwo])
                .then(
                    (responses) => {
                        const responseOne = responses[0].data.items[0];
                        const responseTwo = responses[1].data.items;

                        setUserData(formUserData(responseOne, responseTwo))
                    }
                )
                .catch(errors => {
                    console.error(errors);
                });

            return userData;

        } else return undefined;
    }

    useEffect(() => {
        getUserData(props.match.params.id);
    }, [])

    return (
        <div className="container">
            <h1 className="index-title">User Profile <Link to = '/questions' style={{color:'black'}} ><a className="btn ask-question-btn" >Go To Questions</a></Link></h1>
            {userData ?
                <div>
                    <div className='user'>
                        <div className="avatar-container">
                            {console.log(userData)}
                            <div className='avatar-card'>
                                <div className='avatar'>
                                    <a>
                                        <img
                                            src={userData.userMedalData.profilePic}
                                            alt={userData.userData.name}
                                        />
                                    </a>
                                </div>
                                <div>
                                    <span style={{ fontSize: '1.61538462rem', marginRight: '5px' }}>{userData.userMedalData.reputation}</span>
                                    <span style={{ color: '#6a737c', fontSize: '11px' }}>reputation</span>
                                </div>
                                <div className="badge-container">
                                    <Badge badgeType='gold' badgeCount={userData.userMedalData.goldMedal} />
                                    <Badge badgeType='silver' badgeCount={userData.userMedalData.silverMedal} />
                                    <Badge badgeType='bronze' badgeCount={userData.userMedalData.bronzeMedal} />
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: '25px' }}>
                            <h3>{userData.userData.name}</h3>
                            {userData.userData.location && userData.userData.location != '' ? <p>Location  -  {userData.userData.location}</p> : null}
                            {userData.userData.websiteLink && userData.userData.websiteLink != '' ? <p>Website Link  -  {userData.userData.websiteLink}</p> : null}
                        </div>
                    </div>
                    <TopTags tagCount={userData.userData.tagCount} tags={userData.topTagsData}></TopTags>
                    <UserQuestions id={props.match.params.id}></UserQuestions>

                </div> : <div className='loader'><Loader
                    type="TailSpin"
                    color="#212121"
                    height={100}
                    width={100}
                /></div>}
        </div>
    )
}

export default User;