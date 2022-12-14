import React from "react";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

function PriceSlider({title,maxPrice,handler}) {
   const [value, setValue] = React.useState(0);

  const valueLabelFormat = (value) => {
    return '$' + value;
  }

  const handleSliderChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };
  const handleCommitted = (event, newValue) => {
    console.log(`Committed ${newValue}`);
    handler({price:newValue});
  };

  return (
    <div>
      <div>{title}</div>

      <Box sx={{ width: 260 }}>
        <Typography id="non-linear-slider" gutterBottom>
          {valueLabelFormat(value)}
        </Typography>
        <Slider
          value={value}
          min={0}
          step={1}
          max={maxPrice}
          onChange={handleSliderChange}
          onChangeCommitted={handleCommitted}
          sx={{ width: 260 }}
        />
      </Box>
    </div>
  );
}

export default PriceSlider;
