import React, { useState } from "react";
import "./groups.css";
const Groups = () => {
  const [pop, setPop] = useState(false);
  const [check, setCheck] = useState(true);

  const handleShowBtn = () => {
    setPop(true);
  };
  const handleHideBtn = () => {
    setPop(false);
  };

  const handleEncryption = () => {
    console.log(check)
    setCheck(!check)
  }

  return (
    <>
      <div className="groupsCont">
        <h1>Group conversations</h1>

        <button className="groupsContButton" onClick={handleShowBtn}>
          <div className="groupIcoCont">
            <div className="groupIco"></div>
          </div>
          <p>Create new group</p>
        </button>

        {pop ? (
          <div className="groupsPop">
            <div className="groupsContButton2">
              <p>New message</p>
              <button className="groupsButton2" onClick={handleHideBtn}>
                <svg
                  aria-hidden="true"
                  class="xvijh9v xhhsvwb x1ty9z65 xgzva0m"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                >
                  <g stroke="#BEC2C9" stroke-linecap="round" stroke-width="2">
                    <line x1="6" x2="18" y1="6" y2="18"></line>
                    <line x1="6" x2="18" y1="18" y2="6"></line>
                  </g>
                </svg>
              </button>
            </div>

            <div className="groupsContInput2">
              <p>To:</p>
              <input type="text" />
            </div>

            <div className="groupsContInput3">

                <label for="switch">Use end-to-end encryption</label>
              <label class="switch">
                <input id='switch' type="checkbox" onClick={handleEncryption} />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default Groups;
