import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import S5 from './step5/';

const NotFound = () => <h1>404 Not Found</h1>

const App = () => (
    <Router>
        <div className="App">
            <Switch>
                <Route exact path="/" component={S5.Home}/>
                <Route path="/login" component={S5.Login}/>
                <Route path="/admin" component={S5.Admin}/>
                <Route path="/info" component={S5.Information}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('root')
)

registerServiceWorker();
