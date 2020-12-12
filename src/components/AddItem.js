import React, { Component } from 'react'
//import ReactDOM from 'react-dom'import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'import { faCoffee } from '@fortawesome/free-solid-svg-icons' 
import '../style.css';
import ListItem from './ListItem';

 class AddItem extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              element :'',
              list: ["MGM","Nagpur"]       
         }
         this.removeItem =  this.removeItem.bind(this)
     }
     handleElementChange = (event)=>{
         this.setState({
             element : event.target.value})

     }
    
     handleSubmit = event=>{
         
         let newelement=this.state.element
         
         
         this.setState({
           
            list: [...this.state.list,newelement],
             element: '' 
             
         })
     }

///new work
// editItem=(index)=>{
//     console.log("works")
//     let update_elements = [...this.state.list]
//     let update_element = {...update_element[{index}]};
//     update_element.name = 'newName';
//     update_element[{index}] = update_element;
   
//     this.setState({update_elements});

// }
//new work
     removeItem = (index) =>{
      
        
        let newList =this.state.list
        newList.splice(index,1)
    
         this.setState(
           
             this.setState({list:newList})
             
         )
     }
    //  removeItemListItem(key) {
    //     var filteredList = this.state.items.filter(function (item) {
    //       return (item.key !== key);
    //     });
       
    //     this.setState({
    //       list: filteredItems
    //     });
    //   }
/////////////////////////

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
                
                <button type="submit" onClick={this.handleSubmit} className="add-btn">Add to the bucket</button>
       
                <ul className="ul-list">
                   {this.state.list.map((item,index)=>(

                       //<li key  = {index}>{item}   <ListItem index={index} item={item} removeItem={this.removeItem}  />    </li> 
                       <ListItem index={index} item={item} removeItem={this.removeItem}  />    
                   ))}
               </ul>
            </div>
        )
    }
}

export default AddItem
