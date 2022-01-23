import React from "react";
import { Box } from "@mui/material";
import Navigations from "../Components/Navigations";
import ProductCard from "../Components/ProductCard";

export default function ProductsOverview() {
  return (
    <Navigations>
      <Box>
        <ProductCard />
      </Box>
    </Navigations>
  );
}
