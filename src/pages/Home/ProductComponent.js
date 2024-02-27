import {
  Card,
  Box,
  Stack,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import ProductCard from "../../components/common/ProductCard";
const HomePageServiceComponent = () => {
  return (
    // <div
    //   className="body"
    //   style={{
    //     justifyContent: "center",
    //     marginLeft: "auto",
    //     height: "10px ",
    //     minHeight: "10px",
    //     marginTop: "8px",
    //     marginRight: "auto",
    //     width: "84%",
    //     display: "block",
    //     color: "#FFFFFF",
    //   }}
    // >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color:"#212529" }}>
        {/* <div className="service" style={{ display: "flex", gap: "16px" }}> */}
          <ProductCard
            imageSrc="/productPhoto.png"
            title="Adidas Shoes"
            id={123}
            rating={4.5}
            salesDiscount={50}
            price={120}
            quantity={5}
            available={true}
          />

          <ProductCard
            imageSrc="/productPhoto.png"
            title="Adidas Shoes"
            id={123}
            rating={4.5}
            salesDiscount={50}
            price={120}
            quantity={5}
            available={true}
          />

          <ProductCard          
            imageSrc='/productPhoto.png'
            title="Adidas Shoes"
            id={123}
            rating={4.5}
            salesDiscount={50}
            price={120}
            quantity={5}
            available={true}
          />
          <ProductCard
            imageSrc="./productPhoto.png"
            title="Adidas Shoes"
            id={123}
            rating={4.5}
            salesDiscount={10}
            price={120}
            quantity={5}
            available={true}
          />
          {/* <ProductCard
            imageSrc="./productPhoto.png"
            title="Adidas Shoes"
            id={123}
            rating={4.5}
            salesDiscount={50}
            price={120}
            quantity={5}
            available={true}
          /> */}
        </div>

    
  );
};

export default HomePageServiceComponent;
