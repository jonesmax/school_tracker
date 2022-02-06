import React from 'react';
import axios from 'axios';
import moment from 'moment';
import styles from  '../css/login.css';
import { Nav, Navbar, Form, FormControl,NavDropdown } from 'react-bootstrap';
import { Dropdown,Icon,Button,Card,Divider,Segment,Checkbox, Input, Label,Loading,Loader, Dimmer,List,Table, Container, Modal } from 'semantic-ui-react';

class Hours extends React.Component {
    
    constructor() {
        super();
        this.state = {
            user:this.props,
        }

    }

    async getData(user_id){
        axios.get('https://maxwelljonesdesign.com/schedule/'+user_id )
        .then(res => {
            if(res.data){
                this.setState({schedule: res.data});

            }
            else{
            
            }
        })
    }

    componentDidMount() {
        this.getData(this.props.user.id);
    }
    render() {
        
        return(
            <div >
                {(this.state.classes && this.state.schedule && this.state.assignments) && this.navBar()}
                {(this.state.classes && this.state.schedule && this.state.assignments) && this.classesComponent()}
               
            </div>
        );
    }      
}

export default Hours;