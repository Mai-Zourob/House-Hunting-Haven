import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "./style.css";
function Favorite() {


  const [houses, setHouses] = useState([]);
  const [errorMsg, setError] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [open, setOpen] = useState(false);
  const [openalert, setOpenalert] = useState(false);
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenalert(false);
  };

  const deleteHouse = async (houseId) => {
    try {
      const response = await fetch(
        `https://my-json-server.typicode.com/SajaRa20/newapi/houses/${houseId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setOpenalert(true);
      }
      const updatedHouses = houses.filter((house) => house.id !== houseId);
      setHouses(updatedHouses);
    } catch (error) {
      console.error("Error deleting house:", error);
      setError("Failed to delete the house");
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/SajaRa20/newapi/houses"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setHouses(data);
      } catch (err) {
        setError(err.message);
      }
    })();
  }, [refresh]);

  return (
    <TableContainer component={Paper}>
      <Typography
        variant="h5"
        textAlign="center"
        paddingTop="0.5em"
        paddingBottom="0.5em"
        color="#0E6BA8"
        fontWeight={800}
      >
        Favorite Houses
        <Typography>________________________________</Typography>
      </Typography>
      <Table>
        <TableBody>
          {houses.length ? (
            houses.slice(4, 7).map((house) => (
              <>
                <TableRow style={{ border: "solid 2px #0E6BA8" }}>
                  <TableCell>
                    <img
                      className="img"
                      src={house.image}
                      alt="house "
                      style={{ width: "150px", height: "150px" }}
                    />
                  </TableCell>
                  <TableCell
                    className="tablee"
                    style={{
                      color: "#7D7D7D",
                      fontSize: "20px",
                    }}
                  >
                    {house.title} <br />
                    <br />
                    {house.price} $ / week <br />
                    {house.city} <br />
                    <LocalHotelIcon style={{color:"d90000"}} />
                  {house.bedroom} bedroom
                    <BathtubIcon style={{color:"d90000" , marginLeft:"1em"}} />
                  {house.bathroom} bathroom
                  </TableCell>
                  <TableCell>
                    <Button
                      style={{ color: "red" , marginTop:"9em", marginLeft:"10em "}}
                      color="primary"
                      onClick={() => setOpen(true)}
                    >
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
                <Dialog open={open} onClose={() => setOpen(false)}>
                  <DialogTitle>Confirm Deletion</DialogTitle>
                  <DialogContent>
                    {" "}
                    Are you sure you want to delete this house?
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary">
                      Cancel
                    </Button>
                    <Button
                      onClick={() => {
                        deleteHouse(house.id);
                        setOpen(false);
                      }}
                      color="primary"
                    >
                      Delete
                    </Button>
                  </DialogActions>
                </Dialog>
              </>
            ))
          ) : (
            <Alert severity="info">no houses added yet </Alert>
          )}
        </TableBody>
        <Snackbar
          open={openalert}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success">
            Deleted successfully
          </Alert>
        </Snackbar>
      </Table>
    </TableContainer>
  );
}

export default Favorite;
