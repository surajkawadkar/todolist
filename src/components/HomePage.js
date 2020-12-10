import React, { Component } from 'react'
import AddItem from './AddItem'
import '../style.css';

 class HomePage extends Component {
    render() {
        return (
            <div className="bg">
                 <div className="heading">Welcome to Bucketlist</div>
                <AddItem/>
            </div>
        )
    }
}

export default HomePage
