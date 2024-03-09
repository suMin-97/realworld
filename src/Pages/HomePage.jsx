import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

const Header = () => {
  return (
    <header>
      <h1>Welcome</h1>
      <ButtonGroup>
        <Link to="/login">
          <Button variant="contained" endIcon={<LoginIcon />}>
            SIGN IN
          </Button>
        </Link>
        <Link to="/register">
          <Button variant="contained" endIcon={<AccessibilityNewIcon />}>
            SIGN UP
          </Button>
        </Link>
      </ButtonGroup>
    </header>
  );
};

const HomePage = () => {
  return (
    <Container fixed>
      <Header></Header>
    </Container>
  );
};

export default HomePage;
