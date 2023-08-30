import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import image from "../../Utils/images/notfound.svg";
import { Link } from "react-router-dom";
import { HOME_PAGE } from "../../Utils/routes.constant";
import styles from "./style.css";

function NotFound() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <Container maxWidth="lg">
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <CardMedia className="imgnotfound" component="img" image={image} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <article className="divfound">
            <Typography>
              <Button
                sx={{
                  bgcolor: "#fff",
                  marginTop: "1em",
                  color: "#d90000",
                  fontWeight: "500",
                  border: "solid 0.25em #d90000",
                  "&:hover": {
                    bgcolor: "#d90000",
                    color: "white",
                  },
                }}
                variant="outlined"
                onClick={handleClick}
              >
                BACK TO HOME
              </Button>
            </Typography>
          </article>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NotFound;
