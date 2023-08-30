import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BathroomIcon from "@mui/icons-material/Bathroom";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { HOUSES } from "../../Utils/routes.constant";

import "./style.css";
export default function CardComponent({ house }) {
  const {
    id,
    image,
    title,
    description,
    category,
    city,
    price,
    bedroom,
    bathroom,
    space,
  } = house;

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };
  return (
    <Card elevation="0" className="card" sx={{ borderRadius: "10px" }}>
      <main class="page-content">
        <div
          class="card"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
          }}
        >
          <div class="content">
            <h2 class="title" style={{ color: "#fff" }}>
              {title.split("").splice(0, 15).join("")}{" "}
            </h2>
            <p class="copy"> {description.split("").splice(0, 140).join("")}</p>
            <button class="btn">
              <Link to={`${HOUSES}/${id}`} className="detailsLink">
                more details
              </Link>
            </button>
          </div>
        </div>
      </main>
    </Card>
  );
}
