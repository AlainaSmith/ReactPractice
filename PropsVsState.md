--Props--
props get passed to the component
Theyre like function parameters
props are immutable

props (function)
this.props (class)

--State--
state is maanged within the component
They're like variables declared in the function body
state can be changed

useState Hook (functional)
this.state (class object) 

Create a state object and intilize it, this is done in the class constructor. We call the super() method. this is rquired becuaes we extend reacts comopnent class and a call has to be made to he bas class constructor. Then we create our state object:
 this.state = {}
Because we are inside of a class, we must use the "this" keyword
state is like a reserved keyword in react, when you use this.state, react undertands our intention. 
1. We created the state object
2. Add properties
3. Now we will bind this state value (Welcome Visitor) in the render function.
4. Now that we are using the state to render this message, we now have the ability to change this message. 
5. Create a button, and on the click of that button, change the message. Add HTML for a button element. In this button we will add an onClick arrow function. the handler is this.changeMessage
6. Create the changeMessage function, to change the state of the component, we needt o call the setState method. This method accepts an object which is in the curly brackets{}, which is nothing but the new state (what we want the state to change to after pressing submit button) of the component. this.setState method is the method you need to call to alter the state of a class component. 
Take Away: State can render what is seen in the browser


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


