import React, {Component} from 'react';
import {findUser, getUserPosts} from "../../services/UserService";
import { Alert } from 'reactstrap';
import {Link} from "react-router-dom";
import PostForm from "../Posts/PostForm";

class UserProfile extends Component{
    constructor(props){
        super(props)
        this.state = {user: [], posts: []}
    }

    componentDidMount(){
        findUser(this.props.match.params.id).then(user =>
            this.setState({user}));
        getUserPosts(this.props.match.params.id).then(posts =>
            this.setState({posts}));
    }

    login() {
        this.props.auth.login();
    }
    render(){
        var user = this.state.user;
        console.log(user);

        return(
            <div className="container">
                <h1>{this.state.user.name}</h1>
                <h3> {this.state.user.email}</h3>
                <br/>
                <h2>Create New Posts</h2>
                <PostForm userid={this.state.user.id}/>
                <h2>Posts</h2>
                {this.state.posts.map((post) =>
                    <Alert color="info" key={post.id}>
                        <strong><Link to={`/post/${post.id}`}>Read Now!</Link></strong> {post.title}
                    </Alert>
                )}

            </div>

        )

    }
}

export default UserProfile;