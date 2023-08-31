import React from "react";
import vector17 from "../../Utils/images/vector17.svg";
import vector18 from "../../Utils/images/vector18.svg";
import facesmilesolid from "../../Utils/images/facesmilesolid-1.svg";
import "./style.css";

const Form = () => {
  return (
    <div className="form-parent">
      <div  id="item1">
        <img  className="icon" src={vector17}></img>
        <b className="b15">+2500</b><br></br>
        <b className="des">Houses Available</b>
      </div>
      <div  id="item2">
        <img  className="icon" src={vector18}  ></img>
        <b className="b15">+500</b><br></br>
        <b className="des"> Cities Covered</b>
      </div>
      <div  id="item3">
        <img  className="icon" src={facesmilesolid}></img>
        <b className="b15 ">+900</b><br></br>
        <b className="des "> Satisfied Users</b>
      </div>
    </div>
  );
};

export default Form;
