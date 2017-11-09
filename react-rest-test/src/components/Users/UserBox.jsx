import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import { Media } from 'reactstrap';
import UserProfile from "./UserProfile";

class UserBox extends Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <div>
                <Media>
                    <Media left href="#">
                        <Media object data-src={this.props.user.avatar} src={this.props.user.avatar} alt="Generic placeholder image" />
                    </Media>
                    <Media body>
                        <Media heading>
                            <Link to={`profiles/${this.props.user.id}`}>{this.props.user.name}</Link>
                        </Media>
                        {this.props.user.email}
                    </Media>
                </Media>

            </div>
        )
    }
}

export default UserBox;