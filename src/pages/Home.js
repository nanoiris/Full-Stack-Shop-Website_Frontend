import React from "react";

import { FeaturedProducts } from "../components/FeaturedProducts";
import { Hero } from "../components/Hero";
import Box from "@mui/material/Box";
import ProductDetail from "./ProductDetail";

import http from "../utils/http";
import { api_products_featured_url,api_products_detail_url } from "../utils/constants";

function Home() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await http.get(api_products_featured_url);
      setRows(result);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const [detail, setDetail] = React.useState({isOpen:false,row:{}});
  
  const detailHandler = (row) => {
    setIsLoading(true);
    http.get(api_products_detail_url + row._id).then((resp) => {
      setDetail({isOpen:true,row:resp});
      setIsLoading(false);
    });
  };

  const detailCloseHandler = (row) => {
    setDetail({isOpen:false,row:row});
  }  

  return (
    <>
      <ProductDetail detail={detail} closeHandler={detailCloseHandler} />
      <HomeMain rows={rows} detailHandler={detailHandler}/>
    </>
  );
}

function HomeMain({ rows,detailHandler }) {
  return (
    <main>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Hero />
        <FeaturedProducts rows={rows} detailHandler={detailHandler} />
      </Box>
    </main>
  );
}

export default Home;
