import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Home';
import UserList from './Users/UserList';
import PostsList from './Posts/PostsList';
import Callback from '../services/Callback/Callback';
import Auth from '../services/Auth/Auth';
import history from '../services/Auth/history';
import App from '../App';
import UserProfile from "./Users/UserProfile";
import Post from './Posts/Post';


const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
    }
}

export const makeMainRoutes = () => {
    return (
        <BrowserRouter history={history} component={App}>
            <div>



                <Switch>
                    <Route exact path="/" render={(props) => <App auth={auth} {...props} />} />
                    <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
                    <Route path="/users" render={(props) => <UserList auth={auth} {...props} />}/>
                    <Route path="/posts" render={(props) => <PostsList auth={auth} {...props} />}/>
                    <Route path={`/profiles/:id`} render={(props) => <UserProfile auth={auth} {...props} />} />
                    <Route path={`/post/:id`} render={(props) => <Post auth={auth} {...props} />} />
                    <Route path="/callback" render={(props) => {
                        handleAuthentication(props);
                        return <Callback {...props} />
                    }}/>
            </Switch>
            </div>
        </BrowserRouter>
    );
}