import React, { Component } from 'react'
//import ReactDOM from 'react-dom'import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'import { faCoffee } from '@fortawesome/free-solid-svg-icons' 
import '../style.css';

 class AddItem extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              element :'',
              list: ["MGM","Nagpur"]       
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

    //  removeItemdeleteItem(key) {
    //     var filteredList = this.state.items.filter(function (item) {
    //       return (item.key !== key);
    //     });
       
    //     this.setState({
    //       list: filteredItems
    //     });
    //   }
/////////////////////////

 removeItem = (item) =>{
    console.log("works")
     let filteredList = this.state.list.filter(list=>{
         return(list!==item)
     }) 

     this.setState(
       
         this.setState({list:filteredList})
     )
 }
//////////////////////////////////////////////////////
    //  removeItem = event =>{

    //     console.log("works")
    //     console.log(index)

    //         }

////////////////////////////////////////////////////////
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
            <div className="add-item" >
              
              <div className="heading">Welcome to Bucketlist</div>
                <label>Add task</label>
                <input type="text" value = {this.state.element} onChange={this.handleElementChange} placeholder="Enter the task"/>
                
                <button type="submit" onClick={this.handleSubmit} className="add-btn">Add  the bucket</button>
       
                <ul className="ul-list">
                   {this.state.list.map((item,index)=>(
                       <li key  = {index}>{item} <button className="del-btn" onClick={(e)=>this.removeItem(item)} value={index}>DELETE{index}</button></li>     
                   ))}
               </ul>
            </div>
        )
    }
}

export default AddItem
