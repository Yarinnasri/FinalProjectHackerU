import { Typography, Box } from "@mui/material";
import { useTheme } from "../../providers/DarkThemeProvider";
import { makeFirstLetterCapital } from "../../forms/utils/upperCaseMethod";
import "./recipeInstructions.css";

const RecipeInstructions = ({ card }) => {
  const { dishTitle, instructions } = card;
  const { isDark } = useTheme();
  const myColor = isDark ? "#e3f2fd" : "#1a0033";

  return (
    <div
      className="recipe-instructions"
      style={{ background: isDark ? "#1a0033" : "#e3f2fd" }}
    >
      <Typography
        sx={{ fontFamily: "Oswald, sans-serif", color: myColor }}
        variant="h5"
      >
        {makeFirstLetterCapital(dishTitle)}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: "Oswald, sans-serif",
          color: isDark ? "#e3f2fd" : "#1a0033",
          pt: 3,
        }}
      >
        {card.description}
      </Typography>

      <Box mt={2}></Box>
      <div className="instructions-container">
        {instructions.map((line, index) => (
          <Typography
            key={index}
            variant="body1"
            className="instructions-line"
            sx={{ color: myColor, fontFamily: "Oswald, sans-serif" }}
          >
            {line}
          </Typography>
        ))}
      </div>
    </div>
  );
};

export default RecipeInstructions;
