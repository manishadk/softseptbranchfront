import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button/Button'

class Login extends React.Component{

constructor(props){

	super(props);
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
<Button color="yellow" label="Save" />
<Button color="red" label="Cancel" />

</div>
</form>

	)



}

}
// ReactDOM.render( < Login />)

export default Login