import React, { Component } from 'react'
import '../App.css';

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
           
            list: [...this.state.list,newelement]
            
             
         })
     }
     removeItem = event =>{

        console.log("works")
            

        


            }
          //  list = list.splice(index,1)
          //  console.log(list)


        // function deleteIndex(elem) {
        //     //remove the deleted item from the array 
        //     toDoListObject.list = toDoListObject.list.filter(function(item) {
        //       return item !== elem.id;
     
    render() {
        let {element}=this.state
        console.log(this.state.list)
        console.log("element"+element)
        
        return (
            <div >
               <div className="heading">Welcome to Bucketlist</div>

                <label>add task</label>
                <input type="text" value = {this.state.element} onChange={this.handleElementChange}/>
                <button type="submit" onClick={this.handleSubmit}>Add  the bucket</button>
       
                <ul>
                   {this.state.list.map((item,index)=>(
                       <li key  = {index}>{item} <button onClick={this.removeItem} value={index}>DELETE{index}</button></li>
                       
                   ))}
               </ul>
            </div>
        )
    }
}

export default AddItem
