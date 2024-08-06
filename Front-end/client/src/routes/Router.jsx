import { Routes, Route } from "react-router-dom";
import ROUTES from "./routesModel";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import RecipePage from "../recipe-cards/pages/RecipePage";
import LoginPage from "../users/pages/LoginPage";
import SignupPage from "../users/pages/SignupPage";
import CreateRecipePage from "../recipe-cards/pages/CreateRecipePage";
import UserRecipePage from "../recipe-cards/pages/UserRecipePage";
import UserFavoriteRecipePage from "../recipe-cards/pages/UserFavoriteRecipePage";
import RecipeDetailsPage from "../recipe-cards/pages/RecipeDetailsPage";
import EditUserInfo from "../users/pages/EditUserInfo";
import UserProfile from "../users/pages/UserProfile";
import EditUserRecipePage from "../recipe-cards/pages/EditUserRecipePage";
import CrmPage from "../users/pages/CrmPage";
const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<RecipePage />}></Route>
      <Route path={ROUTES.ABOUT} element={<AboutPage />}></Route>
      <Route path={ROUTES.LOGIN} element={<LoginPage />}></Route>
      <Route path={ROUTES.SIGNUP} element={<SignupPage />}></Route>
      <Route path={ROUTES.USER_PROFILE} element={<UserProfile />}></Route>

      <Route path={ROUTES.CREATE_RECIPE} element={<CreateRecipePage />}></Route>
      <Route path={ROUTES.MY_RECIPE} element={<UserRecipePage />}></Route>
      <Route
        path={`${ROUTES.RECIPE_DETAILS}/:id`}
        element={<RecipeDetailsPage></RecipeDetailsPage>}
      ></Route>
      <Route
        path={ROUTES.FAV_RECIPE}
        element={<UserFavoriteRecipePage />}
      ></Route>
      <Route path={ROUTES.EDIT_USER} element={<EditUserInfo />}></Route>
      <Route
        path={`${ROUTES.EDIT_RECIPE}/:id`}
        element={<EditUserRecipePage />}
      ></Route>
      <Route path={ROUTES.CRM} element={<CrmPage />} />

      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
};
export default Router;
