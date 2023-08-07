import React, { useEffect, useState } from "react"

const TaskForm = () => {


    return (
        <form>
            <h1>Create Task Form</h1>
            <label>Enter task description:
                <input type="text" />
            </label>
            <label>Is task active now? :
                <input type="checkbox" />
            </label>
        </form>

    );
}

export default TaskForm;