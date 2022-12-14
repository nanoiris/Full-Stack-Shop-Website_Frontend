import React from "react";

import http from "../utils/http";
import { api_filters_url } from "../utils/constants";

const FilterContext = React.createContext();
export default FilterContext;

export const FilterContextProvider = (props) => {
  const [filters, setFilters] = React.useState({});

  const getFilters = async () => {
    let response = await http.get(api_filters_url);
    setFilters(response);
  };

  React.useEffect(() => {
    getFilters();
  }, []);

  const contextValue = {
    ...filters,
  };

  return <FilterContext.Provider value={contextValue}>{props.children}</FilterContext.Provider>;
};
