import React, {Component} from 'react';
import {getPost, getPostComments} from "../../services/PostsService";
import CommentList from "./CommentList";

class Post extends  Component{
    constructor(props){
        super(props)
        this.state = {post: [], comments: []}
    }

    componentDidMount(){
        getPost(this.props.match.params.id).then(post => this.setState({post}));
        getPostComments(this.props.match.params.id).then(comments => this.setState({comments}));
    }
    login() {
        this.props.auth.login();
    }

    render(){
        return(
            <div className="container">
                <h1>{this.state.post.title}</h1>
                <p>{this.state.post.body}</p>
                <div>
                    <h3>Comments</h3>
                    <CommentList comments={this.state.comments}/>
                </div>
            </div>
        )
    }
}

export default Post;