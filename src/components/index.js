import React from 'react';
import {Link} from "react-router-dom";
import '../App.css'


function Index(){
    return(
        <div class="full-page">
            <div class="header">
                <nav>
                    <ul id='MenuItems'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/About'>About Us</Link></li>
                        <li><Link to='/Services'>Services</Link></li>
                        <li><Link to='/Contact'>Contact</Link></li>
                        <li><Link to='/login'>Log in</Link></li>
                    </ul>
                </nav>

                <div>
                    <h1>What Are you Planning</h1>
                </div>
            </div>
     </div>
    )
}

export default Index;