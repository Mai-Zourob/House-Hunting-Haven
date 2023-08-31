import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { HOUSES } from "../../Utils/routes.constant";

import "./style.css";
export default function CardComponent({ house }) {
  const {
    id,
    image,
    title,
    description,

  } = house;


  return (
    <Card elevation="0" className="card" sx={{ borderRadius: "10px" }}>
      <main class="page-content">
        <div
          class="card"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
          }}
        >
          <div class="content" >
            <h2 class="title" >
              {title.split("").splice(0, 20).join("")}{" "}
            </h2>
            <p class="copy"> {description.split("").splice(0, 140).join("")}</p>
            <button class="btn">
              <Link to={`${HOUSES}/${id}`} className="detailsLink">
                more details
              </Link>
            </button>
          </div>
        </div>
      </main>
    </Card>
  );
}
