import React, { useEffect, useState } from "react"

const Tasks = () => {
    const [tasks, setTasks] = useState([])

    const fetchTaskData = () => {
        fetch('http://laptop-mm38guqj:8080/api/todo', {
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

    return (
        <div>
            <p>here is Tasks.js example</p>
            {tasks.length > 0 && (
                <ul>
                    {tasks.map(task => (
                        <li key={task.id}>{task.description}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Tasks;