import React, { useState } from "react";

import { Tabs, Typography, Tab, Avatar, Box } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from "@mui/icons-material/Add";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Favorite from "../favhouse";
import Houses from "../myhouses";
import UserInfo from "../userinfo";
import ProfileEdit from "../profileEdit";
import AddHouse from "../AddHouse";
import image from "../../Utils/images/me.jpg";

import "./style.css";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function SideBar() {
  const [value, setValue] = useState(0);
  const [username, setUsername] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="sideBarroot">
      <div className="sideBarContainer">
        <div className="userAvatar">
          <Avatar
            className="avatar"
            src={image}
            sx={{ width: 150, height: 150 }}
          />
          <Typography variant="h5" style={{ color: "#FFF", marginTop: "1em" }}>
            Mai Zourob
          </Typography>
        </div>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className="tabs"
        >
          <Tab
            label="Personal Info"
            icon={<PersonIcon />}
            className="tab"
            {...a11yProps(0)}
          />
          <Tab
            label="Edit Profile"
            icon={<AppRegistrationIcon />}
            className="tab"
            {...a11yProps(1)}
          />
          <Tab
            label="Houses"
            icon={<HomeIcon />}
            className="tab"
            {...a11yProps(2)}
          />
          <Tab
            label="Favorites"
            icon={<FavoriteIcon />}
            className="tab"
            {...a11yProps(3)}
          />
          <Tab
            label="Add Houses"
            icon={<AddIcon />}
            className="tab"
            {...a11yProps(4)}
          />
        </Tabs>
      </div>
      <TabPanel value={value} index={0} className="mainContent">
        <UserInfo />
      </TabPanel>
      <TabPanel value={value} index={1} className="mainContent">
        <ProfileEdit />
      </TabPanel>
      <TabPanel value={value} index={2} className="mainContent">
        <Houses />
      </TabPanel>
      <TabPanel value={value} index={3} className="mainContent">
        <Favorite />
      </TabPanel>
      <TabPanel value={value} index={4} className="mainContent">
        <AddHouse />
      </TabPanel>
    </div>
  );
}

export default SideBar;
