import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import {
  MyCardContent,
  MyCardMedia,
} from "../../../../../Design/MyCardComponents";
import { MyMultiCarousel } from "../../../../../Design/MyMultiItemCarousel";
import { MyPaper } from "../../../../../Design/MyPaper";
import { MyTypography } from "../../../../../Design/MyTypography";
import { makeStyles } from "@material-ui/styles";
import {
  categoryList,
  subCategoryList,
} from "../../../../vendor/Product/Component/AddProduct/Category_SubCategoryData";
import { getImageByCategoryOrSubCategory } from "./ImageURLs";

const useStyles = makeStyles({
  itemContainerDiv: {
    padding: "10px",
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

  /** Giving Parameter depend on the propPassed
   *
   * ?category=""   or   ?subcategory=""
   */

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
                  image={
                    getImageByCategoryOrSubCategory(mappedData.name) ||
                    "https://source.unsplash.com/weekly?water"
                  }
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
