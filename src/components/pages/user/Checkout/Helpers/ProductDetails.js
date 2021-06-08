import React from "react";
import { MyCardMedia } from "../../../../Design/MyCardComponents/CardMedia";
import { MyButtonComponent } from "../../../../Design/MyButtonComponent";
import { MyTypography } from "../../../../Design/MyTypography";
import { makeStyles } from "../../../../Design/MyUseStyles";
import { MyGridContainer, MyGridItem } from "../../../../Design/MyGrid";

const useStyles = makeStyles({
  productDiv: {
    //child selector
    "& > *": {
      margin: "10px 0",
    },
  },
  MediaImg: {
    width: "100%",
    minWidth: "130px",
  },
  inputCss: {
    width: "50px",
    margin: "10px",
    textAlign: "center",
  },
});

const ProductDetails = ({ productData, quantity, setQuantity }) => {
  const classes = useStyles();
  return (
    <div className={classes.productDiv}>
      <MyGridContainer
        justify="center"
        spacing={2}
        style={{ border: "1px solid black" }}>
        <MyGridItem xs={12} sm={6} md={4}>
          <MyCardMedia
            height="150"
            className={classes.MediaImg}
            style={{ borderRadius: "10px" }}
            title="IMAGE"
            image="https://source.unsplash.com/collection/190727/800x450"
          />
        </MyGridItem>
        <MyGridItem xs={10} sm={6} md={8}>
          <div style={{ textAlign: "center" }}>
            <MyTypography variant="h6" component="h2">
              Product Name : {productData.productName}
            </MyTypography>
            <MyTypography variant="body2" component="p">
              Description : {productData.productDescription}
            </MyTypography>
            <MyTypography variant="body1" component="p">
              Price : {productData.productPrice}
            </MyTypography>
          </div>
          <div
            className="set-quantity"
            style={{ margin: "10px 0", textAlign: "center" }}>
            <MyButtonComponent
              variant="contained"
              color="primary"
              disabled={quantity <= 1 && true}
              userFunction={() => {
                setQuantity(quantity - 1);
              }}>
              -
            </MyButtonComponent>
            {/* <MyButtonComponent variant="outlined" userstyle={{ padding: "0" }}> */}
            <input
              className={classes.inputCss}
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
            {/* </MyButtonComponent> */}

            <MyButtonComponent
              variant="contained"
              userFunction={() => {
                setQuantity(quantity + 1);
              }}
              color="primary">
              +
            </MyButtonComponent>
          </div>
        </MyGridItem>
      </MyGridContainer>
    </div>
  );
};
export default ProductDetails;
