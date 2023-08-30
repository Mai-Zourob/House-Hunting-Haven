import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import image from "../../Utils/images/logo.png";
import { Box } from "@mui/material";

function Footer() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about-us");
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleTwitterClick = () => {
    const twitterLink = "https://twitter.com/home";
    window.open(twitterLink, "_blank");
  };

  const handleEmailClick = () => {
    const emailLink = "https://mail.google.com/mail/u/0/#inbox";
    window.open(emailLink, "_blank");
  };

  const handleLinkedClick = () => {
    const Link = "https://www.linkedin.com/messaging/thread/new/";
    window.open(Link, "_blank");
  };

  return (
    <Box
      component="footer"
      sx={{ p: 4, bgcolor: "#0E6BA8", marginTop: " 39px" , cursor:"pointer" , fontSize:"2em"}}
    >
      <Container maxWidth="lg">
        <Grid container sx={{ display: "flex"}}>
          <Grid item xs={6} sm={2}>
            <Typography variant="h6" sx={{color: "#fff"}}  gutterBottom>
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
        <Grid container sx={{ display: "flex",marginTop:"1em"}}>
          <Grid item xs={6} sm={4}>
            <img src={image} width="120em"/>
          </Grid>
          <Grid item xs={6} sm={4}>
          <Link  sx={{color: "white"}} onClick={handleTwitterClick}>
        <TwitterIcon />
      </Link>
      <Link
        sx={{ pl: 1, pr: 1,color: "white" }}
        onClick={handleEmailClick}
      >
        <EmailIcon />
      </Link>
      <Link  sx={{color: "white"}} onClick={handleLinkedClick} > 
        <LinkedInIcon />
      </Link>
          </Grid>
          <Grid item xs={6} sm={4}>
          <Typography variant="h6" sx={{color: "#fff"}}  gutterBottom>
     © 2023 Haven. All rights reserved
      </Typography>
          </Grid>

        </Grid>
     
      </Container>
    </Box>
  );
}

export default Footer;

