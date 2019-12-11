import React  from 'react';
import {Link} from 'react-router-dom';


const Menu=()=>{
    return(
        <div>
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><a href="About">About</a></li>
                <li><Link to="/Contact">Contact</Link></li>
                </ul>

            </div>
    )
}

export default Menu;
