import React, { Component } from 'react'
//import ReactDOM from 'react-dom'import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'import { faCoffee } from '@fortawesome/free-solid-svg-icons' 
import '../style.css';
import { UserProvider } from './Context';
import ListItem from './ListItem';


const initialState = {nameerror:""
}

 class AddItem extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             nameerror:'',
              element :'',
              list: ["visit paris","buy a car"]       
         }
         this.removeItem =  this.removeItem.bind(this)
     }
     handleElementChange = (event)=>{
         this.setState({
             element : event.target.value})
             this.setState(initialState)

     }
    validate =()=>{
        let nameerror=''
        if (!this.state.element){
            nameerror = "error in name"
        }

        if(nameerror){
            this.setState({nameerror})
            return false
        }

        return true

    }
     handleSubmit = event=>{
         
         let newelement=this.state.element
         const isValid = this.validate()
         if (isValid){
             console.log(this.state)
         }
         
        // let newelement
        // if (this.state.element.length>1){
        //     newelement= this.state.element
        // }
        // else{
        //     null
        // }
         
         
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
                    <input type="text"
                     value = {this.state.element} 
                     onChange={this.handleElementChange}
                      placeholder="Enter the task"/>
                      

                    <button type="submit" onClick={this.handleSubmit} className="add-btn">Add to the bucket</button>
                    <div style={{color:"red", fontsize:8}}>{this.state.nameerror}</div>
                    
                    
                    <ul className="ul-list">
                    {this.state.list.map((item,index)=>(

                        //<li key  = {index}>{item}   <ListItem index={index} item={item} removeItem={this.removeItem}  />    </li> 
                        <UserProvider index={index} list = {this.state.list}>
                        <ListItem index={index} item={item} removeItem={this.removeItem}  list = {this.state.list}/>   
                        </UserProvider> 
                    ))}
                </ul>
             
            </div>
        )
    }
}

export default AddItem
