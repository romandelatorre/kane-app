import React from 'react'
import { Route, BrowserRouter} from 'react-router-dom';
import Home from '../components/Home'
import Login from '../components/Login'

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Route exact path="/" component={Login} />      
                <Route path="/home" component={Home} />
            </BrowserRouter>
        </>
    )
}

export default Router;