import React from 'react';
import ReactDOM from 'react-dom';
// import Button from '../Button/Button'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class Login extends React.Component{

constructor(props){

	super(props);
	this.state = { 
		username:'',
		password:''
	}
	// this.submitHandler = this.submitHandler.bind(this)
}

// function submitHandler() {

// }
changeHandler = (e) => {

	// e.target.value 
	// this.setState({username:e.target.value,password:e.target.value})
    this.setState({[e.target.name] : e.target.value})

}


submitHandler = (e) => { // use class property plugin in babel rc 

// axios fetch  jQeuryAjax ajax XMLHTTPRequest
// fetchpost - url-encoded  req.body bodyparser .use urleconded 

// api request from browser 
// cross origin request 
// cross origin header
// cross origin methods /POST GET 

e.preventDefault();
fetch('http://localhost:3023/login',{ //FormData
	method:'POST',
	headers:{
		// Content-Type: // www-x-form urlencoded actaul form submit wihoput react
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(this.state ) // JSON.parse(this.state)


})
.then( (response) => response.json())
.then((data) => {

	console.log(data)

})
// .then(function(response){

// })
// .catch(function(err){

// })
.catch((error) => {

	console.log(error)

})

}


render(){

return (

<Form onSubmit={this.submitHandler}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control  type="text" name="username" placeholder="Enter email" value={this.state.username} onChange={this.changeHandler} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>


	)



}

}
// ReactDOM.render( < Login />)

export default Login