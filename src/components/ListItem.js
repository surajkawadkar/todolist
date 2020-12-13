import React, { Component } from 'react'
import '../style.css';
import WorkDone from './WorkDone';

 class ListItem extends Component {



  


    

    render() {
      console.log(this.props.list)
        
      //  let index=this.props.index
        return (
            <div>
                
                  <li key  = {this.props.index}>{this.props.item}  <button className="del-btn" onClick={(e)=>this.props.removeItem(this.props.index)} value={this.props.index} > <i className="fa fa-trash" ></i>  </button>  <WorkDone index={this.props.index}/>  </li>  
                 {/* <button className="del-btn" onClick={(e)=>this.props.removeItem(this.props.index)} value={this.props.index}>DELETE{this.props.index}</button> */}
            </div>
        )
    }
}

export default ListItem
