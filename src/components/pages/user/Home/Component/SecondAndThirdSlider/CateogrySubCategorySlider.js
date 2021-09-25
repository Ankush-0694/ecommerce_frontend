import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import {
  MyCardContent,
  MyCardMedia,
} from "../../../../../design/MyCardComponents";
import { MyMultiCarousel } from "../../../../../design/MyMultiItemCarousel";
import { MyPaper } from "../../../../../design/MyPaper";
import { MyTypography } from "../../../../../design/MyTypography";
import { makeStyles } from "@material-ui/styles";
import {
  categoryList,
  subCategoryList,
} from "../../../../vendor/Product/Component/AddProduct/Category_SubCategoryData";

const useStyles = makeStyles({
  itemContainerDiv: {
    padding: "10px",
    // maxWidth: "350px",
  },

  cardDescription: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
  },
});

const SecondProductSlider = ({ dataProp }) => {
  const classes = useStyles();

  /**  which data to show will depend on the dataProp Passed */
  let dataToRender;

  {
    /* Category and SubCategory Array is Imported From Vendor Folder */
  }

  if (dataProp === "category") {
    dataToRender = categoryList;
  } else if (dataProp === "subcategory") {
    dataToRender = subCategoryList;
  }

  return (
    <MyMultiCarousel>
      {dataToRender.map((mappedData) => {
        return (
          <div className={classes.itemContainerDiv} key={mappedData.id}>
            <MyPaper elevation={20} style={{ marginBottom: "20px" }}>
              {/* Generating Link depend on the queryParamter Name and Categor or SubCategory Name  */}

              <Link
                to={`/ShopBy/?q=${mappedData.name}`}
                style={{ textDecoration: "none" }}>
                <MyCardMedia
                  height="150"
                  title="IMAGE"
                  image={mappedData.imgUrl}
                />

                <MyCardContent>
                  <div className={classes.cardDescription}>
                    <MyTypography
                      component="h3"
                      variant="h6"
                      color="textPrimary">
                      {mappedData.name}
                    </MyTypography>
                  </div>
                </MyCardContent>
              </Link>
            </MyPaper>
          </div>
        );
      })}
    </MyMultiCarousel>
  );
};

export default SecondProductSlider;
