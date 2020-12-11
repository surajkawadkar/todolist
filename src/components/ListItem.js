import React, { Component } from 'react'
import '../style.css';

 class ListItem extends Component {



    

    render() {
        
        
        return (
            <div>
                
                  <li key  = {this.props.index}>{this.props.item}  <button className="del-btn" onClick={(e)=>this.props.removeItem(this.props.index)} value={this.props.index} > <i class="fa fa-trash" ></i></button>   </li>  
                 {/* <button className="del-btn" onClick={(e)=>this.props.removeItem(this.props.index)} value={this.props.index}>DELETE{this.props.index}</button> */}
            </div>
        )
    }
}

export default ListItem
