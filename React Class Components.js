// Step 1: we need to decide the component structure, how many components
// to use and what they will describe.App

//We will need a card
//we will need a list


const CardList = (props) => {
<div>
    <Card />
</div>
}
class Card extends Component {
    render() {
        return (
        <div className="github-profile" style={{margin:'1rem'}}>
            <img src="https://placehold.it/75" />
            <div className="info" style={{display:'inline-block', marginLeft:10}}>
            <div className="name" style={{fontSize: '125%'}}>Name here...</div>
            <div className="company">Company Here..</div>
        </div>
        </div>
        )
    }
}

class App extends React.Component {
render() {
    return (
        <div>
            <div className = "header">{title}</div>
            <Card />
        </div>
    )
    
}
}

//{title} is a prop. it has to become this.props.title
//Instead of recieving props as arguments (like in functions), 
//in class component, both the props and state are managed on an instance of the class


//--Another Exmaple Below, Read md for more info

import React, { Component } from 'react'

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for Subscribing'
        })
    }

    render() {
        return(
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        ) 
    }
}