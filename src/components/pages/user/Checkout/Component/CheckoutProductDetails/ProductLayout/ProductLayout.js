import React from "react";
import { MyButtonComponent } from "../../../../../../design/MyButtonComponent";
import { MyCardMedia } from "../../../../../../design/MyCardComponents";
import { MyPaper } from "../../../../../../design/MyPaper";
import { MyTypography } from "../../../../../../design/MyTypography";
import { ProductLayoutStyles } from "../../../CSS/ProductLayoutStyles";

/**
 *
 * This component is used in
 * singleProductDetails and MultipleProductDetails component for layout
 */
const ProductLayout = ({ productData, quantity, setQuantity }) => {
  const classes = ProductLayoutStyles();
  const { productDescription, productName, productPrice, productImageUrl } =
    productData;

  return (
    <MyPaper elevation={1} className={classes.productDetailsPaper}>
      <div>
        <MyCardMedia
          height="130"
          style={{
            borderRadius: "10px",
            minWidth: "100px",
            width: "130px",
          }}
          title="IMAGE"
          image={productImageUrl}
        />
      </div>

      <div className={classes.checkoutProductDetails}>
        <div>
          <div style={{ fontWeight: "550", fontSize: "1.2rem" }}>
            {productName}
          </div>

          <div style={{ fontWeight: "300", marginBottom: "4px" }}>
            {productDescription}
          </div>

          <div style={{ fontWeight: "300" }}>
            Single Item Price : {productPrice}
          </div>
          <MyTypography variant="body1" component="p">
            Total Price : {productPrice * quantity}
          </MyTypography>
        </div>

        {/* Button and quantity */}

        <div className={classes.quantityDiv}>
          <MyButtonComponent
            variant="contained"
            color="primary"
            className={classes.quantityButton}
            disabled={quantity <= 1 && true}
            onClick={() => {
              setQuantity(quantity - 1);
            }}>
            -
          </MyButtonComponent>
          <input
            className={classes.quantityInput}
            value={quantity}
            onChange={(e) => {
              // setTotalQuantity(e.target.value);
            }}
          />

          <MyButtonComponent
            variant="contained"
            className={classes.quantityButton}
            onClick={() => {
              setQuantity(quantity + 1);
            }}
            color="primary">
            +
          </MyButtonComponent>
        </div>
      </div>
    </MyPaper>
  );
};

export default ProductLayout;
