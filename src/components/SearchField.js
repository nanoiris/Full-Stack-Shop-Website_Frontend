import React from "react";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

function SearchField({handler}) {
  const searchRef = React.useRef();

  const search = () => {
    console.log("Search : " + searchRef.current.value);
    const filters = handler({searchKey: searchRef.current.value});
    console.log("searchKey");
    console.log(filters);
  };
  return (
    <Paper component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 280 }}>
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" inputProps={{ "aria-label": "search" }} name="search" inputRef={searchRef} onChange={search}/>
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search" onClick={search} >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
export default SearchField;
