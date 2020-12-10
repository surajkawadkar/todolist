import React, { Component } from 'react'
import AddItem from './AddItem'
import '../style.css';
import NavBar from './NavBar';

 class HomePage extends Component {
    render() {
        return (
            <div className="bg">
                <div>
                    <NavBar className="nav"/>
                </div>
                 
                <AddItem/>
            </div>
        )
    }
}

export default HomePage
