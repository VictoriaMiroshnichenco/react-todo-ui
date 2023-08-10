import React from "react";
import CardTaskTemplate from './CardTaskTemplate';
function CardContainer({tasks,status}) {
   
    let lgh = status;
    return (<div  >
            <h1 style={{ color: 'red' }}>CardContainer</h1>
            <div className="cardContainer" id={status}>
          <p className="nameColumns">status {lgh}</p>
                <div><CardTaskTemplate task={tasks[0]}/></div>
                <div><CardTaskTemplate task={tasks[1]}/></div>
                <div><CardTaskTemplate task={tasks[2]}/></div>

            </div>
      
        </div>
    );
}
export default CardContainer;