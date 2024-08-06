import { CardActions, Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import EditModeIcon from "@mui/icons-material/Edit";
import ROUTES from "../../../routes/routesModel";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../users/providers/UserProvider";
import useRecipe from "../../hooks/useRecipe";
import { useState } from "react";
import CardDeleteDialog from "../card/CardDeleteDialog";
import { useTheme } from "../../../providers/DarkThemeProvider";
const CardActionBar = ({ card, onDeleteCard, onLike }) => {
  const { handleLikeCard } = useRecipe();
  const [isDialogOpen, setIsDialog] = useState(false);
  const { isDark } = useTheme();
  const iconColor = isDark ? "#e3f2fd" : "#1a0033";

  const navigate = useNavigate();
  const { user } = useUser();

  const handleDialog = (term) => {
    if (term === "open") setIsDialog(true);
    else setIsDialog(false);
  };

  const handleDeleteCard = () => {
    handleDialog();
    onDeleteCard(card._id);
  };

  const handleLike = async () => {
    const currentLikedState = isLiked;
    setLiked((prev) => !prev);
    await handleLikeCard(card._id, currentLikedState);
    await onLike();
  };

  const [isLiked, setLiked] = useState(
    () => !!user && !!card.likes.find((id) => id === user._id)
  );

  return (
    <>
      <CardActions
        disableSpacing
        sx={{ paddingTop: 0, justifyContent: "space-between" }}
      >
        <Box display="flex" alignItems="center">
          {user && (user._id === card.user_id || user.isAdmin) && (
            <IconButton
              sx={{ color: iconColor }}
              onClick={() => handleDialog("open")}
              size="large"
            >
              <DeleteIcon />
            </IconButton>
          )}
          {user && user._id === card.user_id && (
            <IconButton
              onClick={() => navigate(`${ROUTES.EDIT_RECIPE}/${card._id}`)}
              size="large"
            >
              <EditModeIcon sx={{ color: iconColor }} />
            </IconButton>
          )}
        </Box>
        <Box display="flex" alignItems="center">
          {user && (
            <IconButton
              sx={{ color: iconColor }}
              onClick={handleLike}
              size="large"
            >
              <FavoriteIcon color={isLiked ? "error" : "inherit"} />
            </IconButton>
          )}
        </Box>
      </CardActions>
      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onDelete={handleDeleteCard}
        onChangeDialog={handleDialog}
      />
    </>
  );
};

export default CardActionBar;
