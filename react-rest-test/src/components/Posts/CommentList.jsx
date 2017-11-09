import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class CommentList extends Component{
    constructor(props){
        super(props)
        this.state = {comments: this.props.comments};
    }

    componentDidMount(){

    }
    render(){
        return(
            <ListGroup>
                {this.props.comments.map((comment) =>
                    <ListGroupItem key={comment.id}>{comment.body}</ListGroupItem>
                )}
            </ListGroup>
        )
    }
}

export default CommentList;