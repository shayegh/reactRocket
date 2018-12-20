import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter,Route } from 'react-router-dom';
// import './index.css';
// import App from './App';
import App2 from './App2';
import About from './About';
import {UserForm} from './UserForm';
import {FormikApp} from './Register';
import BookingForm from "./components/BookingForm";
import * as serviceWorker from './serviceWorker';

const routes = (
    <HashRouter>
        <div>
            <Route path="/" exact component={App2} />
            <Route path="/about" component={About} />
            <Route path="/user" component={UserForm} />
            <Route path="/register" component={FormikApp} />
            <Route path="/booking" component={BookingForm} />
        </div>
    </HashRouter>
);

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
