// var a = () => {

// }

// 	console.log('asdas');
// 	conole.log('saasd')

import React from 'react'; 
import ReactDOM from 'react-dom';


//component based resuable 
// function use, class use to make componenets 

// component banako ho using funciotn 
function Button (props){ // this is a componenet which can be resued 

return <button type="submit">{props.label }</button>

}


ReactDOM.render(<Button label="Save" xyz="123" />  , document.getElementById('react'))
{/*ReactDOM.render(<Button label="Cancel" xyz="123" />  , document.getElementById('reactt'))*/}



// class based 

class Buttonn extends React.Component{

render() {
return(

<button>{this.props.label}</button>
	)
}
}

ReactDOM.render(<Buttonn label="Save" />, document.getElementById('reactt'))


const ErrorDisplay = (props) => { 

return <div style = { {color:'red',backgroundColor:'black' } }>{props.message}</div>

}



ReactDOM.render(

	<ErrorDisplay message="404 error encoutnered !!" />,
	document.getElementById('error')


	)






















//jsx // not a tempalting engine 

// var Thisclass = 'This is react class';
				
// const element = <h1>current Class: {Thisclass}</h1>

// ReactDOM.render(

// //what
// element,


// //where
// document.getElementById('react')

// 	)


















// require('react') module.exports 
// common js architecture 

//es6

//import exports default   exports var a =10; 

















// const renderer = () => {


// var el1 = React.createElement('div',{id='test',xyz="dasd",calssName=""},'test')

// React.createElement('p',null,'test',el,el2)





// ReactDOM.render( 
// // what 

// React.createElement(
// 'div',
// null,
// 'This is testing ',
// React.createElement('input'), // child 1
// React.createElement('p',null, new Date().toLocaleTimeString() ) // child 2

// 	),

// //where
// document.getElementById('react')



// 	)



// document.getElementById('normal').innerHTML= 
// `<div><input />${new Date().toLocaleTimeString()}</div>`;

// }





// setInterval(renderer,1000)


