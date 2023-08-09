import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom';

import Profile from './Profile';
import Avatar from './Avatar';
import App2 from './App2';
import Home from './Home';
import CardTask from './components/CardTask';

export default function MyRoute() {

    return (
        <div >
            <button onClick={() => <Navigate to="/Profile" />}>Next Page</button>
            <Link to="/home">Home Page</Link>
            <br/>
            <Link to="/profile">Profile</Link>
            <br/>
            <Link to="/all">All Components</Link>
            <br/>
            <Link to="/cardTask">Card</Link>
            <br/>


            {/*<Nav/>*/}
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/profile" element={<Profile/>}/>
                <Route exact path="/all" element={<App2/>}/>
                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/cardTask" element={<CardTask/>}/>
                {/*<Route exact path="/upcoming/:user" element={<Upcoming/>}/>*/}
                {/*<Route exact path="/record/:user" element={<Record/>}/>*/}
                {/*<Route path="*" element={<NotFound/>}/>*/}
            </Routes>
        </div>
    );
}