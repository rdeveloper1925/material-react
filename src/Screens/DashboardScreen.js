import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import Navigations from "../Components/Navigations";
import StorageIcon from "@mui/icons-material/Storage";

export default function DashboardScreen() {
  return (
    <Navigations>
      <Typography variant="h5">Dashboard Screen</Typography>
      <Grid container spacing={2}>
        <Grid item sx={4}>
          <Card raised variant="outlined" sx={{ p: 1, boxShadow: 2 }}>
            <StorageIcon color="secondary" />
            <Typography
              variant="h6"
              style={{ fontWeight: "bold" }}
              sx={{ color: "text.primary" }}
            >
              Server Status
            </Typography>
            <Typography variant="p">Online</Typography>
          </Card>
        </Grid>
      </Grid>
    </Navigations>
  );
}
