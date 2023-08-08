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

export default function MyRoute() {

    return (
        <div >
            <button onClick={() => <Navigate to="/Profile" />}>Next Page</button>
            <Link to="/profile">Profile</Link>
            {/*<Nav/>*/}
            <Routes>
                <Route exact path="/" element={<Avatar/>}/>
                <Route exact path="/profile" element={<Profile/>}/>
                {/*<Route exact path="/upcoming/:user" element={<Upcoming/>}/>*/}
                {/*<Route exact path="/record/:user" element={<Record/>}/>*/}
                {/*<Route path="*" element={<NotFound/>}/>*/}
            </Routes>
        </div>
    );
}