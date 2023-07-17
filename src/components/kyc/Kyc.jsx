import React, { useState } from "react";
import "./kyc.scss";
import { axiosRequest } from "../../axiosInstance";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../redux/slice/alertSlice";
import { HashLoader } from "react-spinners";

export const Kyc = () => {
  const [step, setStep] = useState(1);
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    address: "",
    pincode: "",
    phoneNumber: "",
  });
  const [documentDetails, setDocumentDetails] = useState({
    documentType: "",
  });
  const [bankDetails, setBankDetails] = useState({
    accountNumber: "",
    confirmAccountNumber: "",
    accountHolderName: "",
    ifscCode: "",
  });
  const [kycStatus, setKycStatus] = useState("Pending");
  const [document, setDocument] = useState(null);

  const handlePersonalDetailsChange = (e) => {
    setPersonalDetails({
      ...personalDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleDocumentDetailsChange = (e) => {
    setDocumentDetails({
      ...documentDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleBankDetailsChange = (e) => {
    setBankDetails({
      ...bankDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.alerts.loading);

  const handleSubmitButton = async () => {
    // Call backend API to update KYC status
    try {
      dispatch(showLoading());
      let formData = new FormData();
      formData.append("name", 123);
      formData.append("address", personalDetails.address);
      formData.append("pincode", personalDetails.pincode);
      formData.append("phoneNo", personalDetails.phoneNumber);

      formData.append("document", document);
      formData.append("documentType", documentDetails.documentType);

      formData.append("accountNumber", bankDetails.accountNumber);
      formData.append("nameOnAccount", bankDetails.accountHolderName);
      formData.append("IfscCode", bankDetails.ifscCode);

      const { data } = await axiosRequest.post("/user/kyc", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch(hideLoading());
      setStep(step + 1);
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error("All fields are required");
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  const handleConfirmAccountNumberChange = (e) => {
    setBankDetails({
      ...bankDetails,
      confirmAccountNumber: e.target.value,
    });
  };

  return (
    <div>
      {step === 1 && (
        <div className="kyc-step">
          <h2 className="kyc-step-title">Enter your Information</h2>
          <div>
            <div className="kyc-field">
              <label className="kyc-label">Name:</label>
              <input
                type="text"
                name="name"
                value={personalDetails.name}
                onChange={handlePersonalDetailsChange}
                required
                className="kyc-input"
              />
            </div>
            <div className="kyc-field">
              <label className="kyc-label">Address:</label>
              <input
                type="text"
                name="address"
                value={personalDetails.address}
                onChange={handlePersonalDetailsChange}
                required
                className="kyc-input"
              />
            </div>
            <div className="kyc-field">
              <label className="kyc-label">Pincode:</label>
              <input
                type="text"
                name="pincode"
                value={personalDetails.pincode}
                onChange={handlePersonalDetailsChange}
                required
                className="kyc-input"
              />
            </div>
            <div className="kyc-field">
              <label className="kyc-label">Phone Number:</label>
              <input
                type="text"
                name="phoneNumber"
                value={personalDetails.phoneNumber}
                onChange={handlePersonalDetailsChange}
                required
                className="kyc-input"
              />
            </div>
            <div className="kyc-btn-container">
              <button onClick={handleNext} className="kyc-btn">
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="kyc-step">
          <h2 className="kyc-step-title">Id Proof</h2>
          <div onSubmit={handleNext}>
            <div className="kyc-field">
              <label className="kyc-label">Document Type:</label>
              <select
                name="documentType"
                value={documentDetails.documentType}
                onChange={handleDocumentDetailsChange}
                required
                className="kyc-input"
              >
                <option value="">Select Document Type</option>
                <option value="PAN Card">PAN Card</option>
                <option value="Voter ID Card">Voter ID Card</option>
                <option value="Aadhaar Card">Aadhaar Card</option>
                <option value="Driving License">Driving License</option>
              </select>
            </div>
            <div className="kyc-field doc">
              <label className="kyc-label">Document:</label>
              <input
                type="file"
                name="document"
                onChange={(e) => setDocument(e.target.files[0])}
                required
                className="kyc-input"
                accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
              />
            </div>
            <div className="kyc-btn-container">
              <button onClick={handleNext} className="kyc-btn">
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 3 &&
        (loading ? (
          <div className="kyc-loader">
            <h2>Uploading KYC</h2>
            <HashLoader />
          </div>
        ) : (
          <div className="kyc-step">
            <h2 className="kyc-step-title">Bank Details</h2>
            <div>
              <div className="kyc-field">
                <label className="kyc-label">Account Holder Name:</label>
                <input
                  type="text"
                  name="accountHolderName"
                  value={bankDetails.accountHolderName}
                  onChange={handleBankDetailsChange}
                  required
                  className="kyc-input"
                />
              </div>
              <div className="kyc-field">
                <label className="kyc-label">Account Number:</label>
                <input
                  type="text"
                  name="accountNumber"
                  value={bankDetails.accountNumber}
                  onChange={handleBankDetailsChange}
                  required
                  className="kyc-input"
                />
              </div>
              <div className="kyc-field">
                <label className="kyc-label">Confirm Account Number:</label>
                <input
                  type="text"
                  name="confirmAccountNumber"
                  value={bankDetails.confirmAccountNumber}
                  onChange={handleConfirmAccountNumberChange}
                  required
                  className="kyc-input"
                />
              </div>
              <div className="kyc-field">
                <label className="kyc-label">IFSC Code:</label>
                <input
                  type="text"
                  name="ifscCode"
                  value={bankDetails.ifscCode}
                  onChange={handleBankDetailsChange}
                  required
                  className="kyc-input"
                />
              </div>
              <div className="kyc-btn-container">
                <button className="kyc-btn" onClick={handleSubmitButton}>
                  Submit KYC
                </button>
              </div>
            </div>
          </div>
        ))}
      {step === 4 && (
        <div className="kyc-step">
          <h2 className="kyc-step-title">KYC Status</h2>
          {kycStatus === "Pending" ? (
            <div className="kyc-status">KYC Status: Pending</div>
          ) : (
            <div className="kyc-status">KYC Status: Approved</div>
          )}
        </div>
      )}
    </div>
  );
};
