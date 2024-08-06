import { useNavigate } from "react-router-dom";
import { useUser } from "../../users/providers/UserProvider";
import { useEffect } from "react";
import { Container, Fab } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import ROUTES from "../../routes/routesModel";
import CardsFeedback from "../components/CardsFeedBack";
import AddIcon from "@mui/icons-material/Add";
import useRecipe from "../hooks/useRecipe";
import { useTheme } from "../../providers/DarkThemeProvider";

const UserRecipePage = () => {
  const {
    value: { cards, isPending, error },
    handleGetCardsFromUser,
    handleDeleteCard,
  } = useRecipe();
  const { user } = useUser();
  const navigate = useNavigate();
  const { isDark } = useTheme();

  useEffect(() => {
    if (!user) navigate(ROUTES.LOGIN);
    else handleGetCardsFromUser();
  }, [user]);

  const onDeleteCard = async (cardId) => {
    await handleDeleteCard(cardId);
    await handleGetCardsFromUser();
  };

  return (
    <Container sx={{ position: "relative", minHeight: "92vh" }}>
      <PageHeader
        title="My Recipes"
        subtitle="Here you can find your recipes cards"
      />{" "}
      {cards && (
        <Fab
          color="primray"
          aria-label=""
          onClick={() => navigate(ROUTES.CREATE_RECIPE)}
          sx={{
            position: "absolute",
            bottom: 75,
            right: 16,
            zIndex: 1,
            backgroundColor: isDark ? "#e3f2fd" : "#1a0033",
            color: isDark ? "#1a0033" : "#e3f2fd",
            "&:hover": {
              backgroundColor: isDark ? "#e3f2fd" : "#1a0033",
              opacity: 0.8,
            },
          }}
        >
          <AddIcon />
        </Fab>
      )}
      <CardsFeedback
        isPending={isPending}
        error={error}
        cards={cards}
        onDeleteCard={onDeleteCard}
      />
    </Container>
  );
};

export default UserRecipePage;
