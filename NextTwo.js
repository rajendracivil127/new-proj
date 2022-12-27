import React, {useState} from 'react'
import { Redirect} from 'react-router-dom';

import Dropdown from 'react-bootstrap/Dropdown';
const NextTwo = () =>{
    const[data, setData] = useState({
        Role: '',
        positions: '',
        Experience: '',
    })
    const{Role, positions,Experience} =data;
    const changeHandler = e => {
        setData({...data, [e.target.name]:[e.target.value]})
    }
    const submitHandler = e=>{
        e.preventDefault();
        console.log(data);
    } 
    const [auth, setAuth] = useState(false);
    if (auth) {
        return<Redirect to = '/NextThree' />
    }     
    return(
        <div>
            <center>
                <p>share your hiring requierements</p>
                <form onSubmit={submitHandler}>
                    <input type = "text" name = "Role" value = {Role}onChange = {changeHandler}/><br />
                    <input type = "text" name = "positions" value = {positions}onChange = {changeHandler}/><br />
                    <input type = "text" name = "Experience" value = {Experience}onChange = {changeHandler}/><br />
                    <Dropdown>
      <Dropdown.Toggle variant="Experience" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">more than 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                    
                    <input type = "button" name = "next" /><br />
                    <button onClick={() =>setAuth(true)}>Next</button>
                </form>


            </center>

        </div>
    )
}
export default NextTwo;