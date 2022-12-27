import React, {useState} from 'react'
import { Redirect} from 'react-router-dom';

const Next = () =>{
    const[data, setData] = useState({
        Firstname: '',
        Lastname: '',
        Designation: '',
        Company: '',
        email: '',
        phone: '',
    })
    const{Firstname, Lastname, Designation, Company, email, phone} =data;
    const changeHandler = e => {
        setData({...data, [e.target.name]:[e.target.value]})
    }
    const submitHandler = e=>{
        e.preventDefault();
        console.log(data);
    }
    const [auth, setAuth] = useState(false);
    if (auth) {
        return<Redirect to = '/NextTwo' />
    }   
    return(
        <div>
            <center>
                <p>share your hiring requierements</p>
                <form onSubmit={submitHandler}>
                    <input type = "text" name = "Firstname" value = {Firstname}onChange = {changeHandler}/><br />
                    <input type = "text" name = "Lastname" value = {Lastname}onChange = {changeHandler}/><br />
                    <input type = "text" name = "Designation" value = {Designation}onChange = {changeHandler}/><br />
                    <input type = "text" name = "Company" value = {Company}onChange = {changeHandler}/><br />
                    <input type = "email" name = "email" value = {email}onChange = {changeHandler}/><br />
                    <input type = "number" name = "phone" value = {phone}onChange = {changeHandler}/><br />
                    <input type = "button" name = "Next" /><br />
                    <button onClick={() =>setAuth(true)}>Next</button>
                </form>
                

            </center>

        </div>
    )
}
export default Next;