import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import SettingsPage from "./Pages/SettingsPage";
import EditorPage from "./Pages/EditorPage";
import EditorArticlePage from "./Pages/EditorArticlePage";
import ArticlePage from "./Pages/ArticlePage";
import ProfilePage from "./Pages/ProfilePage";
import FavoritesPage from "./Pages/FavoritesPage";
import BasicLayout from "./Pages/BasicLayout";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BasicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route
            path="/editor/article-slug-here"
            element={<EditorArticlePage />}
          />
          <Route path="/article/article-slug-here" element={<ArticlePage />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
          <Route
            path="/profile/:username/favorites"
            element={<FavoritesPage />}
          />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
