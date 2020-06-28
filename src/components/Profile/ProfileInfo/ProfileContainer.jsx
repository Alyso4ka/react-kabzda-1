import React from 'react';
import Profile from "../Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../../api/api";
import Redirect from "react-router-dom/es/Redirect";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import Dialogs from "../../Dialogs/Dialogs";

class ProfileContainer extends React.Component {
    componentDidMount () {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 7415;
        }
this.props.getUserProfile(userId);
        setTimeout(() =>{
            this.props.getStatus(userId);
        }, 1000);

}

    render() {


        return (
            <div>
            <Profile {...this.props}
            profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />

            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status

})

export default compose(
    connect (mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer)




