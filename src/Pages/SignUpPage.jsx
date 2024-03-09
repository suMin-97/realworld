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

const SignUpPage = () => {
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
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h3" gutterBottom>
          Sign up
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
          <Grid item xs={6}>
            <TextField fullWidth required label="First Name" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth required label="Last Name" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth required label="Email Address" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth required label="Password" />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              required
              control={<Checkbox />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth type="submit" variant="contained">
              SIGN UP
            </Button>
          </Grid>
          <Grid item xs={12}>
            <LinkRout style={{ color: "#1976d2" }} to="/login">
              <Typography variant="body2" align="right">
                Already have an account? Sign in
              </Typography>
            </LinkRout>
          </Grid>
        </Grid>
      </Box>
      <Copyright website="Conduit" />
    </Container>
  );
};

export default SignUpPage;
