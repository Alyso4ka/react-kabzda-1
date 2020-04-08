
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={store.getState()}
                         addPost={store.addPost.bind(store)}
                         updateNewPostText={store.updateNewPostText.bind(store)}
                         addMessage={store.addMessage.bind(store)}
                         updateNewMessageText={store.updateNewMessageText.bind(store)}/>,
        document.getElementById('root'));
};




rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


