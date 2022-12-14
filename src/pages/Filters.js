import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";

import { Stack } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";

import Button from "@mui/material/Button";

import CategoryRadioGroup from "../components/CategoryRadioGroup";
import ColorIconGroup from "../components/ColorIconGroup";
import CompanySelection from "../components/CompanySelection";
import PriceSlider from "../components/PriceSlider";
import SearchField from "../components/SearchField";

import FilterContext from "../context/filterContext";

let filters = {
  searchKey: "",
  category: "All",
  company: "All",
  color: "All",
  price: 0,
  freeshipping: false,
};

 function Filters({filterHandler}) {
  
  const handler = (filter) => {
    filters = { ...filters, ...filter };
    return filters;
  };

  const meta = React.useContext(FilterContext);
  const maxPrice = 10000;

  return (
    <Stack spacing={1}>
      <SearchField handler={handler} />

      <CategoryRadioGroup title="Category" categories={meta.categories} handler={handler} />
      <CompanySelection title="Company" companies={meta.companies} handler={handler} />
      <ColorIconGroup title="Color" colors={meta.colors} handler={handler} />
      <PriceSlider title="Price" maxPrice={maxPrice} handler={handler} />

      <Grid container spacing={1} justifyContent="center" alignItems="center">
        <Grid xs={10}>Free Shipping</Grid>
        <Grid xs={2}>
          <Checkbox
            onChange={(event) => {
              handler({ freeshipping: event.target.checked });
            }}
          />
        </Grid>
      </Grid>
      <Button variant="contained" color="secondary" onClick={()=>{filterHandler(filters)}}>
        Submit
      </Button>
    </Stack>
  );
}

export default Filters;
