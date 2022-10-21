import React, { useEffect, useState} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Header from ' ./Header';
import axios from 'axios';
import Footer from './Footer';
import Topstories from './Topstories';
import Newstories from './Newstories';
import Beststories from './Beststories';
const App = () => {
  const [response,setResponse] = useState([]);
  useEffect(()=>{
    axios.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty").then(response =>console.log(response))
  },[])
  
  
  return (
    <React.Fragment>
      <BrowserRouter>
      <Link to = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty">Topstories</Link>
      <Link to = "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty">Newstories</Link>
      <Link to = "https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty">Beststories</Link>
      <Switch>
        
          <Route path = "/"><Top stories/></Route>
          <Route path = "/"><new stories/></Route>
          <Route path = "/"><best stories/></Route>
          </Switch>
          </BrowserRouter>
      {response.map(item =><li key = {item}></li>)}
      <Header/>
      <Topstories/>
      <Newstories/>
      <Beststories/>

      
     
    </React.Fragment>
    
  
  )
  }
  

export default App;
