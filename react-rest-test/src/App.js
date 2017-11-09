import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import UserList from './components/Users/UserList';
import PostsList from './components/Posts/PostsList';
import CommentList from './components/Posts/CommentList';
import {
    Navbar, NavbarToggler, NavbarBrand, Collapse, Nav,
    NavLink, NavItem, Button
} from 'reactstrap';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import UserProfile from "./components/Users/UserProfile";
import Post from "./components/Posts/Post";
import {}from './services/Auth/Auth';
class App extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    goTo(route) {
        this.props.history.replace(`/${route}`)
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }


    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }




  render() {
        const { isAuthenticated } = this.props.auth;

        return (
            <div>
                <Navbar color="faded" light toggleable>
                    <NavbarToggler right onClick={this.toggle} />
                    <NavbarBrand href="/">My Posts</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/users">Users</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/posts">Posts</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    {
                        !isAuthenticated() && (
                            <Button

                                className="btn-margin"
                                onClick={this.login.bind(this)}
                            >
                                Log In
                            </Button>
                        )
                    }
                    {
                        isAuthenticated() && (
                            <Button

                                className="btn-margin"
                                onClick={this.logout.bind(this)}
                            >
                                Log Out
                            </Button>
                        )
                    }
                </Navbar>


            </div>
        );
  }
}

export default App;
