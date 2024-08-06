import { useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import CardHead from "../components/card/CardHead";
import useRecipe from "../hooks/useRecipe";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import PeopleIcon from "@mui/icons-material/People";
import ComputerIcon from "@mui/icons-material/Computer";
import DateRangeIcon from "@mui/icons-material/DateRange";
import CuisineIcon from "@mui/icons-material/Public";
import { Link } from "react-router-dom";
import { useTheme } from "../../providers/DarkThemeProvider";
import RecipeInstructions from "../recipeInstructions/RecipeInstructions";
import "../../index.css";
import { formatDate } from "../components/CardForm";
import { makeFirstLetterCapital } from "../../forms/utils/upperCaseMethod";
const RecipeDetailsPage = () => {
  const { id } = useParams();
  const {
    value: { card, isLoading, error },
    handleGetCardFromClient,
  } = useRecipe();
  useEffect(() => {
    handleGetCardFromClient(id);
  }, [handleGetCardFromClient, id]);
  const { isDark } = useTheme();

  return (
    <Container maxWidth="lg">
      <PageHeader
        title="Recipe Details"
        subtitle="Here you can find all the information about the recipe you are looking for."
      />
      {isLoading && <Spinner />}
      {error && <Error errorMessage={error} />}

      {card && (
        <>
          {" "}
          <Box className="center" flexDirection={"column"}>
            <Box mt={3}>
              <CardHead image={card.image} />
            </Box>
            <RecipeInstructions card={card} />
          </Box>
          <Grid
            container
            minHeight={180}
            spacing={1}
            mb={5}
            mt={5}
            alignItems="center"
          >
            <Grid item xs={12} sm={6} md={3} align="center">
              <CuisineIcon fontSize="large" color="secondary" />
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Oswald, sans-serif",
                  color: isDark ? "#e3f2fd" : "#1a0033",
                }}
              >
                {makeFirstLetterCapital(card.cuisine)}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} align="center">
              <PeopleIcon fontSize="large" color="secondary" />
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Oswald, sans-serif",
                  color: isDark ? "#e3f2fd" : "#1a0033",
                }}
              >
                {makeFirstLetterCapital(card.author)}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} align="center">
              <DateRangeIcon fontSize="large" color="secondary" />
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Oswald, sans-serif",
                  color: isDark ? "#e3f2fd" : "#1a0033",
                }}
              >
                {formatDate(card.dateAdded)}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              container
              direction="column"
              alignItems="center"
            >
              <ComputerIcon fontSize="large" color="secondary" />
              <Typography
                component={Link}
                to={card.web}
                style={{
                  color: isDark ? "#e3f2fd" : "#1a0033",
                  textDecoration: "none",
                  fontFamily: "Oswald, sans-serif",
                }}
                variant="h5"
              >
                Website
              </Typography>
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default RecipeDetailsPage;
