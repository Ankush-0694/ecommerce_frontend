import React from "react";
import { MyCardMedia } from "../../../../Design/MyCardComponents/CardMedia";
import { MyButtonComponent } from "../../../../Design/MyButtonComponent";
import { MyButtonGroup } from "../../../../Design/MyButtonGroup";
import { MyTypography } from "../../../../Design/MyTypography";
import { makeStyles } from "../../../../Design/MyUseStyles";

const useStyles = makeStyles({
  productDiv: {
    //child selector
    "& > *": {
      margin: "10px 0",
    },
  },
  cover: {
    width: "151",
  },
});

const ProductDetails = ({ productData, quantity, setQuantity }) => {
  const classes = useStyles();
  return (
    <div className={classes.productDiv} style={{ maxWidth: " 500px" }}>
      <MyCardMedia
        height="100"
        style={{ width: "200px", borderRadius: "10px" }}
        title="IMAGE"
        image="https://source.unsplash.com/collection/190727/800x450"
      />
      <MyTypography variant="h6" component="h2">
        Product Name : {productData.productName}
      </MyTypography>
      <MyTypography variant="body2" component="p">
        Description : {productData.productDescription}
      </MyTypography>
      <MyTypography variant="body1" component="p">
        Price : {productData.productPrice}
      </MyTypography>
      <div>
        <MyButtonGroup
          color="primary"
          aria-label="outlined primary button group"
          variant="contained">
          <MyButtonComponent
            disabled={quantity <= 1 && true}
            userFunction={() => {
              setQuantity(quantity - 1);
            }}>
            -
          </MyButtonComponent>
          <MyButtonComponent variant="outlined" disabled={true}>
            <div style={{ color: "black" }}>{quantity}</div>
          </MyButtonComponent>

          <MyButtonComponent
            userFunction={() => {
              setQuantity(quantity + 1);
            }}>
            +
          </MyButtonComponent>
        </MyButtonGroup>
      </div>
    </div>
  );
};
export default ProductDetails;
