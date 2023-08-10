import React, { useEffect, useState } from "react";

function CreateTask() {
   const [editForm, setEditForm] = useState({
        id: "",
        description: "",
        taskStatus:""

    });
   const [message,setMessage] = useState('');
    let {id, description, taskStatus} = editForm;

    function handleChange(e) {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value
        })
    };
    function handleEditForm(e) {
        e.preventDefault();
        fetch(`http://laptop-mm38guqj:8080/api/todo/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization':'Basic dXNlcjpwYXNzd29yZA=='
            },
            body: JSON.stringify(editForm),
        }).then(resp => {console.log("Created")})
            .then(updatedCustomer => {
                handleCustomerUpdate(updatedCustomer)})
    };
    function handleChange(e) {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value
        })
    };
    function handleCustomerUpdate(updatedCustomer) {
        setMessage("Done!");
      //  onUpdateCustomer(updatedCustomer);
        console.log("handleCustomerUpdate")
    }

    return (<div  >
            <h1 style={{ color: 'red' }}>Create or update Task</h1>
            <form onSubmit={handleEditForm}>
                <input type="text" name="id" value={id} onChange={handleChange}/>
                <input type="text" name="description" value={description} onChange={handleChange}/>
                <input type="text" name="taskStatus" value={taskStatus} onChange={handleChange}/>
                <button type="submit">Submit Changes</button>
            </form>
            <h5>{message}</h5>
            </div>
    );
}
export default CreateTask;