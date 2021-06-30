import React from "react";
import { AllProductStyles } from "../../CSS/AllProductStyles";
import { MyTypography } from "../../../../../Design/MyTypography";
import { MyPaper } from "../../../../../Design/MyPaper";
import { MyButtonComponent } from "../../../../../Design/MyButtonComponent";
import { MyCardMedia } from "../../../../../Design/MyCardComponents/CardMedia";

const VendorAllProducts = ({ data, setCurrent }) => {
  const classes = AllProductStyles();
  const { productName, productPrice, productDescription } = data;

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <MyPaper elevation={3} className={classes.productItem}>
          <div style={{ width: "30%", padding: "10px" }}>
            <MyCardMedia
              height="100"
              className={classes.MediaImg}
              style={{ borderRadius: "10px", minWidth: "100px" }}
              title="IMAGE"
              image="https://source.unsplash.com/collection/190727/800x450"
            />
          </div>
          <div style={{ margin: "10px", width: "70%" }}>
            <div>
              <MyTypography variant="h6" component="h6">
                {" "}
                {productName}
              </MyTypography>
              <MyTypography variant="body1" component="p">
                {productDescription}
              </MyTypography>
              <MyTypography variant="h6" component="h6">
                Price - ₹{productPrice}
              </MyTypography>
              <div>
                <MyButtonComponent
                  onClick={() => {
                    setCurrent(data);
                  }}
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classes.update_btn}>
                  Update
                </MyButtonComponent>
                <MyButtonComponent
                  variant="contained"
                  color="secondary"
                  size="small"
                  className={classes.delete_btn}>
                  Delete
                </MyButtonComponent>
              </div>
            </div>
          </div>
        </MyPaper>
      </div>
    </div>
  );
};

export default VendorAllProducts;
