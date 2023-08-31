import React, { useContext, useState, useEffect } from "react";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import "./style.css";

function ProfileEdit() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [open, setOpen] = useState(false);
  const [openalert, setOpenalert] = useState(false);

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenalert(false);
  };

  const handleUserName = (event) => {
    setUsername(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleMobile = (event) => {
    setMobile(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const user = { username, mobile, email };

      const response = await fetch(
        "https://my-json-server.typicode.com/urfavmai/mockread-api/users",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (!response.ok) {
        setOpenalert(true);
      }
    } catch (err) {}
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/urfavmai/mockread-api/users"
        );
        if (response.ok) {
          const data = await response.json();
          setUser(data[0]);
        }
      } catch (error) {}
    })();
  }, [user]);

  return (
    <TableContainer component={Paper}>
      <TableBody>
        <Typography
          variant="h5"
          textAlign="center"
          paddingTop="0.5em"
          paddingBottom="0.5em"
          color="#0E6BA8"
          fontWeight={800}
          marginTop="1em"
          marginLeft={15}
        >
          Edit Profile
          <Typography>_________________________</Typography>
        </Typography>
        <TableRow align="center">
          <FormControl defaultValue="" className="formlogin" required>
            <div className="editp">
              <div className="edit1">Uesr Name :</div>
              <TextField
                className="edit2"
                id="outlined"
                defaultValue="Mai"
                value={username}
                onChange={handleUserName}
              />

              <div className="edit1">Email :</div>
              <TextField
                className="edit2"
                id="outlined"
                defaultValue="maaizourob@gmail.com"
                value={email}
                onChange={handleEmail}
              />
              <div className="edit1">Password :</div>

              <TextField
                className="edit2"
                id="outlined"
                defaultValue="mai15112002"
                value={Password}
                onChange={handlePassword}
              />
              <div className="edit1">Phone Number :</div>

              <TextField
                className="edit2"
                id="outlined"
                defaultValue="0597200522"
                value={mobile}
                onChange={handleMobile}
              />
            </div>
            <Button
              onClick={() => setOpen(true)}
              className="btnadd"
              sx={{
                marginLeft: "13em",
                width: "200px",
                marginTop: "2.5em",
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
              Save
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
            <Snackbar
              open={openalert}
              autoHideDuration={8000}
              onClose={handleClose}
            >
              <Alert onClose={handleClose} severity="success">
                Profile updated successfully
              </Alert>
            </Snackbar>
          </FormControl>
        </TableRow>
      </TableBody>
    </TableContainer>
  );
}
export default ProfileEdit;
