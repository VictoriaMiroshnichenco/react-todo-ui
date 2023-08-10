import React from "react";
import CardTask from '../components/CardTask';

function CardTaskDemo() {
    return (<div  >
        <div className="cardContainer" >
            <h1 style={{ color: 'red' }}>Card Task </h1>
            <div><CardTask task_id='7fd921cfd2b64dc7b995633e8209f385'/></div>
             </div>
        </div>
    );
}
export default CardTaskDemo;