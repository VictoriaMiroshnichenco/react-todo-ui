import {StrictMode} from "react";

import React, { useEffect, useState } from "react";


import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Tasks from './Tasks';
import TaskTable from './TaskTable';
import SearchBar from './SearchBar';
import TaskForm from './TaskForm';
import Profile from './Profile';
import Avatar from './Avatar';
import MyRoute from './MyRoute';
import './App.css';

export default function App() {



    const rootElement = document.getElementById('root');
    const root = createRoot(rootElement);

    root.render(
        <StrictMode>
            <BrowserRouter>
                <MyRoute />
            </BrowserRouter>
        </StrictMode>
    );

}
