import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import {
Redirect

} from 'react-router-dom'


class Registration extends React.Component {

        constructor(props) {

            super(props);

            this.state = {
            	username:'',
            	password:'',
            	address:'',
            	redirect:false,
            	validationMessage:'',
            	message:''
            }

        }



        usernameHandler = (e) => {
        	this.setState({username:e.target.value})
        	if(e.target.value.length < 6){
        		this.setState({validationMessage:'Userame must be greater than 6'})
        	}
        }

        passwordHandler = (e) => {
        	this.setState({password:e.target.value})
        }

        addressHandler = (e) => {
        	this.setState({address:e.target.value})
        }

        submitHandler = (e) => {
        	e.preventDefault();

		        	var data = {
		        		username : this.state.username,
		        		password : this.state.password,
		        		address : this.state.address


		        	}
		        	//FORMdata

		        	var headers = {
		        	

		        	}

		        	Axios.post(
		        		//url
		        		//data -> js oject this.state,
		        		//headers -> js object

		        		'http://localhost:3023/registration',
		        		data,
		        		headers
		        		)
		        	.then( (response) => {

		        		console.log(response)
		        		if(response.status === 201 ){
		        			this.setState({message:response.data.message})
		        			this.setState({redirect : true})
		        		}


		        	})
		        	.catch( (err) => {

		        	})

        }

        render() {

        	if(this.state.redirect == true){

        		return(

        				<Redirect to='/login' />
        			)

        	}

        	



            return (



                <Form onSubmit={this.submitHandler} >
				  <Form.Group controlId="formBasicEmail">
				    <Form.Label>Email address</Form.Label>
				    <Form.Control  type="text" name="username" value={this.state.username} placeholder="Enter email" onChange={this.usernameHandler}  />
				    <Form.Text className="text-muted">
				      {this.state.validationMessage}
				    </Form.Text>
				  </Form.Group>

				  <Form.Group controlId="formBasicPassword">
				    <Form.Label>Password</Form.Label>
				    <Form.Control type="password" value={this.state.password} name="password" placeholder="Password" onChange={this.passwordHandler}   />
				  </Form.Group>


				  <Form.Group controlId="formBasicAddress">
				    <Form.Label>Address</Form.Label>
				    <Form.Control type="text" value={this.state.address} name="address" placeholder="Enter Address" onChange={this.addressHandler}   />
				  </Form.Group>

				  <Button variant="primary" type="submit">
				    Submit
				  </Button>
				</Form>

            )

        }
}
        export default Registration