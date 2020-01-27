import React from 'react';
import ReactDOM from 'react-dom';
import { 
Table
} from 'react-bootstrap'
import Axios from 'axios';


class Resgistrationwithimages extends React.Component{

constructor(props){

	super(props);
	this.state = { 
	

	}
	// this.submitHandler = this.submitHandler.bind(this)
}


function(){

vvar formData = new FormData();

formData.set("username":this.state.username)
formData.set("password":this.state.password)
formData.append("profilepic":this.state.profilepic)



}



render(){

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
// ReactDOM.render( < Login />)

export default Resgistrationwithimages