// components/RoomCard.js
import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import BedIcon from "./BedIcon";

const RoomCard = ({ room }) => {
  const statusColor = {
    occupied: "#FF4B4B", // Red
    vacant: "#379017", // Green
    notice: "#D89A3D", // Yellow
  };

  return (
    <Card sx={{ maxWidth: 150, margin: "5px" }}>
      <CardContent>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Room {room.number}
        </Typography>
        <Box
          sx={{
            backgroundColor: statusColor[room.status],
            height: 20,
            width: "100%",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BedIcon status={room.status} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
