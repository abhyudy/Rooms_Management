// src/components/BedIcon.js
import React from "react";
import { Box } from "@mui/material";
import redIcon from "../images/red.jpg";
import greenIcon from "../images/green.jpg";
import yellowIcon from "../images/yellow.jpg";

const BedIcon = ({ status }) => {
  let bedIcon;

  switch (status) {
    case "occupied":
      bedIcon = redIcon;
      break;
    case "vacant":
      bedIcon = greenIcon;
      break;
    case "notice":
      bedIcon = yellowIcon;
      break;
    default:
      bedIcon = redIcon;
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <img
        src={bedIcon.src}
        alt="Bed Icon"
        style={{ width: 24, height: 24, marginRight: 8 }}
      />
    </Box>
  );
};

export default BedIcon;
