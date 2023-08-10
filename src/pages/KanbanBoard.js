import React from "react";

import '../style/CardStyle.css';
import CardTask from '../components/CardTask';
function KanbanBoard() {
    const inprogress = 'inprogress';
    const defined = 'defined';
    const accepted = 'accepted';
    const completed = 'completed';

    return (<div className="stage">
            <div className="stickContainer">
                <div className="baseTextKanban">
                    <div className="divTextKanban">
                        <label className="textKanban">Kanban</label>
                    </div>
                </div>
                <div className="baseNameColumns">
                    <div className="divNameColumn">
                        <label className="nameColumns">Defined</label>
                    </div>
                    <div className="divNameColumn">
                        <label className="nameColumns">In-progress</label>
                    </div>
                    <div className="divNameColumn">
                        <label className="nameColumns">Completed</label>
                    </div>
                    <div className="divNameColumn">
                        <label className="nameColumns">Accepted</label>
                    </div>
                </div>
                <div className="lineContainer">
                    <div className="lineKanban"></div>
                    <div className="lineKanban"></div>
                    <div className="lineKanban"></div>
                </div>
            </div>
            <div className="notStickContainer">
                <div className="cardContainer" id={defined}>
                {/*    <div className="baseCard">*/}
                {/*        <div className="taskProfileContainer">*/}
                {/*            <img src="../images/TaskPhoto.png" className="cardImage"/>*/}
                {/*            <label className="taskName">Some task</label>*/}
                {/*        </div>*/}
                {/*        <p className="taskDescription">Paste the description here please. You can write something*/}
                {/*            important.</p>*/}
                {/*    </div>*/}
                    <div><CardTask task_id='7fd921cfd2b64dc7b995633e8209f385'/></div>
                    <div><CardTask task_id='7fd921cfd2b64dc7b995633e8209f385'/></div>
                    <div><CardTask task_id='7fd921cfd2b64dc7b995633e8209f385'/></div>
                   
                </div>
                <div className="cardContainer" id={inprogress}>

                    <div><CardTask task_id='7fd921cfd2b64dc7b995633e8209f385'/></div>
                    <div><CardTask task_id='7fd921cfd2b64dc7b995633e8209f385'/></div>


                </div>
                <div className="cardContainer" id={completed}>

                    <div><CardTask task_id='7fd921cfd2b64dc7b995633e8209f385'/></div>
                    <div><CardTask task_id='7fd921cfd2b64dc7b995633e8209f385'/></div>


                </div>
                <div className="cardContainer" id={accepted}>

                    <div><CardTask task_id='7fd921cfd2b64dc7b995633e8209f385'/></div>


                </div>




            </div>
        </div>
    );
}
export default KanbanBoard;