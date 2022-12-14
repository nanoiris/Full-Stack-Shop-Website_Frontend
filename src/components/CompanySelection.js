import React from "react";

import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function CompanySelection({ title, companies,handler }) {
  const [name, setName] = React.useState("All");

  const handleChange = (event) => {
    setName(event.target.value);
    handler({company: event.target.value})
  };
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{ title }</FormLabel>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
        <Select value={name} onChange={handleChange}>
          {companies.map(company =>{
            return (
                <MenuItem value={company.name}>{company.name}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </FormControl>
  );
}
export default CompanySelection;
