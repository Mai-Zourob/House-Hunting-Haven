import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import FormControl from "@mui/material/FormControl";
import { locationFilter, categoryFilter } from "../../Utils/staticData";

import "./style.css";
import { Snackbar } from "@mui/material";

function AddHouse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [city, setLocation] = useState();
  const [category, setCategory] = useState("");
  const [bedroom, setRooms] = useState();
  const [bathroom, setBathRooms] = useState();
  const [Space, setSpace] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleRooms = (event) => {
    setRooms(event.target.value);
  };

  const handleSpace = (event) => {
    setSpace(event.target.value);
  };
  const handleBathrooms = (event) => {
    setBathRooms(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleImage = (event) => {
    setImage(event.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const userDate = {
        id: "2",
        title,
        description,
        city,
        category,
        bedroom,
        bathroom,
        price,
        image,
      };
      useEffect(() => {
        fetch("https://my-json-server.typicode.com/urfavmai/mockread-api/houses", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDate[0]),
        })
          .then((response) => response.json())
          .then((data) => {
            setOpen(true);
          })
          .catch((error) => {
            if (
              error.response &&
              error.response.data &&
              error.response.data.message
            ) {
              setError(error.response.data.message);
            } else {
              setError("An unknown error occurred.");
            }
          });
      }, []);
    } catch (err) {}
  };

  return (
    <TableContainer component={Paper} style={{ height: "680px" }}>
      <Typography
        variant="h5"
        textAlign="center"
        paddingTop="0.5em"
        paddingBottom="0.5em"
        color="#0E6BA8"
        fontWeight={800}
      >
        Add House
        <Typography>_____________________</Typography>
      </Typography>
      <Table>
        <TableBody>
          <TableRow align="center">
            <FormControl defaultValue="" className="formlogin" required>
              <div className="first3">
                <div className="photo">
                  {`Drop or choose From File  `}
                  <input
                    type="file"
                    variant="outlined"
                    label="Image"
                    name="image"
                    required
                    value={image}
                    onChange={handleImage}
                  />
                </div>
              </div>
              <br />
              <TextField
                id="outlined-basic"
                label="Title"
                placeholder="Enter the Title"
                variant="outlined"
                required
                onChange={handleTitle}
                value={title}
              />
              <br />

              <TextField
                label="Description"
                multiline
                color="secondary"
                variant="outlined"
                placeholder="Type a description of the house ..."
                margin="none"
                required
                onChange={handleDescription}
                value={description}
                id="outlined-textarea"
                maxRows={4}
              />

              <br />

              <div className="divnum">
                <TextField
                  className="category"
                  required
                  placeholder="Choose the category"
                  id="filled-select-category"
                  select
                  label="category"
                  variant="outlined"
                  name="category"
                  value={category}
                  onChange={handleCategory}
                >
                  {categoryFilter.map((item) => (
                    <MenuItem value={item}>{item.toLocaleLowerCase()}</MenuItem>
                  ))}
                </TextField>
                <TextField
                  placeholder="Choose the location"
                  className="location"
                  id="filled-select-location"
                  select
                  required
                  label="location"
                  variant="outlined"
                  name="location"
                  value={city}
                  onChange={handleLocation}
                >
                  {locationFilter.map((item) => (
                    <MenuItem value={item}>{item.toLocaleLowerCase()}</MenuItem>
                  ))}
                </TextField>
              </div>

              <br />

              <div className="divnum">
                <TextField
                  variant="outlined"
                  placeholder="Enter the Room"
                  type="number"
                  label="Bedrooms"
                  name="rooms"
                  required
                  onChange={handleRooms}
                  value={bedroom}
                />
                <TextField
                  variant="outlined"
                  type="number"
                  placeholder="Enter the Bathrooms"
                  label="Bathrooms"
                  name="bathrooms"
                  required
                  onChange={handleBathrooms}
                  value={bathroom}
                />
              </div>
              <br />
              <div className="divnum">
                <TextField
                  variant="outlined"
                  type="text"
                  placeholder="Enter the Space"
                  label="Space"
                  name="Space"
                  required
                  onChange={handleSpace}
                  value={Space}
                />
                <TextField
                  variant="outlined"
                  type="text"
                  placeholder="Enter the Price"
                  label="Price ₪"
                  name="price"
                  required
                  onChange={handlePrice}
                  value={price}
                />
              </div>
              <Button
                onClick={() => setOpen(true)}
                className="house"
                sx={{
                  marginLeft: "6.8em",
                  width: "190px",
                  marginTop: "2em",
                  marginBottom: "2.5em",
                  color: "white",
                  bgcolor: "#d90000",
                  fontSize: "20px",
                  fontWeight: "300",
                  "&:hover": {
                    backgroundColor: "#d90000",
                    color: "white",
                  },
                }}
              >
                Add
              </Button>
              <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle>Confirm Updating</DialogTitle>
              <DialogContent>
                {" "}
                Are you sure you want to update this personal?
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={() => setOpen(false)}
                  className="btn-Dialog-Cancel"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    handleSubmit();
                    setOpen(false);
                  }}
                  className="btn-Dialog-Updat"
                >
                  Update
                </Button>
              </DialogActions>
            </Dialog>
            </FormControl>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AddHouse;
