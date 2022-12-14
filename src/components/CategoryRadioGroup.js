import React from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";

function CategoryRadioGroup({ title, categories,handler }) {
  
  const [categoryValue, setCategoryValue] = React.useState("All");
  const handleCategoryChange = (event) => {
    setCategoryValue(event.target.value);
    handler({category:event.target.value})
  };

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{title}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        value={categoryValue}
        onChange={handleCategoryChange}
      >
        {categories.map((category) => {
          return <FormControlLabel value={category.name} control={<Radio />} label={category.name} />;
        })}
      </RadioGroup>
    </FormControl>
  );
}

export default CategoryRadioGroup;
