import React from "react";
import { AllProductStyles } from "../../CSS/AllProductStyles";
import { MyTypography } from "../../../../../Design/MyTypography";
import { MyPaper } from "../../../../../Design/MyPaper";
import { MyButtonComponent } from "../../../../../Design/MyButtonComponent";
import { MyCardMedia } from "../../../../../Design/MyCardComponents";
import { useMutation } from "@apollo/client";
import { DELETE_PRODUCT } from "../../../../../../queries/Product/productMutations";
import { GET_PRODUCT_BY_VENDORID } from "../../../../../../queries/Product/productQueries";
import { MyGridContainer, MyGridItem } from "../../../../../Design/MyGrid";

const AllProducts = ({ data, setCurrent }) => {
  const classes = AllProductStyles();
  const {
    id,
    productName,
    productPrice,
    productDescription,
    productBrand,
    productCategory,
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
      <MyPaper className={classes.ListItemPaper}>
        <MyGridContainer>
          {/* Image and ProductDetails grid item */}
          <MyGridItem xs={8}>
            <MyGridContainer>
              {/* Image  Grid item */}

              <MyGridItem xs={5}>
                <div className={classes.imgDiv}>
                  <MyCardMedia
                    height="120"
                    className={classes.MediaImg}
                    style={{ minWidth: "100px" }}
                    title="IMAGE"
                    image={`https://source.unsplash.com/collection/${productPrice}/800x450`}
                  />
                </div>
              </MyGridItem>

              {/* Product  Grid  item */}

              <MyGridItem xs={7}>
                <div>
                  <MyTypography variant="h6" component="h6">
                    {productName}
                  </MyTypography>
                  <MyTypography variant="body1" component="p">
                    Desc - {productDescription}
                  </MyTypography>
                  <MyTypography variant="body1" component="p">
                    Brand - {productBrand}
                  </MyTypography>
                  <MyTypography variant="body1" component="p">
                    Category - {productCategory.categoryName}
                  </MyTypography>

                  <MyTypography variant="h6" component="h6">
                    Price - ₹{productPrice}
                  </MyTypography>
                </div>
              </MyGridItem>
            </MyGridContainer>
          </MyGridItem>

          {/* Update and delete button Grid Item */}

          <MyGridItem xs={4}>
            <div className={classes.buttonContainerParent}>
              <div className={classes.buttonContainerChild}>
                <MyButtonComponent
                  onClick={() => {
                    setCurrent(data);
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
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
                  onClick={onDeleteProduct}
                  className={classes.delete_btn}>
                  Delete
                </MyButtonComponent>
              </div>
            </div>
          </MyGridItem>
        </MyGridContainer>
      </MyPaper>
    </div>
  );
};

export default AllProducts;
