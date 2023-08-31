import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import Form from "../../Components/Form";
import CardContainer from "../../Components/CardContainer";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneRoundedIcon from "@mui/icons-material/LocalPhone";
import CardTwo from "../../Components/Cardtwo";
import logo from "../../Utils/images/logonobackground.png.png"
import "./style.css";
function Landing() {
  const [houses, setHouses] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const navigate = useNavigate();

  const handleinput = () => {
    navigate("/houses");
  };
  useEffect(() => {
    // Fetch houses data from the API
    fetch("https://my-json-server.typicode.com/urfavmai/mockread-api/houses")
      .then((response) => response.json())
      .then((data) => {
        setHouses(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const priceThreshold = 300;

    // Filter best seller houses based on criteria
    const filteredHouses = houses.filter(
      (house) => house.price < priceThreshold
    );
    filteredHouses.length = 3;
    houses.length = 6;
    setBestSellers(filteredHouses);
  }, [houses]);

  return (
    <>
      <Box className="header" sx={{ width: "100%" }}>
        <div className="divhero">
          <Typography variant="h4" className="herotext">
            Discover Your Dream Home with Ease ,
          </Typography>
          <Typography variant="h4" className="herotext" paddingBottom={"0.5em"}>
            Start Your House Hunting Journey Today!
          </Typography>
          <TextField
            onClick={handleinput}
            className="herosearch"
            variant="outlined"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </Box>

      <div class="about-section">
        <div class="inner-container">
          <h2>About Us</h2>
          <h3>Welcome to Haven</h3>
          <p class="text">
            Tired of endlessly browsing for the perfect house? Look no further!
            Find My Haven is here to help you discover your dream house, leaving
            you with that cozy feeling of finally being home.
          </p>
        </div>
      </div>
      <Container maxWidth="lg">
        <div className="housesSection">
          <Typography variant="h4" className="sectionTitle">
            Our Best Seller Houses
          </Typography>
          <CardTwo houses={bestSellers} className="card" />
        </div>

        <div className="housesSection">
          <Typography variant="h4" className="sectionTitle">
            Recently Added
          </Typography>
          <CardContainer houses={houses} />
        </div>
      </Container>
      <div>
        <Form />
      </div>
      {/* <div className="buttom">
        <img className="logo1" src={logo} /><br></br>
        <b className="join-today">Join Today</b>
          <b className="para">
            Begin your house hunting adventure with Find My Haven and<br></br>  unlock a
            world of exquisite properties. Quit wasting time and <br></br>let’s find your
            forever home!
          </b>
        </div> */}

      <section class="contact" id="contact " style={{ marginTop: "3.5em" }}>
        <div class="contact-content section-content">
          <p class="section-subtitle">Contact</p>

          <h2 class="section-title">
            Have You Any inquiry? Please Drop a Message
          </h2>

          <p class="section-text">
            Get in touch and let us know how can help you. Fill out the form and
            we’ll be in touch as soon as possible.
          </p>

          <ul class="contact-list">
            <li class="contact-list-item">
              <div class="contact-item-icon">
                <PhoneRoundedIcon className="icon2" />
              </div>

              <div class="wrapper">
                <h3 class="h4 contact-item-title">Phone:</h3>

                <a href="tel:01234567789" class="contact-info">
                  (+972) 597200522
                </a>
              </div>
            </li>

            <li class="contact-list-item">
              <div class="contact-item-icon">
                <EmailIcon className="icon2" />
              </div>

              <div class="wrapper">
                <h3 class="h4 contact-item-title">Email:</h3>

                <a href="mailto:info@jack.com" class="contact-info">
                  maaizourob@gmail.com
                </a>
              </div>
            </li>
          </ul>

          <ul class="contac-social-list">
            <li >
              <a
                href="//github.com/urfavmai"
                class="contact-social-link"
                target="_blank"
              >
                <GitHubIcon />
                <div class="tooltip">GitHub</div>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/_urfavmaai_/"
                class="contact-social-link"
                target="_blank"
              >
                <InstagramIcon />
                <div class="tooltip">Instagram</div>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mai-zourob-647087272/"
                class="contact-social-link"
                target="_blank"
              >
                <LinkedInIcon />
                <div class="tooltip">LinkedIn</div>
              </a>
            </li>
          </ul>
        </div>
        <form action="" class="contact-form">
          <div class="form-wrapper">
            <label for="name" class="form-label">
              Name
            </label>

            <div class="input-wrapper">
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="e.g John Doe"
                class="input-field"
              />

              <PersonIcon className="noic"/>
            </div>
          </div>

          <div class="form-wrapper">
            <label for="email" class="form-label">
              Email
            </label>

            <div class="input-wrapper">
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="e.g johndoe@mail.com"
                class="input-field"
              />

              <EmailIcon className="noic" />
            </div>
          </div>

          <div class="form-wrapper">
            <label for="phone" class="form-label">
              Phone
            </label>

            <div class="input-wrapper">
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                placeholder="Phone Number"
                class="input-field"
              />
              <PhoneRoundedIcon className="noic" />
            </div>
          </div>

          <div class="form-wrapper">
            <label for="message" class="form-label">
              Message
            </label>

            <div class="input-wrapper">
              <textarea
                name="message"
                id="message"
                required
                placeholder="Write message..."
                class="input-field"
              ></textarea>

              <MessageIcon  className="noic"/>
            </div>
          </div>

          <button type="submit" class="btn btn-primary">
            Send
          </button>
        </form>
      </section>
    </>
  );
}

export default Landing;
