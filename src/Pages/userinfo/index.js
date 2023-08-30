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
import "../../Pages/userinfo/style.css";
// import { useNavigate } from "react-router-dom";
// function NotFound() {
//   const navigate = useNavigate();
//   const handleClick = () => {
//     navigate("/");
//   };
function UserInfo() {
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
        "https://my-json-server.typicode.com/SajaRa20/newapi/users",
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
          "https://my-json-server.typicode.com/SajaRa20/newapi/users"
        );
        if (response.ok) {
          const data = await response.json();
          setUser(data[0]);
        }
      } catch (error) {}
    })();
  }, [user]);

  return (
    <TableContainer component={Paper} style={{height:"680px"}}>
      <Typography
        variant="h5"
        textAlign="center"
        paddingTop="0.5em"
        paddingBottom="0.5em"
        color="#0E6BA8"
        fontWeight={800}
        marginTop="1em"
      >
        Personal Information
        <Typography>______________________________________</Typography>
      </Typography>
        <Table >
        <TableBody>
        <div className="profile">
          <div className="info1">User Name :</div>
          <div className="info2">Mai Zourob</div>
          <div className="info1">Email :</div>
        <div className="info2">maaizourob@gmail.com</div>
          <div className="info1">Password :</div>
          <div className="info2">***************</div>
          <div className="info1">Phone Number :</div>
        <div className="info2">0597200522</div>
        <div className="profile-btn">
        <Button
          className="btn"
          sx={{ width: 296 }}
          variant="outlined"
          color="error"
          // onClick={handleClick}
          
        >
          Edit Profile
        </Button>
        <Button
          className="btn"
          sx={{ width: 296 }}
          variant="contained"
          color="error"
          // onClick={openPopup}
        >
          Delete my account
        </Button>
        </div>
        </div>
        </TableBody>
      </Table>
    </TableContainer>
  );
    
}
export default UserInfo;
