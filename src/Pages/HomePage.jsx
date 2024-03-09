import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
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

const Nav = () => {
  return (
    <nav>
      <ol>
        <li>html</li>
        <li>css</li>
      </ol>
    </nav>
  );
};

const Article = () => {
  return (
    <article>
      <h2>Welcome</h2>
      Hello Web!
      <br />
      <ButtonGroup>
        <Button variant="outlined">Create</Button>
        <Button variant="outlined">Update</Button>
      </ButtonGroup>
      <Button variant="outlined" color="error">
        Delete
      </Button>
    </article>
  );
};

const HomePage = () => {
  return (
    <Container fixed>
      <Header></Header>
      <Grid container>
        <Grid item xs="2">
          <Nav></Nav>
        </Grid>
        <Grid item xs="10">
          <Article></Article>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
