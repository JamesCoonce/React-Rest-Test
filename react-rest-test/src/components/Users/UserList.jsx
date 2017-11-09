import React, {Component} from 'react';
import UserBox from './UserBox';
import {loadUsers} from "../../services/UserService";

class UserList extends Component {
    constructor(props){
        super(props)
        this.state = {users: []};
    }

    login() {
        this.props.auth.login();
    }
    componentDidMount(){
        loadUsers().then(users => this.setState({users}))
    }

    render(){
        const { isAuthenticated } = this.props.auth;
        return(
            <ul>
                {
                    isAuthenticated() && (
                        <div>
                            <h4>
                            You are logged in!
                            </h4>

                            {this.state.users.map((user) =>
                                <UserBox key={user.id} user={user} match={this.props.match}/>
                            )}
                        </div>
                    )
                }
                {
                    !isAuthenticated() && (
                        <h4>
                            You are not logged in! Please{' '}
                            <a
                                style={{ cursor: 'pointer' }}
                                onClick={this.login.bind(this)}
                            >
                                Log In
                            </a>
                            {' '}to continue.
                        </h4>
                    )
                }

            </ul>
        )
    }
}
export default UserList;