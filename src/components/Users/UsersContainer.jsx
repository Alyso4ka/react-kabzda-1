import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers,
    unfollow
} from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import preloader from './../../assets/images/Bean Eater-1s-200px.svg';
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }


    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize);
    }


    render() {
        return <>
            {this.props.isFetching ? <img src={preloader}/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>

    }
}

// let mapStateToProps = (state) => {
//         return {
//             users: state.usersPage.users,
//             pageSize: state.usersPage.pageSize,
//             totalUsersCount: state.usersPage.totalUsersCount,
//             currentPage: state.usersPage.currentPage,
//             isFetching: state.usersPage.isFetching,
//             followingInProgress: state.usersPage.followingInProgress
//
//         }
//     }



let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}


export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers})
)(UsersContainer)
