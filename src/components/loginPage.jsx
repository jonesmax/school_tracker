import React from 'react';
import axios from 'axios';
import Board from './Board';
import ReactDOM from 'react-dom';
import styles from  '../css/login.css';
import { Card, Input, Button } from 'semantic-ui-react';
import orangeImage from '../images/orange.png';

class loginPage extends React.Component {

    constructor(props) {
      super(props);

        this.state = {
            users: null,
            username: null,
            password: null,
            status: ' ',
            user: null
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
    loginComponent(){
        return (
          
            <div id='contain' >
                
                <div id='content'>
                    <Card id='card'>
                        <div style={{margin:'10px',padding:'1.5vh',textAlign:'center',color:'white',backgroundColor:'rgba(46, 61, 115)'}}>
                            <h1 style={{color:'#D37506',fontFamily:'Share Tech'}}>ST L o g i n</h1>
                        </div>
                        <div style={{textAlign:'center',fontFamily:'Share Tech',margin:'10px',padding:'1.5vh',backgroundColor:'rgba(46, 61, 115)'}}>
                            <Input onChange={this.handleUsername} style={{width:'90%',margin:'1vh'}} iconPosition='left' icon='male' placeholder='USERNAME'></Input>
                            <Input type='password' onKeyPress={event => {if (event.key === 'Enter') {this.loginUser()}}} onChange={this.handlePassword} style={{width:'90%',margin:'1vh'}} iconPosition='left' icon='lock' placeholder='PASSWORD'></Input>
                            <Button onClick={() => this.loginUser()} style={{margin:'1vh',color:'white'}} color='orange' size='mini'>LOGIN</Button>
                            <p style={{color:'white',marginTop:'5px',width:'100%',textAlign:'center'}}><a target="_blank" rel="noreferrer" style={{textDecoration:'none',color:'white'}} href='mailto:maxjones2001@hotmail.com'>Need help?</a></p>
                            
                        </div>
                        
                    </Card>
                    <p style={{opacity:'40%',color:'white',marginTop:'-5px',width:'100%',textAlign:'center'}}><a target="_blank" rel="noreferrer" style={{textDecoration:'none',color:'white'}} href='https://maxwelljones.ca'>maxwelljones.ca</a></p>
                </div>
               
                
            </div>
          );
    }

    render() {
        return(
            <div style={{position:'unset'}}>
                {!this.state.user && this.loginComponent()} 
                {this.state.user && <Board user={this.state.user} />}
            </div>
        );
    }
};

export default loginPage;