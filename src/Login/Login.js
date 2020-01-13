import React from 'react';
import ReactDOM from 'react-dom';
import Button from '..Button/Button'

class Login extends React.Components{

contstructor(props){

	super(props)
	this.state = { 
	}
}

render(){

return (

<form onSubmit={this.submitHandler }  >
<label>
Username: 
<input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
</label>
<label>
Username: 
<input type="password" name="username" value={this.state.username} onChange={this.handleChange} />
</label>
{/*<input type="submit" value="submit" />*/}
<div>
<Button label="Save" />
<div>
</form>

	)



}

}
// ReactDOM.render( < Login />)

export default Login