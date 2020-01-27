import React from 'react';
import ReactDOM from 'react-dom';
import { 
Table
} from 'react-bootstrap'
import Axios from 'axios';
import {
	Redirect
} from 'react-router-dom'

class Users extends React.Component{

constructor(props){

	super(props);
	this.state = { 

		redirect:'',
		notLoggedIn:false,
		userToken:''

		

	}
	// this.submitHandler = this.submitHandler.bind(this)
}


componentWillMount(){

	if(localStorage.getItem("Assignment_Usr_Token") !== null){

		this.setState({userToken:localStorage.getItem("Assignment_Usr_Token")})


	}

	else{

			this.setState({notLoggedIn:true})

	}

}


componenetDidMount(){

// data= {

// }
// headers = {

// }
Axios.get('http://localhost:3023/users',{headers:{ Authorization : 'Bearer '+this.state.userToken } })
.then((response) => {

	console.log(response)

})
.catch((err) => {

})


}


render(){

return (

if(this.state.notLoggedIn){

// <Redirect to="/login" />
// OR
<Redirect to = {

{

pathname:"/login",
state: {message: 'Please Login first !!'}	
}

}
/>

}



<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>

	)



}

}
// ReactDOM.render( < Login />)

export default Users