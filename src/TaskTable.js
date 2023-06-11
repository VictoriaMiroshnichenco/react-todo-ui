import React, { useEffect, useState } from "react";
import SearchBar from './SearchBar';

const TaskTable = () => {
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

    function TaskRow({ task }) {

        const description = task.completed===false ? task.description :
            <span style={{ color: 'grey' }}>
                {task.description}
        </span>;
        return (
            <tr>
                <td>{description}</td>
                <td>{task.completed}</td>
            </tr>
        );
    }
    function TaskTable1({ tasks, filterText, activeOnly }) {
        const rows = [];
        let lastCategory = null;

        tasks.forEach((task) => {
            if (
                task.description.toLowerCase().indexOf(
                    filterText.toLowerCase()
                ) === -1
            ) {
                return;
            }
            if (activeOnly && task.completed===true) {
                return;
            }

            rows.push(
                <TaskRow
                    task={task}
                    key={task.desctiption} />
            );

        });

        return (
            <table>
                <thead>
                <tr>
                    <th>Task</th>
                    <th>Active</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }


    //
// const TASKS = [{
//         "id": "5820a4c2abe74f409da89217bf905a0c",
//         "description": "Read a\n Book",
//         "created": "2018-09-02T16:00:01",
//         "modified": "2018-09-02T16:00:01",
//         "completed": false
//     },
//     {
//         "id": "7fd921cfd2b64dc7b995633e8209f385",
//         "description": "Buy\n Milk",
//         "created": "2018-09-23T15:00:01",
//         "modified": "2018-09-23T15:00:01",
//         "completed": false
//     },
//     {
//         "id": "a44b6db26aef49e39d1b68622f55c347",
//         "description": "Go to Spring\n One 2018",
//         "created": "2018-09-18T12:00:00",
//         "modified": "2018-09-18T12:00:00",
//         "completed": true
//     }];


    function TaskPane({ tasks }) {
        const [filterText, setFilterText] = useState('');
        const [activeOnly, setActiveOnly] = useState(false);

        return (
            <div>
                <SearchBar
                    filterText={filterText}
                    inStockOnly={activeOnly}
                    onFilterTextChange={setFilterText}
                    onInStockOnlyChange={setActiveOnly}
                    label={"Only show active tasks"}/>
                <TaskTable1
                    tasks={tasks}
                    filterText={filterText}
                    activeOnly={activeOnly} />
            </div>
        );
    }


    return (
        <div><TaskPane tasks={tasks}/></div>

    );
}

export default TaskTable;