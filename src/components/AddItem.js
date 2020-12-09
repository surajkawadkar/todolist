import React, { Component } from 'react'

 class AddItem extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              element :'',
              list: ["suraj","siddharth","MGM","Nagpur"]
               
            
         }
     }
     handleElementChange = (event)=>{
         this.setState({
             element : event.target.value})

     }
    

     

     handleSubmit = event=>{
         let newelement=this.state.element
         console.log("newelement",newelement)
         this.setState({
           // list: this.state.list.cancat(newelement)
            list: [...this.state.list,newelement]
            
             
         })
     }
    render() {
        let {element}=this.state
        console.log(this.state.list)
        console.log("element"+element)
        
        return (
            <div>
               <ul>
                   {this.state.list.map((item,index)=>(
                       <li key  = {index}>{item} <button>{index}</button></li>
                       
                   ))}
               </ul>

                <label>add task</label>
                <input type="text" value = {this.state.element} onChange={this.handleElementChange}/>
                <button type="submit" onClick={this.handleSubmit}>Add  the bucket</button>
       
       
            </div>
        )
    }
}

export default AddItem
