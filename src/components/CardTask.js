import React, { useEffect, useState } from "react";
import '../App.css';
import '../style/style.css';

function CardTask ({task_id}){
    const task1= {
        "id": "a44b6db26aef49e39d1b68622f55c347",
        "description": "Learn Spring Boot",
        "created": "2022-09-18T12:00:00",
        "modified": "2022-09-18T12:00:00",
        "completed": true,
        "taskStatus": "Done"
    }

    const [task, setTasks] = useState([])

    const fetchTaskData = () => {
        let url = 'http://laptop-mm38guqj:8080/api/todo/'+ task_id;
        fetch(url, {
            // mode: 'no-cors',//needs for crossdaomain
            mode:        'cors',
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization':'Basic dXNlcjpwYXNzd29yZA=='
            },
        }).then(response => {
            return response.json()
        })
            .then(data => {
                setTasks(data)
            })
    }

    useEffect(() => {
        fetchTaskData()
    }, [])

    const computed_done = task.completed===false ? "Active" : "Completed";

    return (<div  >
<h1>_____________________________________________________________</h1>
            <h1>____________________________Static____________________________</h1>
            <h1 >CardTask</h1>
            <h1 >{task1.description}</h1>
            <h1 >{task1.taskStatus}</h1>
            <h1 >{task1.completed}</h1>

            <img className="avatar" src="https://i.imgur.com/1SzeVDJ.png" title="source: imgur.com" />
            <h1>___________Fetched from Database_______________</h1>



        <h1 >{task.description}</h1>
            <h1 >{task.taskStatus}</h1>

            <h1 >{computed_done}</h1>


        </div>
    );
}
export default CardTask;