import { useQuery } from "@apollo/client";
import { makeStyles } from "@material-ui/styles";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { GET_ALL_PRODUCTS } from "../../../../../../queries/Product/productQueries";
import { MyButtonComponent } from "../../../../../Design/MyButtonComponent";
import {
  MyCardActions,
  MyCardContent,
  MyCardMedia,
} from "../../../../../Design/MyCardComponents";
import { MyMultiCarousel } from "../../../../../Design/MyMultiItemCarousel";
import { MyPaper } from "../../../../../Design/MyPaper";
import { MyTypography } from "../../../../../Design/MyTypography";
import ShowError from "../../../../../layout/ErrorComponent/ShowError";
import ShowLoading from "../../../../../layout/LoadingComponent/ShowLoading";

const useStyles = makeStyles({
  itemContainerDiv: {
    padding: "10px",
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    // marginBottom: theme.spacing(2),
  },
  cardDescription: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    // marginBottom: theme.spacing(2),
  },
});

const FirstProductSlider = () => {
  const classes = useStyles();
  const {
    error: getProductsError,
    loading: getProductsLoading,
    data: getProductsData,
  } = useQuery(GET_ALL_PRODUCTS);

  if (getProductsError) {
    return <ShowError>Error while Fetching Products</ShowError>;
  }
  if (getProductsLoading) {
    return <ShowLoading />;
  }

  // data to render
  const productData = getProductsData.getAllProducts;

  return (
    <MyMultiCarousel>
      {productData.map((mappedProduct) => {
        return (
          <div className={classes.itemContainerDiv} key={mappedProduct.id}>
            <MyPaper elevation={20} style={{ marginBottom: "20px" }}>
              <Link
                to={`/products/:${mappedProduct.id}`}
                style={{ textDecoration: "none" }}>
                <MyCardMedia
                  height="200"
                  // style={{ width: "100%", height: "100%" }}
                  title="IMAGE"
                  image="https://source.unsplash.com/collection/190727/1600x900"
                />
                <MyCardContent>
                  <div className={classes.cardDescription}>
                    <MyTypography
                      component="h3"
                      variant="h6"
                      color="textPrimary">
                      {mappedProduct.productName}
                    </MyTypography>
                  </div>
                  <div className={classes.cardPricing}>
                    <MyTypography
                      component="p"
                      variant="body2"
                      color="textPrimary">
                      Price - {mappedProduct.productPrice}$
                    </MyTypography>
                  </div>
                </MyCardContent>
              </Link>
              <div style={{ textAlign: "center" }}>
                <hr style={{ padding: 0, margin: 0 }}></hr>
                <MyCardActions style={{ justifyContent: "center" }}>
                  <MyButtonComponent
                    variant="contained"
                    size="medium"
                    color="primary"
                    // onClick={onClickAddCart}
                  >
                    ADD TO CART
                  </MyButtonComponent>
                  <MyButtonComponent
                    variant="contained"
                    size="medium"
                    color="primary">
                    BUY NOW
                  </MyButtonComponent>
                </MyCardActions>
              </div>
            </MyPaper>
          </div>
        );
      })}
    </MyMultiCarousel>
  );
};

export default FirstProductSlider;
