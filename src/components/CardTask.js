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


                <div className="baseCard">
                    <div className="taskProfileContainer">
                        <img  src="https://i.imgur.com/1SzeVDJ.png" title="source: imgur.com" className="cardImage"/>
                        <label className="taskName">{task.description}</label>
                    </div>
                    <p className="taskDescription">Paste the description here please. You can write something
                        important.</p>
                    <p className="taskDescription">{task.taskStatus}</p>
                    <p className="taskDescription">{computed_done}</p>
                </div>

            
{/*<h1>_____________________________________________________________</h1>*/}
{/*            <h5>____________________________Static____________________________</h5>*/}
{/*            <h5 >CardTask</h5>*/}
{/*            <h5 >{task1.description}</h5>*/}
{/*            <h5 >{task1.taskStatus}</h5>*/}
{/*            <h5 >{task1.completed}</h5>*/}

{/*            <img className="avatar" src="https://i.imgur.com/1SzeVDJ.png" title="source: imgur.com" />*/}
{/*            <h5>___________Fetched from Database_______________</h5>*/}



{/*        <h1 >{task.description}</h1>*/}
{/*            <h5 >{task.taskStatus}</h5>*/}

{/*            <h5 >{computed_done}</h5>*/}


        </div>
    );
}
export default CardTask;