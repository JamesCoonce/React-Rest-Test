import React, {Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {createPost} from "../../services/PostsService";

class PostForm extends Component{
    constructor(props){
        super(props)
        this.state = {post: {title: "Blank Title", body: "Blank Body"}}

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;

        const name = target.name;

        this.setState({
            [name]: value
        });
        //this.setState({post: {[name]: value}})

    }

    handleSubmit(event) {
        //alert(this.state.title + " " + this.state.body);
        var post = {title: this.state.title, body: this.state.body, userId: this.props.userid };
        //alert(post.title + " " + post.userId);
        createPost(post).then(res => console.log(res));
        event.preventDefault();
    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                    <Label for="title" sm={2}>Title</Label>
                    <Col sm={10}>
                        <Input type="text" name="title" id="title" placeholder="Title" onChange={this.handleInputChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="body" sm={2}>Body</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="body" id="body" placeholder="Body" onChange={this.handleInputChange}/>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

export default PostForm;