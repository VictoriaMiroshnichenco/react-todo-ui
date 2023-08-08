import React from "react";
import './App.css';
import './style/style.css';

function Profile() {
  return (<div id="stage">
      <div id="day">
          <label id="date">Tuesday, 22th March</label>
          <label id="something"><i>Write something here</i></label>
      </div>
      <div id="userProfile">
          <div id="userPhotoDiv">
              <img src="https://i.imgur.com/vO9xQr0.jpg" id="userPhoto"/>
            </div>
          <div id="userProfileText_Name">
              <label>Anastasia Smeet</label>
          </div>
          <div id="userProfileText_Description">
              <label><i><br/>Front-end engineer<br/>Like Agata Christi’s books</i></label>
          </div>
      </div>
      <div id="taskProfile">
          <img src="https://i.imgur.com/1SzeVDJ.png" id="taskPhoto"/>
      </div>
      <div id="taskList">
          <div>
              <input type="checkbox" className="taskListCheckBox"/>
                  <label className="taskListLabel">Win the war</label>
          </div>
          <div>
              <input type="checkbox" className="taskListCheckBox"/>
                  <label className="taskListLabel">Return to Kharkiv</label>
          </div>
          <div>
              <input type="checkbox" className="taskListCheckBox"/>
                  <label className="taskListLabel">Buy milk</label>
          </div>
          <div>
              <input type="checkbox" className="taskListCheckBox"/>
                  <label className="taskListLabel">Assasin Putin</label>
          </div>
      </div>
  </div>
    );
}
export default Profile;