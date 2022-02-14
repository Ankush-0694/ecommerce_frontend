import React from "react";
import { withRouter } from "../../../helpers/HOC/withRouter";
import { MyButtonComponent } from "../../design/MyButtonComponent";
import "./Unauthorize.css"

const Unauthorize = (props) => {

  const { Navigate } = props;

  return (
    <div className="w3-display-middle">
      <h1 className="w3-jumbo w3-animate-top w3-center"><>Access Denied</></h1>
      <hr className="w3-border-white w3-animate-left" style={{margin:"auto" , width:"50%"}} />
      <h3 className="w3-center w3-animate-right">You don't have permission to view this Page.</h3>
      <h3 className="w3-center w3-animate-zoom">🚫🚫🚫🚫</h3>
      <h6 className="w3-center w3-animate-zoom">error code:403 forbidden</h6>
      {/* <h3 className="w3-center w3-animate-right">
        <MyButtonComponent
        variant="contained"
        onClick={()=>{
          Navigate(-1);
        }}
        >
          Go Back
        </MyButtonComponent>
      </h3> */}
    </div>
  );
};

export default withRouter(Unauthorize) ;
