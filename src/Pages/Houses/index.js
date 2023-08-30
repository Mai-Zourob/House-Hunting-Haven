import React, { useState, useEffect } from "react";

import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import SearchIcon from "@mui/icons-material/SearchSharp";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CardContainer from "../../Components/CardContainer";

import { locationFilter, categoryFilter } from "../../Utils/staticData";

import "./style.css";
import { Accordion } from "@mui/material";

function SearchPage() {
  const [houses, setHouses] = useState([]);
  const [type, setType] = useState();
  const [category, SetCategory] = useState();
  const [filteredHouses, setFilteredHouses] = useState([]);
  const [location, setLocation] = useState();
  const [bedrooms, setBedrooms] = useState(0);
  const [priceRange, setPriceRange] = useState();


  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleCategoryChange = (event) => {
    SetCategory(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleBedroomsChange = (event) => {
    setBedrooms(event.target.value);
  };

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/urfavmai/mockread-api/houses")
      .then((response) => response.json())
      .then((data) => {
        setHouses(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const filteredHouses = houses.filter(
      (house) =>
        !location ||
        house.city.toLowerCase() === location.toLowerCase() ||
        (bedrooms && house.bedroom === +bedrooms) ||
        (priceRange &&
          house.price >= priceRange[0] &&
          house.price <= priceRange[1]) ||
        (type &&
          house.category.toLowerCase().includes(type.toLowerCase().trim()))
    );
    setFilteredHouses(filteredHouses);
  };

  return (
    <Container>
      <div className="herosearchpage">
        <form className="searchhh" onSubmit={handleSearch}>
          <button className="serach-btn " style={{ cursor: "pointer" }}>
            <SearchIcon className="searchicon"></SearchIcon>Search
          </button>
          <input
            className="hero-searchInput"
            type="search"
            placeholder="Search for what you want!"
            onChange={handleTypeChange}
          />
        </form>
        <div className="filter">
          <FormControl className="dropdown">
            <TextField
              id="outlined-Bedroom-input"
              label="Bedroom"
              type="number"
              value={bedrooms}
              onChange={handleBedroomsChange}
              lang="en"
            />

            <FormControl className="dropdown" id="location">
              <InputLabel id="demo-simple-select-helper-label">
                location
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={location}
                label="Age"
                onChange={handleLocationChange}
              >
                {locationFilter.map((item) => (
                  <MenuItem value={item}>{item.toLocaleLowerCase()}</MenuItem>
                ))}
              </Select>
              <FormControl className="dropdown" id="category">
                <InputLabel id="demo-simple-select-helper-label">
                  category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={category}
                  label="Age"
                  onChange={handleCategoryChange}
                >
                  {categoryFilter.map((item) => (
                    <MenuItem value={item}>{item.toLocaleLowerCase()}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </FormControl>
          </FormControl>
          <div className="price">
            <h3>Price:</h3>
            <Slider
              name="price"
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={100}
              max={500}
              variant="outlined"
              value={priceRange}
              onChange={handlePriceRangeChange}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <Typography
          className="available-houses"
          variant="h5"
          component="h4"
          textAlign="center"
        >
          <span> {filteredHouses.length} </span>
          <span className="available-houses1"> Available Houses</span>
          <span>{` `}</span>
        </Typography>
        <CardContainer houses={filteredHouses} />
      </div>
    </Container>
  );
}

export default SearchPage;
