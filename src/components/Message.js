import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../App.css';
import '../style/style.css';


function Message ({task_id}){
    const [message, setMessage] = useState('');
    useEffect(() => {
        loadMessage();
    }, []);
    const loadMessage = async () => {
        try {
            const response = await axios.get('https://json.versant.digital/.netlify/functions/fake-api/message');
            setMessage(response.data);
        } catch (e) {
            setMessage(e.message);
        }
    };
    return <h1>{message}</h1>;
};

export default Message;