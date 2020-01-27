// var a = () => {

// }

//  console.log('asdas');
//  conole.log('saasd')

// cerate-react-app 
// import React from 'react';
// import ReactDOM from 'react-dom';


// component based resuable 
// function use, class use to make componenets 


// function Button(props) { // this is a componenet which can be resued 
//     return <button type="submit">{props.label }</button>


// }

                    //what // where 
// ReactDOM.render(<Button label="Save" xyz="123" color="green" />, document.getElementById('react')) { ReactDOM.render(<Button label="Cancel" xyz="123" />  , document.getElementById('reactt')) }


// class Buttonn extends React.Component {


// constructor(){  //function default function

// super()

// }


// render() {


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

//  <ErrorDisplay message="404 error encoutnered !!" />,
//  document.getElementById('error')


//  )






















//jsx // not a tempalting engine 

// var Thisclass = 'This is react class';

// const element = <h1>current Class: {Thisclass}</h1>

// ReactDOM.render(

// //what
// element,


// //where
// document.getElementById('react')

//  )


















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

//  ),

// //where
// document.getElementById('react')



//  )



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
// // }
// componentWillMount(){
//  console.log('this is before compnent will mpunt in html DOM')
// }
// componentDidMount(){
//     // axios.get()

// // data fetch // data diaply // self study
// this.setState({
//  testVar:789
// })
// }
// shouldComponentUpdate(nextProps, nextState){
//  // default value is true , so this function returs true
// //this.state.testVar // 123
// // // 789
// return this.state.testVar !== nextState.testVar
// // compare these two, if htere is a differecne then probably update the compoent 
//  console.log(nextState)
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

//  )

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
//          // user arrow function here it self
//             <button onClick = {this.submitHandler2}>Click This</button>
//         )

//     }
// }

// ReactDOM.render(<Button />, document.getElementById('react'))


// forms or form handling 
// import {Component} from React

// class Myform extends React.Component {

// constructor(props){

//  super(props)

//  this.state = { 
//      username:''
//  }

//  // this.handleChange = this.handleChange.bind(this)
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
// //   console.log('10')
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


//  )

// }
// }

// ReactDOM.render(<Myform />, document.getElementById('forms'))


// registration 
//login
// user list with edit delete button 




import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login/Login';
import Registration from './Registration/Registration'
import Users from './Users/Users'


import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Nav,
    Container,
    Row,
    Col,
    Card,
    Button
} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route

} from 'react-router-dom'
//react naivigation // react native 
// react-router-dom
class Index extends React.Component {
    constructor() {
        super()
        this.state = {
            xyz: 10
        }
    }


    Footer = () => {
        return (
                  <Row>
                      <Col sm={4}>
                      Contact US : 
                      Ph. No: 
                      email: test@test.com
                      </Col>
                        <Col sm={4}>
                        Copyright@2019
                      </Col>
                        <Col sm={4}>
                        Map
                      </Col>
                  </Row>


            )
    }

    Notfound = () => {

        return (

            <h1>The page you are looking for doesnot exist 404 !!!</h1>

            )

    }


    

    render() {

        // const myStyle= { 
        //     container:{
        //         marginBottom:this.props.color
        //     },
        //     row: {

        //     }
        //     marginBottom:'10px'
        // }
        // jsx wrap error 
        return (
            <Router>

                <Container>
                  <Row s>
                    <Col sm={8}>

                    <Card style={{ width: '18rem' }}>
                      {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
                      <Card.Body>
                        <Card.Title>My Assigment</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>

                    
                    </Col>
                    <Col sm={4}>

                    <h1>Welcome </h1>

                    </Col>
                  </Row>
                  <Row>
                <div> 
                <Nav variant="pills" >
                      <Nav.Item>
                        <Nav.Link as={Link} to="/home" active={true} >Home</Nav.Link>
                      </Nav.Item>
                     <Nav.Item>
                        <Nav.Link as={Link} to="/login" >Login</Nav.Link>
                      </Nav.Item>
                     <Nav.Item>
                        <Nav.Link as={Link} to="/registration" >Registration</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link as={Link} to="/registration" >Registration</Nav.Link>
                      </Nav.Item>
                        <Nav.Item>
                        <Nav.Link as={Link} to="/users" >User List</Nav.Link>
                      </Nav.Item>
                    </Nav>
                </div>
                  </Row>
                  <Row>
                  </Row>
                    
            </Container>

            






            <Switch>
            {/*    <Route path="/"> // all paths having / in their urls
                    < Login />
                </Route>
            */}


                <Route exact path="/login"  component={Login} />

                <Route exact path="/registration">
                    < Registration />
                </Route>

                <Route exact path="/users">
                    < Users />
                </Route>

                <Route component={this.Notfound} />

                

            </Switch>


              </Router>
        )
    }
}
ReactDOM.render(<Index />, document.getElementById('root'))