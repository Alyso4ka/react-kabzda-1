import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts= [
    {message: "Hi, how are you?", likesCount: 22, id: 1},
    {message: "It's my first post", likesCount: 55, id: 2}


];


let dialogs = [
    {name: "Dimych", id: 1},
    {name: "Andrey", id: 2},
    {name: "Sveta", id: 3},
    {name: "Sacha", id: 4},
    {name: "Victor", id: 5},
    {name: "Valera", id: 6},
];

let messages = [
    {message: "Hi!", id: 1},
    {message: "How is your it-kamasutra?", id: 2},
    {message: "Yo", id: 3},
    {message: "Yo", id: 4},
    {message: "Yo", id: 5},
];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
