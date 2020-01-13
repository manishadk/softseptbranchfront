 import React from 'react'
import './Button.css'

 class Button extends React.Component {




    render() {
// const color =this.props.color
const buttonStyle = {

testStyle : {
	// color:'red',
	// fontSize:'30px',
	// backgroundColor:'blue'
}

}


        return (

            <button id="button" className="button" style={buttonStyle.testStyle} >{this.props.label}</button>
        )
    }
}

export default Button

//styled componenet 