// var a = () => {

// }

// 	console.log('asdas');
// 	conole.log('saasd')

// import React from 'react';
// import ReactDOM from 'react-dom';


//component based resuable 
// function use, class use to make componenets 

// component banako ho using funciotn 
// function Button(props) { // this is a componenet which can be resued 

//     return <button type="submit">{props.label }</button>

// }


// ReactDOM.render(<Button label="Save" xyz="123" />, document.getElementById('react')) { ReactDOM.render(<Button label="Cancel" xyz="123" />  , document.getElementById('reactt')) }



// // class based 


// class Buttonn extends React.Component {
//     render() {
//         return (

//             <button>{this.props.label}</button>
//         )
//     }
// }

// ReactDOM.render(<Buttonn label="Save" />, document.getElementById('reactt'))


// const ErrorDisplay = (props) => { 

// return <div style = { {color:'red',backgroundColor:'black' } }>{props.message}</div>

// }



// ReactDOM.render(

// 	<ErrorDisplay message="404 error encoutnered !!" />,
// 	document.getElementById('error')


// 	)






















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





// }


// react state 



// class H1 extends React.Component {
// this.props ...this is from base class
// Initialize
// Mount 
// Update
// Unmount

// constructor(props){ // test class initilize // why [rops self study]


// super(props) // base class constru ctor initilize 
// this.state = {testVar:123, testVarr:234234} // this should always be an object
// }
// componentWillMount(){
// 	console.log('this is before compnent will mpunt in html DOM')
// }
// componentDidMount(){
// // data fetch // data diaply // self study
// this.setState({
// 	testVar:789
// })
// }
// shouldComponentUpdate(nextProps, nextState){
// 	// default value is true , so this function returs true
// //this.state.testVar // 123
// // // 789
// return this.state.testVar !== nextState.testVar
// // compare these two, if htere is a differecne then probably update the compoent 
// 	console.log(nextState)
// }
// componentWillUpdate(nextProps, nextState){
// console.log(nextProps,nextState)
// }
// componentDidUpdate(prevProps,prevState){
// console.log(prevProps,prevState)

// }






// // this.setState({testVar:345}) // prctise in which lifecylce stage this can be called 

// render(){

// return (

// <h1>{this.state.testVar}</h1>

// 	)

// }


// Event Handling 





// }














// ReactDOM.render(<H1 label="what"/>, document.getElementById('normall'))


// Evente handling
// class Button extends React.Component {

//     constructor(props) {

//         super(props)

//         // initial state 
//         console.log(this)

//         this.state = { test: 123 }
//         // this // if writeen with class rpoperties ... no need to bind
//         this.submitHandler = this.submitHandler.bind(this)

//     }

//     submitHandler2 = () => {

//         event.preventDefault()

//         console.log('submit button clicked using cclass properties ')
//     }

//     //  plugin -proposal-class-properties


//     submitHandler(event) {

//         event.preventDefault()

//         console.log('submit button clicked ')
//         // post request api 


//     }

//     render() {

//         return (
//         	// user arrow function here it self
//             <button onClick = {this.submitHandler2}>Click This</button>
//         )

//     }
// }

// ReactDOM.render(<Button />, document.getElementById('react'))


// forms or form handling 
// import {Component} from React

// class Myform extends React.Component {

// constructor(props){

// 	super(props)

// 	this.state = { 
// 		username:''
// 	}

// 	// this.handleChange = this.handleChange.bind(this)
// }


// handleChange = (event) => {
// // console.log(event.target.value)


// // after validatoin

// this.setState ( 

// { 
// username : event.target.value
// }



// )
// console.log(this.state.username)

// console.log(event.target.value)
// // if(event.target.value.length === 2 ){
// // 	console.log('10')
// // }


// }

// submitHandler = (event) =>{

// console.log(this.state.username)

// // will submit the form  POST API
// }

// render(){

// return(
// <form onSubmit={this.submitHandler }  >
// <label>
// Username: 
// <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
// </label>

// <input type="submit" value="submit" />
// </form>


// 	)

// }
// }

// ReactDOM.render(<Myform />, document.getElementById('forms'))







import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login/Login'

class Index extends React.Component {
    constructor() {
        super()
        this.state = {
            xyz: 10
        }
    }

    render() {
        // jsx wrap error 
        return (
		        <div>
					<Login />
				</div>
        )
    }
}
ReactDOM.render(<Index />, document.getElementById('root'))