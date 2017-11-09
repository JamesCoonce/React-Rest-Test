import React, {Component} from 'react';

import {loadPosts} from "../../services/PostsService";
import PostBox from './PostBox';
class PostsList extends Component{
    constructor(props){
        super(props)
        this.state = {posts: []}
    }

    componentDidMount(){
        loadPosts().then(posts => this.setState({posts}))
    }
    login() {
        this.props.auth.login();
    }
    render(){
        return(
            <div className="container">
                {this.state.posts.map((post) =>
                    <PostBox key={post.id} post={post} match={this.props.match}/>
                )}
            </div>
        )
    }
}

export default PostsList;