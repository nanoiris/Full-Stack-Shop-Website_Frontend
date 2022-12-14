import * as React from "react";
import Box from "@mui/material/Box";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function SortBy({handler}) {
  const [order, setOrder] = React.useState("");

  const handleChange = (event) => {
    setOrder(event.target.value);
    handler(event.target.value);
  };
  return (

    <Box sx={{ minWidth: 140 }}>
      <FormControl fullWidth>
        <InputLabel >Sort By</InputLabel>
        <Select variant="filled" size="small" value={order} onChange={handleChange}>
          <MenuItem value="price">Price(Lowest)</MenuItem>
          <MenuItem value="-price">Price(Highest)</MenuItem>
          <MenuItem value="name">Name(A-Z)</MenuItem>
          <MenuItem value="-name">Name(Z-A)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default SortBy;
