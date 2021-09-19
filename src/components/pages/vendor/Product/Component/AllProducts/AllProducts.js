import React from "react";
import { AllProductStyles } from "../../CSS/AllProductStyles";

import { MyButtonComponent } from "../../../../../Design/MyButtonComponent";
import { MyCardMedia } from "../../../../../Design/MyCardComponents";
import { useMutation } from "@apollo/client";
import { DELETE_PRODUCT } from "../../../../../../queries/Product/productMutations";
import { GET_PRODUCT_BY_VENDORID } from "../../../../../../queries/Product/productQueries";
import { MyGridContainer, MyGridItem } from "../../../../../Design/MyGrid";
import { MyDeleteIcon, MyEditButton } from "../../../../../Design/MyIcons";

/**
 *
 * @param {} role role is passed because it is used in vendor and admin page both and on
 *  admin page we dont need to update button
 * @returns
 */
const AllProducts = ({ data, setCurrent, role }) => {
  const classes = AllProductStyles();
  const {
    id,
    productName,
    productPrice,
    productDescription,
    productBrand,
    productCategory,
    productImageUrl,
  } = data;
  const [deleteProduct, { data: deletedProductData }] = useMutation(
    DELETE_PRODUCT,
    {
      onError: () => {},
    }
  );

  const onDeleteProduct = (e) => {
    deleteProduct({
      variables: {
        productID: id,
      },
      update: (cache, { data: { deleteProduct } }) => {
        const data = cache.readQuery({ query: GET_PRODUCT_BY_VENDORID });
        // need to newData var because we need to add a
        // new instance of all data , we can not use data var direclty
        let dataToUpdate = data.getProductsByVendorId;

        dataToUpdate.filter((singleProductData) => {
          return singleProductData.id !== deleteProduct.id;
        });

        cache.writeQuery({
          query: GET_PRODUCT_BY_VENDORID,
          data: { ...data, getProductsByVendorId: { dataToUpdate } },
        });
      },
    });
    e.preventDefault();
  };

  return (
    <div className="productListItemContainer">
      <div className={classes.ListItemPaper}>
        <MyGridContainer>
          {/* Image and ProductDetails grid item */}
          <MyGridItem xs={9}>
            <MyGridContainer>
              {/* Image  Grid item */}

              <MyGridItem xs={5}>
                <div className={classes.imgDiv}>
                  <MyCardMedia
                    height="120"
                    className={classes.MediaImg}
                    title="IMAGE"
                    image={productImageUrl}
                  />
                </div>
              </MyGridItem>

              {/* Product  Grid  item */}

              <MyGridItem xs={7}>
                <div className={classes.detailsDiv}>
                  <div className={classes.darkFont}>{productName}</div>

                  <div
                    className={`${classes.productDescription} ${classes.lightFont}`}>
                    Desc - {productDescription}
                  </div>

                  <div className={classes.lightFont}>
                    Brand - {productBrand}
                  </div>
                  <div className={classes.lightFont}>
                    Category - {productCategory.categoryName}
                  </div>

                  <div className={classes.darkFont}>₹ {productPrice}</div>
                </div>
              </MyGridItem>
            </MyGridContainer>
          </MyGridItem>

          {/* Update and delete button Grid Item */}

          <MyGridItem xs={3}>
            <div className={classes.buttonContainerParent}>
              <div className={classes.buttonContainerChild}>
                {role === "vendor" && (
                  <MyButtonComponent
                    onClick={() => {
                      setCurrent(data);
                      window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                    variant="outlined"
                    color="primary"
                    size="small"
                    className={classes.update_btn}>
                    <MyEditButton />
                  </MyButtonComponent>
                )}

                <MyButtonComponent
                  variant="outlined"
                  color="secondary"
                  size="small"
                  onClick={onDeleteProduct}
                  className={classes.delete_btn}>
                  <MyDeleteIcon />
                </MyButtonComponent>
              </div>
            </div>
          </MyGridItem>
        </MyGridContainer>
      </div>
    </div>
  );
};

export default AllProducts;
