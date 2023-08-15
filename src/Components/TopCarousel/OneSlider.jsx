import React from "react";

import { Paper, Button } from "@mui/material";

const size = window.innerWidth < 600 ? 200 : 400;
const OneSlider = (props) => {
  return (
    <Paper sx={{cursor:"grab"}}>
      <img src={props.item.img} alt={props.item.id} height={size} />
    </Paper>
  );
};

export default OneSlider;
