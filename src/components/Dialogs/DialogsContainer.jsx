import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";
import Redirect from "react-router-dom/es/Redirect";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let AuthRedirectComponent = withAuthRedirect(Dialogs)



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBodyCreator:(body) => {
           dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage:() => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


export default DialogsContainer;


