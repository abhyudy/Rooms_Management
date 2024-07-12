import { useState } from "react";
import Floor from "./components/Floor";
import {
  Grid,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Box,
} from "@mui/material";

const roomsData = [
  {
    floor: "0th",
    rooms: [
      { number: "G001", status: "occupied" },
      { number: "G002", status: "occupied" },
      { number: "G003", status: "vacant" },
      { number: "G004", status: "vacant" },
      { number: "G005", status: "notice" },
      { number: "G006", status: "occupied" },
      { number: "G007", status: "occupied" },
      { number: "G008", status: "vacant" },
      { number: "G009", status: "vacant" },
      { number: "G010", status: "notice" },
      { number: "G012", status: "occupied" },
      { number: "G014", status: "occupied" },
      { number: "G015", status: "vacant" },
      { number: "G016", status: "vacant" },
    ],
  },
  {
    floor: "1st",
    rooms: [
      { number: "101", status: "vacant" },
      { number: "102", status: "occupied" },
      { number: "103", status: "notice" },
      { number: "104", status: "occupied" },
      { number: "105", status: "occupied" },
      { number: "106", status: "vacant" },
      { number: "107", status: "occupied" },
      { number: "108", status: "occupied" },
      { number: "109", status: "vacant" },
      { number: "110", status: "vacant" },
      { number: "111", status: "occupied" },
      { number: "112", status: "occupied" },
      { number: "114", status: "vacant" },
      { number: "116", status: "vacant" },
    ],
  },
];

function RoomManagement() {
  const [selectedFloor, setSelectedFloor] = useState("0th");
  const [searchInput, setSearchInput] = useState("");

  const handleFloorChange = (event) => {
    setSelectedFloor(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredRooms = roomsData
    .find((floor) => floor.floor === selectedFloor)
    ?.rooms.filter((room) =>
      room.number.toLowerCase().includes(searchInput.toLowerCase())
    );

  return (
    <div style={{ padding: "20px" }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        style={{ fontWeight: "bold" }}
      >
        Rooms Management
      </Typography>

      <Grid container justifyContent="space-between" alignItems="center" mb={2}>
        <Grid item>
          <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
            Total Beds: <span style={{ color: "black" }}>150</span>
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
            Available Beds: <span style={{ color: "#379017" }}>15</span>
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
            Vacating in 60 days: <span style={{ color: "#D89A3D" }}>04</span>
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
            Total Occupied Beds: <span style={{ color: "#FF4B4B" }}>135</span>
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item xs={12} md={8} lg={6}>
          <TextField
            id="search-room"
            label="Search Room No."
            variant="outlined"
            fullWidth
            margin="normal"
            value={searchInput}
            onChange={handleSearchChange}
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item xs={12} md={8} lg={6}>
          <InputLabel id="floor-select-label">Floor</InputLabel>
          <Select
            labelId="floor-select-label"
            id="floor-select"
            value={selectedFloor}
            onChange={handleFloorChange}
            fullWidth
          >
            {roomsData.map((floor) => (
              <MenuItem key={floor.floor} value={floor.floor}>
                {floor.floor} Floor
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>

      <Box mt={3}>
        <Floor floorData={{ floor: selectedFloor, rooms: filteredRooms }} />
      </Box>
    </div>
  );
}

export default RoomManagement;
