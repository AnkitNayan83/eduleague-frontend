import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/slice/authSlice";
import { HashLoader } from "react-spinners";
import { hideLoading, showLoading } from "../../redux/slice/alertSlice";
import { axiosRequest } from "../../axiosInstance";

export const EditProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.alerts.loading);

  const [fName, setFirstName] = useState(user?.fName || "");
  const [lName, setLastName] = useState(user?.lName || "");
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNo || "");
  const [location, setlocation] = useState(user?.location || "");

  const handleSaveChanges = async() => {
    dispatch(showLoading());
    const updatedUser = {
      ...user,
      fName: fName,
      lName: lName,
      // phoneNo: phoneNumber,
      location:location,
    };
    dispatch(setUser(updatedUser));
    await axiosRequest.put("/user/update-user", {fName , lName , location}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
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
              value={fName}
              type="text"
              placeholder="Enter your First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="content">
            <h4>Last Name</h4>
            <input
              type="text"
              value={lName}
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
          <div className="content">
            <h4>Address</h4>
            <input
              type="text"
              value={location}
              placeholder="Enter your Last Name"
              onChange={(e) => setlocation(e.target.value)}
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
