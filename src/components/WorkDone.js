import React, { Component } from 'react'
//import { UserConsumer } from './Context'


export class WorkDone extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             //msg:true
             clicked:false
        }
    }
    
  taskDone=(index)=> {
    console.log("donetask function")
    console.log(this.props.index)
    //console.log(this.props.list[index])
    //let done= this.props.list(index)
    //console.log(done)
      this.setState({
        
        clicked:true
        //msg:'completed'
        
      }
         
      )
  }
    

     // taskDone=(index)=>{
          
    //     console.log("taskdone works fine")
    //     let complete
    //     this.complete=true
      //}
    
    render() {
      let btn_class = this.state.clicked ? 'done-btn' : 'check-btn' 
        return (
            <div className="work-done">
            
                
                <button className={btn_class} onClick={()=>this.taskDone(this.props.index)} >   <i className="fa fa-check" aria-hidden="true"></i></button>
                 {/* <b>{complete ? 'completed' : null}</b>  */}
                


                
            </div>
        )
    }
}

export default WorkDone
