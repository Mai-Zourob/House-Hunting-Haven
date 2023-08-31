import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOn";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneRoundedIcon from "@mui/icons-material/LocalPhone";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GiteIcon from "@mui/icons-material/Gite";
import StairsIcon from "@mui/icons-material/Stairs";

import Button from "@mui/material/Button";

import { fakeImage } from "../../Utils/staticData";

import Loading from "../../Components/Loading";

import "./style.css";

function DetailsHouse() {
  const { id } = useParams();
  const [house, setHouse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchHouse() {
      try {
        const response = await fetch(
          `https://my-json-server.typicode.com/urfavmai/mockread-api/houses/${id}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const houseData = await response.json();
        setHouse(houseData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchHouse();
  }, [id]);

  const [isFavorite, setIsFavorite] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const addToFavorite = async (id) => {
    const response = await fetch(
      `https://my-json-server.typicode.com/urfavmai/mockread-api/houses/${id}`
    );
    const item = await response.json();
    fetch(
      "https://my-json-server.typicode.com/urfavmai/mockread-api/favorites",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    )
      .then((response) => {
        if (response.ok) {
          setIsFavorite(true);
          setOpenSnackbar(true);
        } else {
        }
      })
      .catch((error) => {});
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="lg" className="root">
      {loading ? (
        <Loading />
      ) : (
        <Grid container>
          <Grid xs="12" sm="12" md="12" lg="12" className="imgSection">
            <div className="video">
              <iframe
                width="1200"
                height="500"
                src="https://www.youtube.com/embed/lRNyQBLPJHE?start=21"
                title="YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="ready-to-sell">_______Ready to Sell!</div>
          </Grid>

          <Grid xs="12" sm="12" md="12" lg="8">
            <Typography variant="h4" className="title">
              {house.title}
            </Typography>
            <Typography className="type">
              House Type : {house.category}
            </Typography>
            <Typography className="descDetails">{house.description}</Typography>
            <div className="room">
              <div className="details1">
                <LocalHotelIcon className="icon"  />
                <Typography variant="p" className="num">
                  {house.bedroom}bedroom
                </Typography>
              </div>
              <div className="details1">
                <BathtubIcon className="icon"  />
                <Typography variant="p" className="num">
                  {house.bathroom}bathroom
                </Typography>
              </div>
            </div>
            <div className="details2">
              <div>
                <GiteIcon className="icon" />
                <Typography variant="p" className="num1">
                  {house.space}
                </Typography>
              </div>
              <div>
                <StairsIcon className="icon" />
                <Typography variant="p" className="num1">
                  2 Floor
                </Typography>
              </div>
            </div>
            <hr></hr>
          </Grid>
          <Grid xs="12" sm="12" md="12" lg="4">
            <div className="loaction">
              <LocationOnRoundedIcon />
              <Typography variant="h6" className="city">
                {house.city}
              </Typography>
            </div>
            <Typography variant="h6" className="priceDetails">
              <span>${house.price}/ week</span>
            </Typography>
            <div className="name">
              <Typography></Typography>
              <PersonIcon className="icon2" />
              <Typography>Mai Ayman Zourob</Typography>
            </div>
            <div className="name">
              <EmailIcon className="icon2" />
              <Typography>maaizourob@gmail.com</Typography>
            </div>
            <div className="name">
              <PhoneRoundedIcon className="icon2" />
              <Typography>+972597200522</Typography>
            </div>

            <div className="descBtn">
              <Button
                className="btn"
                sx={{
                  marginRight: 2,
                  marginTop: 7,
                  color: "#fff",
                  bgcolor: "#d90000",
                  fontWeight: "500",
                  "&:hover": {
                    backgroundColor: "#d90000",
                    color: "white",
                  },
                }}
              >
                {isFavorite ? (
                  <FavoriteIcon style={{ color: "red" }} />
                ) : (
                  <FavoriteIcon
                    style={{ color: "white" }}
                    className="favorite"
                    onClick={() => addToFavorite(id)}
                  />
                )}{" "}
                add to Favorite
              </Button>
            </div>
          </Grid>
        </Grid>
      )}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Added to favorites successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default DetailsHouse;
