import React, { Component } from 'react'

 class DeleteItem extends Component {



    

    render() {
        
        
        return (
            <div>
                
                  <li key  = {this.props.index}>{this.props.item}  <button className="del-btn" onClick={(e)=>this.props.removeItem(this.props.index)} value={this.props.index}>DELETE{this.props.index}</button>   </li>  
                 {/* <button className="del-btn" onClick={(e)=>this.props.removeItem(this.props.index)} value={this.props.index}>DELETE{this.props.index}</button> */}
            </div>
        )
    }
}

export default DeleteItem
