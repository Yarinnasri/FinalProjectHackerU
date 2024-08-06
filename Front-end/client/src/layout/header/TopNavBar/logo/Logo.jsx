import ROUTES from "../../../../routes/routesModel";
import NavBarLink from "../../../../routes/NavBarLink";
import { Typography } from "@mui/material";
import QueueRecipeIcon from "@mui/icons-material/LocalDining";
import { useTheme } from "../../../../providers/DarkThemeProvider";
const Logo = () => {
  const { isDark } = useTheme();
  return (
    <NavBarLink to={ROUTES.ROOT}>
      <Typography
        variant="h5"
        color={isDark ? "#e3f2fd" : "#1a0033"}
        sx={{
          display: { xs: "none", md: "inline-flex" },
          marginRight: 2,
          fontFamily: "'Roboto Condensed', sans-serif",
        }}
      >
        {" "}
        <QueueRecipeIcon />
        TastyTreasures
      </Typography>
    </NavBarLink>
  );
};
export default Logo;
