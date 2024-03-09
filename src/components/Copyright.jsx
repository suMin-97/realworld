import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

const Copyright = (props) => {
  return (
    <Box sx={{ marginTop: "40px" }}>
      <Typography color="text.secondary" variant="body2">
        {"Copyright © "}
        <Link href="https://conduit.realworld.how/" color="inherit">
          {props.website}
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
};

export default Copyright;
