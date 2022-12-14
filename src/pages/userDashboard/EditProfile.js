import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const validateCreditCard = (s) => {
  let v = '0123456789',
      w = '',i, j, k, m, c, a, x;
  for (i = 0; i < s.length; i++) {
      x = s.charAt(i);
      if (v.indexOf(x, 0) !== -1) {
          w += x;
      }
  }
  j = w.length / 2;
  k = Math.floor(j);
  m = Math.ceil(j) - k;
  c = 0;
  for (i = 0; i < k; i++) {
      a = w.charAt(i * 2 + m) * 2;
      c += a > 9 ? Math.floor(a / 10 + a % 10) : a;
  }
  for (i = 0; i < k + m; i++) {
      c += w.charAt(i * 2 + 1 - m) * 1;
  }
  return c % 10 === 0;
}

export function EditProfile({ handler }) {
  const [message, setMessage] = React.useState("");

  const validForm = (profile) =>{
    let result = true;
    let email = profile.email; 
    if (!email) {
      setMessage("Email is Required");
      result = false;
    } else {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      result = re.test(String(email).toLowerCase());
      if (!result) setMessage("Invalid Email address");
    }
    if(result){
      if(validateCreditCard(profile.card)){
        return true;
      }
      setMessage("Credit Card is illegal");
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let profileForm = {
      email: data.get("email"),
      card: data.get("card"),
    };
    if(validForm(profileForm)) {
      handler(profileForm).then(
        resp =>{
          setMessage(resp);
       }
      )
    }  
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Stack sx={{ width: "100%" }} spacing={2}>
        {message && (
          <Alert
            variant="filled"
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setMessage("");
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {message}
          </Alert>
        )}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <SubscriptionsIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Your Profile
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth id="email" label="Email Address" name="email" autoComplete="email"  />
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth name="card" label="Credit or debit card" type="text" id="card" autoComplete="card" />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Update Profile
            </Button>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}

export default EditProfile;
