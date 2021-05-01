import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import styles from  '../css/login.css';
import { Card, Input, Button } from 'semantic-ui-react';

class loginPage extends React.Component {

    constructor(props) {
      super(props);

        this.state = {
            users: null,
            username: null,
            password: null,
            status: ' ',
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }
    handleUsername(event) {
        this.setState({username: event.target.value});
    }   
    handlePassword(event) {
        this.setState({password: event.target.value});
    }
    loginUser(){
        let user = {
            username: this.state.username,
            password: this.state.password,
        }
        axios.post('https://maxwelljonesdesign.com/users/login',user )
        .then(res => {
          if(!res.data){
              console.log("no user found");
              this.setState({status: "Not Succesful",});
          }
          else{
              console.log("sucess");
            localStorage.setItem("user",JSON.stringify(res.data));
            this.setState({status: "Success",
                            user:res.data});
          }
      })
    }
    componentDidMount(){
        if(localStorage.getItem("user")){
            let user = JSON.parse(localStorage.getItem("user"));
            this.setState({user: user});
        }
       
       
    }

    render() {
      return (
          
        <div id='contain' >
            
            <div >
                <Card id='card'>

                    <div style={{margin:'10px',padding:'1.5vh',textAlign:'center',color:'white',backgroundColor:'rgba(46, 61, 115)'}}>
                        <h1 style={{}}>L O G I N</h1>
                    </div>
                    <div style={{textAlign:'center',margin:'10px',padding:'1.5vh',backgroundColor:'rgba(46, 61, 115)'}}>
                        <Input onChange={this.handleUsername} style={{width:'90%',margin:'1vh'}} iconPosition='left' icon='male' placeholder='USERNAME'></Input>
                        <Input type='password' onKeyPress={event => {if (event.key === 'Enter') {this.loginUser()}}} onChange={this.handlePassword} style={{width:'90%',margin:'1vh'}} iconPosition='left' icon='lock' placeholder='PASSWORD'></Input>
                        <Button onClick={() => this.loginUser()} style={{margin:'1vh',color:'white'}} color='orange' size='mini'>LOGIN</Button>
                        <p style={{color:'white'}}><a target="_blank" rel="noreferrer" style={{textDecoration:'none',color:'white'}} href='mailto:maxjones2001@hotmail.com'>Need help?</a></p>
                    </div>

                </Card>
                
            </div>
           
            
        </div>
      );
    }
};

export default loginPage;