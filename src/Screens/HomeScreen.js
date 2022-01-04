import Navigations from "../Components/Navigations";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
  Container,
} from "@mui/material";

const HomeScreen = (props) => {
  let initialState = (
    <Container maxWidth="lg" sx={{ textAlign: "center", width: "100%" }}>
      <CircularProgress color="primary" />
    </Container>
  );
  const [products, setProducts] = useState(initialState);
  useEffect(() => {
    axios
      .get("http://localhost/api/products", { crossDomain: true })
      .then(({ data }) => {
        if (data.success) {
          setTimeout(() => console.log("waiting"), 5000);
          setProducts(
            data.message.data.map((product) => {
              return (
                <Grid item md="3" xs="6">
                  <Card
                    sx={{ margin: "12px" }}
                    key={product.id}
                    variant="elevation"
                  >
                    <CardContent>
                      <Typography variant="h4" color="InfoText">
                        {product.productName}
                      </Typography>
                      Description: {product.ProductDescription} <br />
                      Price: {product.price} <br />
                      Available: {product.available}
                    </CardContent>
                  </Card>
                </Grid>
              );
            })
          );
        }
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <Navigations>
      <Grid container spacing="4">
        {products}
      </Grid>
    </Navigations>
  );
};

export default HomeScreen;
