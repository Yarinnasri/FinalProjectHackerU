import {
  Box,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { formatDate } from "../CardForm";
import { makeFirstLetterCapital } from "../../../forms/utils/upperCaseMethod";
import { useTheme } from "../../../providers/DarkThemeProvider";

const CardBody = ({ card }) => {
  const { isDark } = useTheme();
  const { dishTitle, author, tags, dateAdded, overallTime, cuisine } = card;
  const formattedTags = tags.join(", ");
  const textColor = isDark ? "#e3f2fd" : "#1a0033";

  return (
    <CardContent
      sx={{
        height: "205px",
      }}
    >
      <CardHeader
        title={
          <Typography
            variant="h5"
            color={textColor}
            sx={{ fontFamily: "Oswald, sans-serif" }}
          >
            {makeFirstLetterCapital(dishTitle)}
          </Typography>
        }
        subheader={
          <Typography
            variant="subtitle1"
            color={textColor}
            sx={{ fontFamily: "Oswald, sans-serif" }}
          >
            {makeFirstLetterCapital(author)}
          </Typography>
        }
        sx={{ p: 0, md: 1 }}
      />
      <Divider />
      <Box mt={1}>
        <Typography
          variant="body2"
          color={textColor}
          sx={{ fontFamily: "Oswald, sans-serif" }}
        >
          <strong>Tags: </strong>
          {makeFirstLetterCapital(formattedTags)}
        </Typography>

        <Typography
          variant="body2"
          color={textColor}
          sx={{ fontFamily: "Oswald, sans-serif" }}
        >
          <strong>Date Added: </strong>
          {formatDate(dateAdded)}
        </Typography>

        <Typography
          variant="body2"
          color={textColor}
          sx={{ fontFamily: "Oswald, sans-serif" }}
        >
          <strong>Overall Time (Hours): </strong>
          {overallTime}
        </Typography>

        <Typography
          variant="body2"
          color={textColor}
          sx={{ fontFamily: "Oswald, sans-serif" }}
        >
          <strong>Cuisine: </strong>
          {makeFirstLetterCapital(cuisine)}
        </Typography>
      </Box>
    </CardContent>
  );
};

export default CardBody;
