import React, {useEffect, useState} from 'react';
import axios from 'axios';
const useEffects = () =>{
    const [name, setName] = useState('alla');
    const [age, setAge] = useState(30);
    const [post, setPost] = useState([]);
    //componentDidMount
    useEffect(( )=> {
        axios.get('https://jsonplaceholder.typicode.com/posts/').then((res) =>{
            console.log(res);
            setPost(res.data);

        }).catch((err) =>{
            console.log(err);

        });

    });
    //componentDidUpdate
    useEffect(( )=> {
        document.title = name;

    }, [name]);
    //componentWillUnMount
    // useEffect(( )=> {
    //     document.title = name;

    // }, []);
    //conditional rendering
    const postList = (post.length) ? (post.map(info)=>{

    
    
        return(
            <React.Fragment key = {info.id}>
                <p>Title: {info.title}</p>
                <p>Body: {info.body}</p>
            </React.Fragment>
        )
    })): (<p>No post yet</p>)
    return(
        <React.Fragment>
            <p>{name}</p>
            <p>{age}</p>
            {postList}

            </React.Fragment>
    )
}
export default UseEffects;
