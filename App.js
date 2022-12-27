import React from 'react'
import NavbarTwo from './NavbarTwo';
import { BrowserRouter, Route} from 'react-router-dom';
import Next from './Next';
import NextTwo from './NextTwo';
import NextThree from './NextThree';
import { Switch } from '@mui/material';

const App = () =>{
     
    return(
        <div>
          <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path='/' exact component = {Next} />
            <Route path='/NextTwo' exact component = {NextTwo} />
            <Route path='/NextThree' exact component = {NextThree} />
          </Switch>
          </BrowserRouter>
            

        </div>
    )
}
export default App;