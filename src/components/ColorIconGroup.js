import React from "react";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import AddIcon from "@mui/icons-material/Add";
import Avatar from "@mui/material/Avatar";

function ColorIconGroup({ title, colors,handler }) {
  const [name, setName] = React.useState("All");

  const handleChange = (event) => {
    setName(event.target.value);
    handler({color: event.target.value});
  };
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">{title}</FormLabel>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Select value={name} onChange={handleChange}>
            <MenuItem value="All">All</MenuItem>
            {colors.map((color) => {
              return (
                <MenuItem value={color.name}>
                  <Avatar sx={{ backgroundColor: color.value,width: 24, height: 24 }}><AddIcon /></Avatar>
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </FormControl>
    </div>
  );
}

export default ColorIconGroup;
