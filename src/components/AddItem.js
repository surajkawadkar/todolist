import React, { Component } from 'react'

 class AddItem extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              element :''
         }
     }
     handleElementChange = (event)=>{
         this.setState({
             element : event.target.value})

     }
     addToBucket=()=>{const {element}=this.state

     }
    render() {
        const {element}=this.state
        return (
            <div>
                <label>add task</label>
                <input type="text" value = {this.state.element} onChange={this.handleElementChange}/>
                <button onClick={this.handleElementChange}>Add to the bucket</button>
       
            </div>
        )
    }
}

export default AddItem
