import React from "react";
import ProfileInformation from "../../user/Profile/Component/ProfileInformation/ProfileInformation";

const VendorProfile = ({ userData }) => {
  return (
    <div style={{ width: "90%", padding: "0px 24px", margin: "auto" }}>
      <div
        style={{
          padding: "12px 0px 16px 16px",
          fontSize: "24px",
        }}
        className="vendorAccountHeading">
        My Profile
      </div>

      <ProfileInformation userData={userData} />
    </div>
  );
};

export default VendorProfile;
