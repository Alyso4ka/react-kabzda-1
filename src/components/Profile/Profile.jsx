import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div>
    <img src='https://www.w3schools.com/howto/img_snow_wide.jpg' />
    <div>
      <div>
        ava + description
      </div>
      <MyPosts/>
  </div>
  </div>
  
}
    export default Profile; 

