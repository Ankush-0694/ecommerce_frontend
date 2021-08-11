import Beauty from "../../../../../layout/IMAGES/Beauty.jpeg";
import Electronics from "../../../../../layout/IMAGES/Electronics.jpeg";
import Appliances from "../../../../../layout/IMAGES/Appliances.jpeg";
import Clothes from "../../../../../layout/IMAGES/Clothes.jpeg";
import Furniture from "../../../../../layout/IMAGES/Furniture.jpeg";
import Sports from "../../../../../layout/IMAGES/Sports.jpeg";

const getImageByCategoryOrSubCategory = (keyword) => {
  if (keyword === "Beauty") return Beauty;
  if (keyword === "Electronics") return Electronics;
  if (keyword === "Appliances") return Appliances;
  if (keyword === "Clothes") return Clothes;
  if (keyword === "Furniture") return Furniture;
  if (keyword === "Sports") return Sports;

  return null;
};

export { getImageByCategoryOrSubCategory };
