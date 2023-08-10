import React from "react";
import CardTaskTemplate from './CardTaskTemplate';
function CardContainer({tasks,status}) {
    let chunkedArray = [];
    if (status === "All") {
        chunkedArray =  tasks;

}else{
        chunkedArray= tasks.reduce((reduction, task) => {
            if (task.taskStatus === status) reduction.push(task);
            console.log(task.description);
            console.log(task.taskStatus + "  " + status);
            return reduction
        }, [])
    }
    return (<div  >

          <div className="cardContainer" id={status}>
          <p className="nameColumns">Status {status}</p>
                {/*<div><CardTaskTemplate task={tasks[0]}/></div>*/}
                {/*<div><CardTaskTemplate task={tasks[1]}/></div>*/}
                {/*<div><CardTaskTemplate task={tasks[2]}/></div>*/}


                {chunkedArray.map((tsk) => (
                    <CardTaskTemplate task={tsk}></CardTaskTemplate>
                ))}
            </div>
      
        </div>
    );
}
export default CardContainer;