import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
if (!props.profile) {
    return <div>Preolader</div>
}


    return (
        <div>
            <div>
                {/*<img src='https://www.w3schools.com/howto/img_snow_wide.jpg'/>*/}
                <div>
                    <div className={s.descriptionBlock}>
                        <img src={props.profile.photos.large}/>
                        <div>
                        <ProfileStatus status={props.status}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default ProfileInfo;


