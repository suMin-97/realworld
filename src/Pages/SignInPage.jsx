import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link as LinkRout } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Copyright from "../components/Copyright";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordClick = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Container
      sx={{
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      fixed
    >
      <Box
        sx={{
          border: "none",
          width: "300px",
          height: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <Avatar sx={{ bgcolor: blue[600], width: "60px", height: "60px" }}>
          <LockOutlinedIcon sx={{ width: "35px", height: "35px" }} />
        </Avatar>
        <Typography variant="h3" gutterBottom>
          Sign in
        </Typography>
      </Box>
      <Box
        component="form"
        noValidate
        sx={{
          display: "flex",
          margin: "20px",
          border: "none",
          width: "400px",
          flexGrow: 1,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth required label="Email Address" />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth required variant="outlined">
              <InputLabel htmlFor="PasswordInput">Password</InputLabel>
              <OutlinedInput
                id="PasswordInput"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPasswordClick}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel control={<Checkbox />} label="Remember me" />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth type="submit" variant="contained">
              SIGN IN
            </Button>
          </Grid>
          <Grid item xs={12}>
            <LinkRout style={{ color: "#1976d2" }} to="/register">
              <Typography variant="body2" align="right">
                Don't have an account? Sign Up
              </Typography>
            </LinkRout>
          </Grid>
        </Grid>
      </Box>
      <Copyright website="Conduit" />
    </Container>
  );
};

export default SignInPage;
