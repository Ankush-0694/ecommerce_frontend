import React from "react";
import ProfileInformation from "../../user/Profile/Component/ProfileInformation/ProfileInformation";

const VendorProfile = ({ userData }) => {
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <div
        style={{
          padding: "12px 0px 16px 24px",
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
