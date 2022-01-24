import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import Navigations from "../Components/Navigations";
import ProductCard from "../Components/ProductCard";

export default function ProductsOverview() {
  const [products, setProducts] = useState(<CircularProgress />);
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  useEffect(() => {
    console.log("caling");
    axios
      .get("/api/products")
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(({ data }) => {
        console.log(data);
        if (data.filePath) {
          setFileName(data.filePath);
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <Navigations>
      <Box sx={{ boxShadow: 3, padding: 2 }}>
        <form onSubmit={onSubmit} style={{ padding: "10px" }}>
          <Typography variant="h5">React file upload</Typography>
          <Button label="File">
            <input
              required
              type="file"
              onChange={(e) => {
                console.log(e.target.files);
                setFile(e.target.files[0]);
              }}
            />
          </Button>
          <br />
          <br />
          <Button type="submit" color="secondary" variant="contained">
            Upload
          </Button>
        </form>
        <hr />
        <img src={fileName} style={{ width: "100%", height: "80%" }} />
      </Box>
    </Navigations>
  );
}
