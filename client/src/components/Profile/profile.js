import React, { useState } from "react";
import "./profile.css";

const Profile = () => {
  const [pop, setPop] = useState(true);
  const [profilePic, setProfilePic] = useState(false);
  const [edit, setEdit] = useState(false);
  const [bio, setBio] = useState(false);
  const [hob, setHob] = useState(false);
  const [intro, setIntro] = useState(false);

  const handleProfilePic = () => {
    setProfilePic(true);
  };
  const hanldePopUp = () => {
    setPop(false);
  };

  const handleEditProfile = () => {
    console.log("clicked");
    setEdit(!edit);
  };

  const handleBio = () => {
    setBio(!bio);
  };

  const handleHobbies = () => {
    setHob(!hob);
  };

  const handleIntro = () => {
    setIntro(!intro);
  };

  return (
    <>
      <div className="profileCont">
        <div className="profileImgCont">
          <img className="profileBanner" />
          <button className="profileBtn">
            <div className="camara"></div>Add cover photo
          </button>
          <img
            src="https://scontent-jnb1-1.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeHJrtmxZN7CUKWOD5Xpd-aSso2H55p0AlGyjYfnmnQCUX4d7vXTtvju7-hMDxyY-B7HLCdlRDfD_-ewE8RCimOz&_nc_ohc=RUS1E-GcqmQAX_teMXO&_nc_ht=scontent-jnb1-1.xx&oh=00_AfBVJDPJV6nM5-QwL5MzhjSCi70hSbNtZC2KlmiHQfr_Xw&oe=657C30B8"
            className="profileImg"
          />
        </div>
        <div className="camCont">
          <div className="camara2"></div>
        </div>
        <div className="camera2"></div>
        <div className="profileInfoCont">
          <h1 className="profileName">Thubelihle Nhloso</h1>
          <div className="profilrButtons">
            <button className="profileStoryBtn">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/AqoGWewwdNN.png?_nc_eui2=AeEW5m_qLmHThlooElO_ucCz47DvXbwlQw3jsO9dvCVDDflnT8aQNwN3aJ7dTGwwGkXtZWg3-_mCnUIshWKMRkFu"
                className="iconAdd"
              />
              Add to story
            </button>
            <button className="profileSEditBtn" onClick={hanldePopUp}>
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/OR6SzrfoMFg.png?_nc_eui2=AeGKr8-xWJLUyy9jarn9Pvt0_i5mCW1n3JD-LmYJbWfckAcdoAmRSMhPFtP9Nu7_IWn7uzJ6XKUuYSsf9h4E0Dph"
                className="iconPencil"
              />
              Edit profile
            </button>
            <button className="profileShowBtn">
              {" "}
              <div className="iconShow"></div>{" "}
            </button>
          </div>
        </div>
        {pop ? (
          <div></div>
        ) : (
          <div className="popUp">
            <div className="popUpCont">
              <form className="popupBox" onSubmit={(e) => e.preventDefault()}>
                <div className="popUpH1">
                  <h1>Edit profile</h1>
                  <button onClick={() => setPop(true)}>
                    <div className="popUpH1Button"></div>
                  </button>
                </div>
                <div className="popUpSub">
                  <h3>Profile picture</h3>
                  <button onClick={handleProfilePic}>Add</button>
                </div>

                {profilePic ? (
                  <div className="extraPop">
                    <div className="extraPopTitle">
                      <h1>Update profile picture</h1>
                      <button onClick={() => setProfilePic(false)}>
                        <div className="x"></div>
                      </button>
                    </div>
                    <div className="extraBtns">
                      <div className="extraBtns2">
                        <button className="btnsU">
                          <div id="UP"></div>Upload photo
                        </button>
                        <button>
                          <div id="CA"></div>Create an Avatar Profile Picture
                        </button>
                        <button>
                          <div id="AF"></div>Add Frame
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}

                <div className="addProfile">
                  <img src="https://scontent-jnb1-1.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p160x160&_nc_cat=1&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeHJrtmxZN7CUKWOD5Xpd-aSso2H55p0AlGyjYfnmnQCUX4d7vXTtvju7-hMDxyY-B7HLCdlRDfD_-ewE8RCimOz&_nc_ohc=RUS1E-GcqmQAX_teMXO&_nc_ht=scontent-jnb1-1.xx&oh=00_AfDDKYsCyBb_lFtiHuuMNefWMCWVXEd8beUSBq1pVfXPIQ&oe=657D49F8" />
                </div>

                <div className="popUpSub">
                  <h3>Edit profile</h3>
                  {edit ? (
                    <button onClick={handleEditProfile}>Cancel</button>
                  ) : (
                    <button onClick={handleEditProfile}>Add</button>
                  )}
                </div>

                {edit ? (
                  <div className="extraPop extraPop2">
                    <div className="extraPopTitle">
                      <h1>Update Cover Photo</h1>
                      <button onClick={() => setEdit(false)}>
                        <div className="x"></div>
                      </button>
                    </div>
                    <div className="extraBtns">
                      <div className="extraBtns3">
                        <button>
                          <div id="extraIco">
                            <div id="extraIco1"></div>
                          </div>
                          <p>Select photo</p>
                        </button>
                        <button>
                          <div id="extraIco">
                            <div id="extraIco2"></div>
                          </div>
                          <p>Upload photo</p>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}

                <div className="addProfile"></div>

                <div className="popUpSub">
                  <h3>Avater</h3>
                  <button>
                    <a href="https://www.facebook.com/profile/avatar/?entry_point=self_profile">
                      Create
                    </a>
                  </button>
                </div>

                <h1 className="popUpP">Only you can view this section</h1>
                <div className="avater"></div>
                <p className="avaterP">Express yourself using an avatar</p>
                <button className="avaterBtn"><div className="faceico"></div>Create Avater</button>

                <div className="popUpSub">
                  <h3>Bio</h3>
                  {bio ? (
                    <button onClick={handleBio}>Cancel</button>
                  ) : (
                    <button onClick={handleBio}>Add</button>
                  )}
                </div>

                {bio ? (
                  <input type="text" className="popupInputs" autoFocus="true" />
                ) : (
                  <div className="popupBio">Describe yourself...</div>
                )}

                <div className="popUpSub">
                  <h3>Customize your intro</h3>
                  {intro ? (
                    <button onClick={handleIntro}>Cancel</button>
                  ) : (
                    <button onClick={handleIntro}>Add</button>
                  )}
                </div>

                <div className="popupIntro">
                  <p>
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/VMZOiSIJIwn.png?_nc_eui2=AeHWvpQkdkniEv7-HV-Dgyb8ysO07LK9kRPKw7Tssr2RE0JSI5CwpaCMhvzbzdS-v6eMZ49U4LhD4tjvNPjzjKkI"
                      alt="img"
                    />
                    {intro ? (
                      <input
                        type="text"
                        className="popupInputs"
                        autoFocus="true"
                      />
                    ) : (
                      "Current city"
                    )}
                  </p>
                  <p>
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/Q9Qu4uLgzdm.png?_nc_eui2=AeEFEQljt_PUHPDm-FQD0a1xQE0O-ZdJm-NATQ75l0mb4-LoaCmZEotfTCWrOP6nTAdKUHx6_RYNHLOSzuo0l0XR"
                      alt="img"
                    />
                    {intro ? (
                      <input
                        type="text"
                        className="popupInputs"
                        autoFocus="true"
                      />
                    ) : (
                      "Workplace"
                    )}
                  </p>
                  <p>
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/jV4o8nAgIEh.png?_nc_eui2=AeF9ITMBe2oV6l_R-pD7bkTuC7xezJFSLOkLvF7MkVIs6dyYQNpZOScvxVFJKStm2BOIoN5GKkp4_qpxzU_c67wI"
                      alt="img"
                    />
                    {intro ? (
                      <input
                        type="text"
                        className="popupInputs"
                        autoFocus="true"
                      />
                    ) : (
                      "School"
                    )}
                  </p>
                  <p>
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/-e1Al38ZrZL.png?_nc_eui2=AeHORl51eQOOgGpoOb2z0eduyuB9xaeJwC_K4H3Fp4nAL93AbrHs1FH4t9hSg89jiTPvQUImUD-DdVOrY6X9fkNl"
                      alt="img"
                    />
                    {intro ? (
                      <input
                        type="text"
                        className="popupInputs"
                        autoFocus="true"
                      />
                    ) : (
                      "Hometown"
                    )}
                  </p>
                  <p>
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/w44OSixC5Hn.png?_nc_eui2=AeF4X7tS-z6l_u_oBOQuBv2FGb82PGVOAsYZvzY8ZU4Cxks5JGwg3znxHwPVr9gbLGqiwdL6tEwKS8fju_p0RaRj"
                      alt="img"
                    />
                    {intro ? (
                      <input
                        type="text"
                        className="popupInputs"
                        autoFocus="true"
                      />
                    ) : (
                      "Relationship Status"
                    )}
                  </p>
                </div>

                <div className="popUpSub">
                  <h3>Hobbies</h3>
                  {hob ? (
                    <button onClick={handleHobbies}>Cancel</button>
                  ) : (
                    <button onClick={handleHobbies}>Add</button>
                  )}
                </div>

                {hob ? (
                  <input type="text" className="popupInputs" autoFocus="true" />
                ) : (
                  <div></div>
                )}

                <div className="popUpSub">
                  <h3>Featured</h3>
                  <button>Add</button>
                </div>
                <div className="avater2"></div>
                <p className="avaterP">Feature your favorite photos and stories here for all your friends to see.</p>

                <div className="popupBio"></div>

                <button className="popupButton2" type="submit">
                  <h4>Edit your About info</h4>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
