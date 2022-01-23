import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import Navigations from "../Components/Navigations";
export default function ServerScreen() {
  const [data, setdata] = useState(<CircularProgress color="secondary" />);
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setdata(data.message));
  }, []);
  return (
    <Navigations>
      <Box>
        <Typography variant="p">Hello welcome to server</Typography>
        <br />
        {data}
      </Box>
    </Navigations>
  );
}
