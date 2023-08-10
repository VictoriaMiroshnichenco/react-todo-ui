import React, {useEffect, useState} from "react";
import CardContainer from './CardContainer';
function CardFetcher() {


    // const TEST_TASKS = [{
    //     "id": "5820a4c2abe74f409da89217bf905a0c",
    //     "description": "Read a\n Book",
    //     "created": "2018-09-02T16:00:01",
    //     "modified": "2018-09-02T16:00:01",
    //     "completed": false
    // },
    // {
    //     "id": "7fd921cfd2b64dc7b995633e8209f385",
    //     "description": "Buy\n Milk",
    //     "created": "2018-09-23T15:00:01",
    //     "modified": "2018-09-23T15:00:01",
    //     "completed": false
    // },
    // {
    //     "id": "a44b6db26aef49e39d1b68622f55c347",
    //     "description": "Go to Spring\n One 2018",
    //     "created": "2018-09-18T12:00:00",
    //     "modified": "2018-09-18T12:00:00",
    //     "completed": true
    // }];
    let status = "In-progress";

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

    return (<div  >
            <h1 style={{ color: 'red' }}>CardFetcher</h1>
                <div><CardContainer tasks= {tasks} status ="All"/></div>

                <div><CardContainer tasks= {tasks} status ="Defined"/></div>
                <div><CardContainer tasks= {tasks} status ={status}/></div>
                <div><CardContainer tasks= {tasks} status ="Done"/></div>

        </div>
    );
}
export default CardFetcher;