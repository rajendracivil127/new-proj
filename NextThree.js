import React, {useState} from 'react'



const NextThree = () =>{
    const[data, setData] = useState({
        Location: '',
        Timeline: '',
        
    })
    const{Location, Timeline} =data;
    const changeHandler = e => {
        setData({...data, [e.target.name]:[e.target.value]})
    }
    const submitHandler = e=>{
        e.preventDefault();
        console.log(data);
    }   
    return(
        <div>
            <center>
                <p>share your hiring requierements</p>
                <form onSubmit={submitHandler}>
                    <input type = "text" name = "Location" value = {Location}onChange = {changeHandler}/><br />
                    <input type = "text" name = "Location" value = {Timeline}onChange = {changeHandler}/><br />
                   
                    
                    <input type = "button" name = "Get a call back" /><br />
                </form>
                

            </center>

        </div>
    )
}
export default NextThree;