import React, {Component} from 'react';
import Auth from '../services/Auth/Auth';
class Home extends Component{
    constructor(props){
        super(props)


    }
    btnClick(){
        const auth = new Auth();
        auth.login();
    }

    render(){
        return(
            <h1>This is the Home page <button onClick={this.btnClick()}>Login</button></h1>
        )
    }
}

export default Home;