import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/slice/authSlice";
import { HashLoader } from "react-spinners";
import { hideLoading, showLoading } from "../../redux/slice/alertSlice";

export const EditProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.alerts.loading);

  const [firstName, setFirstName] = useState(user?.fName || "");
  const [lastName, setLastName] = useState(user?.lName || "");
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNo || "");

  const handleSaveChanges = () => {
    dispatch(showLoading());
    const updatedUser = {
      ...user,
      fName: firstName,
      lName: lastName,
      phoneNo: phoneNumber,
    };
    dispatch(setUser(updatedUser));
    setTimeout(() => {
      dispatch(hideLoading());
    }, 1000);
  };
  return (
    <div>
      <div className="img-wrappper">
        <img src="./images/prof.png" alt="" />
      </div>
      {loading ? (
        <div className="spinnerd">
          <HashLoader color="#333" />
        </div>
      ) : (
        <div className="info-tab">
          <div className="content">
            <h4>First Name</h4>
            <input
              value={firstName}
              type="text"
              placeholder="Enter your First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="content">
            <h4>Last Name</h4>
            <input
              type="text"
              value={lastName}
              placeholder="Enter your Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="content">
            <h4>Phone Number</h4>
            <input
              value={phoneNumber}
              type="text"
              placeholder="Enter your Phone no."
              disabled
            />
          </div>

          <div className="btn-wrapper">
            {loading ? (
              <button className="btn" disabled>
                Saving...
              </button>
            ) : (
              <button className="btn" onClick={handleSaveChanges}>
                Save Changes
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
