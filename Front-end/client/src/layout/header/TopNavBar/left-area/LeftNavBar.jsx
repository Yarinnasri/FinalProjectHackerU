import { Box } from "@mui/material";
import LogoIcon from "../logo/LogoIcon";
import Logo from "../logo/Logo";
import NavItem from "../../../../routes/NavItem";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";
import { useTheme } from "../../../../providers/DarkThemeProvider";

const LeftNavBar = () => {
  const { user } = useUser();
  const { isDark } = useTheme();
  const navItemStyle = {
    color: isDark ? "#e3f2fd" : "#1a0033",
  };

  return (
    <Box>
      <LogoIcon />
      <Logo />

      <Box sx={{ pb: 1, display: { xs: "none", md: "inline-flex" } }}>
        <NavItem {...navItemStyle} label="About" to={ROUTES.ABOUT} />
        {user && user.isBusiness && (
          <>
            <NavItem
              {...navItemStyle}
              label="Fav Recipe"
              to={ROUTES.FAV_RECIPE}
            />
            <NavItem
              {...navItemStyle}
              label="My Recipes"
              to={ROUTES.MY_RECIPE}
            />
          </>
        )}
        {user && user.isAdmin && (
          <NavItem {...navItemStyle} to={ROUTES.CRM} label="CRM" />
        )}
      </Box>
    </Box>
  );
};

export default LeftNavBar;
