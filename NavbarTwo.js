import React from 'react'
import {link} from 'react-router-dom';

const NavbarTwo = () => {
    return(
        <div>
            <ul>
                <link to = "/"><li>Next</li></link>
                <link to = "/NextTwo"><li>NextTwo</li></link>
                <link to = "/NextThree"><li>NextThree</li></link>
            </ul>
        </div>
    )
}
export default NavbarTwo