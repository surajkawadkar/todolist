import React, { Component } from 'react'


export class WorkDone extends Component {
  
    

     // taskDone=(index)=>{
          
    //     console.log("taskdone works fine")
    //     let complete
    //     this.complete=true
      //}
    
    render() {
        
        return (
            <div className="work-done">
               {/* <p>{this.complete ? 'completed' : null}</p> */}
                <button className="check-btn" onClick={this.taskDone} >   <i className="fa fa-check" aria-hidden="true"></i></button>
                {/* <b>{complete ? 'completed' : null}</b> */}


                
            </div>
        )
    }
}

export default WorkDone
