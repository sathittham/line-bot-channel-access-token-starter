import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './index.css'
import ChannelAccessTokenTypes from './components/ChannelAccessTokenTypes';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/token-types" component={ChannelAccessTokenTypes} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;