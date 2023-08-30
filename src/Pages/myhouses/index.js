import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import TableContainer from "@mui/material/TableContainer";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { border } from "@mui/system";

function myhouses() {
  const [houses, setHouses] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [error, setError] = useState();
  const [open, setOpen] = useState(false);
  const [openalert, setOpenalert] = useState(false);
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenalert(false);
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

      // Assuming you want to refresh the list of houses after deletion
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
        My Houses
        <Typography>_____________________</Typography>
      </Typography>
      <Table>
        <TableBody>
          {houses.length ? (
            houses.slice(0, 3).map((house) => (
              <>
                <TableRow style={{border:"solid 2px #0E6BA8"}}>
                  <TableCell>
                    <img
                      className="img"
                      src={house.image}
                      alt="house "
                      style={{ width: "150px", height: "150px"}}
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
                    {house.price} $ / week <br /><br />
                    {house.city}{" "}
                  </TableCell>
                  <TableCell>
                    <Button
                      style={{ color: "red" }}
                      color="primary"
                      onClick={() => setOpen(true)}
                    >
                      <DeleteIcon />
                    </Button>
                    <Button style={{ color: "#7D7D7D" }} color="primary">
                      <EditCalendarIcon />
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
export default myhouses;
