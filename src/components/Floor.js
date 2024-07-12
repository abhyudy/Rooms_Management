// src/components/Floor.js
import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import BedIcon from "./BedIcon";

const Floor = ({ floorData }) => {
  if (!floorData) {
    return null;
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <Typography variant="h4" gutterBottom>
        {floorData.floor} Floor
      </Typography>
      <Grid container spacing={2}>
        {floorData.rooms.map((room) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={room.number}>
            <Paper
              style={{
                padding: "10px",
                backgroundColor:
                  room.status === "occupied"
                    ? "#f44336"
                    : room.status === "vacant"
                    ? "#4caf50"
                    : "#ff9800",
              }}
            >
              <Typography variant="h6">{room.number}</Typography>
              <Typography variant="body2">{room.status}</Typography>
              <BedIcon status={room.status} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Floor;
