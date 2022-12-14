import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

export function FeaturedProducts({rows,detailHandler}) {
  const navigate = useNavigate()
  //const cards = [1, 2, 3];
   
  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
        Featured Products
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Most wanted products of the Month.
      </Typography>

      {/* End hero unit */}
      <Grid container spacing={4}>
        {rows.map((row) => (
          <Grid item key={row._id} xs={12} sm={6} md={4}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: "0%",
                }}
                image={row.image}
                alt="featured products"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {row.name}
                </Typography>
                <Typography>{row.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() =>{detailHandler(row)}}>View</Button>
                {/* <Button size="small">Edit</Button> */}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
        <Button variant="contained" onClick={()=>{navigate("/products")}}>
          Shop All Products
        </Button>
      </Stack>
    </Container>
  );
}
