import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import image from "../../Utils/images/logo.png";
import { Box } from "@mui/material";

function Footer() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (
    <Box
      component="footer"
      sx={{
        p: 4,
        bgcolor: "#0E6BA8",
        marginTop: " 39px",
        cursor: "pointer",
        fontSize: "2em",
      }}
    >
      <Container maxWidth="lg">
        <Grid container sx={{ display: "flex" }}>
          <Grid item xs={6} sm={2}>
            <Typography variant="h6" sx={{ color: "#fff" }} gutterBottom>
              About us
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography variant="h6" sx={{ color: "#fff" }} gutterBottom>
              Houses
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography variant="h6" sx={{ color: "#fff" }} gutterBottom>
              Profile
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography variant="h6" sx={{ color: "#fff" }} gutterBottom>
              contact us
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography variant="h6" sx={{ color: "#fff" }} gutterBottom>
              Privacy policy
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography variant="h6" sx={{ color: "#fff" }} gutterBottom>
              Terms of Use
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ display: "flex" }}>
          <Grid item xs={6} sm={8}>
            <img src={image} width="120em" />
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography
              variant="h6"
              sx={{ color: "#fff", marginTop: "1.5em" }}
              gutterBottom
            >
              © 2023 Haven. All rights reserved
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
