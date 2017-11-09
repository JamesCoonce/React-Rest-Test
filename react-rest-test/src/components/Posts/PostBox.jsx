import React, {Component} from 'react';
import { Jumbotron, Button, NavItem, NavLink } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
class PostBox extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div>
                <Jumbotron>
                    <h1 className="display-3">{this.props.post.title}</h1>
                    <p className="lead">{this.props.post.body}</p>
                    <p className="lead">
                        <Button color="primary">
                            <Link to={`/post/${this.props.post.id}`} className="nav-link">Read More</Link>
                        </Button>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}

export default PostBox;